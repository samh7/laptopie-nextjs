"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "sonner";

export default function SignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isEmailSignIn, setIsEmailSignIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isRegistering || isEmailSignIn) {
        // Show loading toast
        const loadingToast = toast.loading(
          isRegistering ? "Creating your account..." : "Preparing magic link..."
        );

        // Create user first for both registration and magic link
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password: isRegistering ? password : undefined,
            username,
          }),
        });

        if (!res.ok) {
          const errorText = await res.text();
          // If user exists, continue with signin for magic link
          if (errorText === "User already exists" && isEmailSignIn) {
            // Update username if it's different
            await fetch("/api/update-username", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                username,
              }),
            });
          } else {
            toast.dismiss(loadingToast);
            toast.error(errorText);
            return;
          }
        }

        // Proceed with email signin
        const signInRes = await signIn("email", {
          email,
          callbackUrl,
          redirect: false,
        });

        toast.dismiss(loadingToast);

        if (signInRes?.error) {
          toast.error("Error sending email");
        } else {
          toast.success("Check your email for the magic link!");
          router.push("/auth/verify-request");
        }
      } else {
        // Regular credentials sign in
        const loadingToast = toast.loading("Signing you in...");

        const res = await signIn("credentials", {
          email,
          password,
          callbackUrl,
          redirect: false,
        });

        toast.dismiss(loadingToast);

        if (res?.error) {
          toast.error("Invalid credentials or email not verified");
        } else {
          toast.success("Successfully signed in!");
          router.push(callbackUrl);
        }
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignIn = (provider: "github" | "google") => {
    toast.loading(`Connecting to ${provider}...`, {
      duration: 2000,
    });
    signIn(provider, { callbackUrl });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {/* <Toaster position="top-center" expand={true} richColors /> */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-md px-4">
        <div className="flex flex-col gap-4 w-full">
          <Button
            onClick={() => handleOAuthSignIn("github")}
            disabled={isLoading}
            variant="default"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaGithub />
            Sign in with GitHub
          </Button>

          <Button
            onClick={() => handleOAuthSignIn("google")}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-gray-900 hover:bg-gray-50 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaGoogle />
            Sign in with Google
          </Button>
        </div>

        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>

        <div className="flex gap-4 w-full">
          <Button
            onClick={() => {
              setIsRegistering(false);
              setIsEmailSignIn(false);
            }}
            className={`flex-1 px-4 py-2 rounded ${
              !isRegistering && !isEmailSignIn
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-900 hover:text-white"
            }`}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              setIsRegistering(true);
              setIsEmailSignIn(false);
            }}
            className={`flex-1 px-4 py-2 rounded ${
              isRegistering
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-900 hover:text-white"
            }`}
          >
            Register
          </Button>
          <Button
            variant="default"
            onClick={() => {
              setIsRegistering(false);
              setIsEmailSignIn(true);
            }}
            className={`flex-1 px-4 py-2  rounded ${
              isEmailSignIn
                ? "bg-gray-900  text-white"
                : "bg-gray-200  text-gray-900 hover:text-white"
            }`}
          >
            Magic Link
          </Button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 w-full"
        >
          {(isRegistering || isEmailSignIn) && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3"
              required
              disabled={isLoading}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-3"
            required
            disabled={isLoading}
          />

          {!isEmailSignIn && !isRegistering && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3"
              required
              disabled={isLoading}
            />
          )}

          {isRegistering && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3"
              required
              disabled={isLoading}
            />
          )}

          <Button
            type="submit"
            disabled={isLoading}
            variant="default"
            // className={`rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
          >
            {isLoading ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-r-2 border-white border-r-transparent mr-2" />
            ) : null}
            {isRegistering
              ? "Register"
              : isEmailSignIn
              ? "Send Magic Link"
              : "Sign In"}
          </Button>
          <div className="flex justify-center hover:scale-[1.04] transition-all duration-300 ease-in-out items-center gap-2">
            <a href="/">Go Home</a>
            <ArrowRight className="w-4 h-4" />
          </div>
          {/* <Link href="/home">Go to Home</Link> */}
        </form>
      </div>
    </div>
  );
}
