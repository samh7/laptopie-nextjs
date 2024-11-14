'use client';

import { useSession, signOut } from 'next-auth/react';
import { useEffect, useCallback, useRef } from 'react';
import { toast } from 'sonner';

export function useAuthCheck() {
  const { data: session, status } = useSession();
  const isCheckingRef = useRef(false);
  const toastShownRef = useRef(false);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const checkUserExists = async () => {
      if (isCheckingRef.current || status === 'loading' || !session?.user?.email) {
        return;
      }

      try {
        isCheckingRef.current = true;

        const response = await fetch('/api/check-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: session.user.email }),
        });

        if (!response.ok && mounted && !toastShownRef.current) {
          toastShownRef.current = true;
          // Schedule the toast and signout for the next tick
          setTimeout(() => {
            if (mounted) {
              toast.error('Your account no longer exists', {
                onDismiss: handleSignOut
              });
            }
          }, 0);
        }
      } catch (error) {
        console.error('Error checking user existence:', error);
      } finally {
        isCheckingRef.current = false;
      }
    };

    checkUserExists();

    return () => {
      mounted = false;
      toastShownRef.current = false;
    };
  }, [session, status, handleSignOut]);
} 