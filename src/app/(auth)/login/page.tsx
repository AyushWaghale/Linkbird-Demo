"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import { signIn } from "@/lib/auth-client";
import { EnvelopeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  if (showEmailForm) {
    return (
      <Card className="max-w-md mx-auto mt-16 p-8 rounded-[16px] shadow-[0_4px_24px_0_rgb(0,0,0,0.08)] border border-[var(--color-border)] bg-white">
        <button
          type="button"
          onClick={() => setShowEmailForm(false)}
          className="flex items-center text-base text-[var(--color-muted-foreground)] bg-transparent border-0 p-0 mb-4 hover:underline"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back
        </button>
        <LoginForm />
      </Card>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dot-grid">
      <Card className="max-w-md w-full flex flex-col items-center p-8 rounded-[16px] shadow-[0_4px_24px_0_rgb(0,0,0,0.08)] border border-[var(--color-border)] bg-white text-center">
        <h2 className="text-3xl font-semibold  text-[var(--color-text-primary)]">
          Continue with an account
        </h2>
        <p className="mb-2 text-[var(--color-muted-foreground)] text-base">
          You must log in or register to continue.
        </p>
        {/* Google button */}
        <Button
          variant="outline"
          className="w-full text-black h-12 mb-2 flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white font-medium text-base hover:bg-gray-50 transition"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="w-5 h-5 mr-2" aria-hidden="true" />
          Continue with Google
        </Button>
        {/* Email button */}
        <Button
          className="w-full h-12  flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white font-semibold text-base hover:bg-[var(--color-primary-hover)] shadow-none"
          onClick={() => setShowEmailForm(true)}
        >
          <EnvelopeIcon className="w-5 h-5 mr-2" aria-hidden="true" />
          Login with Email
        </Button>
        {/* Divider */}
        <hr className="w-full border-t border-[var(--color-border)] " />
        {/* Register link */}

        <p className="text-[var(--color-muted-foreground)]  mb-2 group hover:text-black">
          <span className="font-semibold group-hover:underline">
            New User?{" "}
          </span>
          <a
            href="/register"
            className="text-[var(--color-muted-foreground)] font-semibold no-underline group-hover:underline group-hover:text-black transition-colors cursor-pointer"
          >
            Create New Account
          </a>
        </p>



        {/* Privacy Policy */}
        <p className="text-xs text-[var(--color-muted-foreground)]">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            T&amp;Cs
          </a>
        </p>
      </Card>
    </div>
  );
}
