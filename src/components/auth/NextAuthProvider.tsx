"use client";
import { SessionProvider } from "next-auth/react";
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { Toaster } from 'sonner';

function AuthCheck({ children }: { children: React.ReactNode }) {
  useAuthCheck();
  return <>{children}</>;
}

export default function NextAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthCheck>
        {children}
      </AuthCheck>
      <Toaster 
        position="top-center"
        expand={true}
        richColors
      />
    </SessionProvider>
  );
}
