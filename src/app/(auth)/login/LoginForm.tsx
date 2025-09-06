"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { signIn } from "@/lib/auth-client";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const result = await signIn("credentials", { email, password, redirect: false });
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/dashboard");
      }
    } catch {
      setError("Login failed. Please try again.");
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-7">
      <div>
        <h2 className="text-[2rem] leading-tight font-semibold text-[var(--color-text-primary)] mb-1">
          Login with email
        </h2>
        <p className="text-base text-[var(--color-muted-foreground)] font-normal">
          Login using your email address.
        </p>
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 text-base font-semibold text-[var(--color-text-primary)]">
          Email or Username
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email or username"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="h-11 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-[8px] text-base"
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 text-base font-semibold text-[var(--color-text-primary)]">
          Password
        </label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="h-11 pr-10 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-[8px] text-base"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-700"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeIcon className="h-5 w-5" />
            ) : (
              <EyeSlashIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      <Button
        type="submit"
        className="w-full h-12 rounded-full text-base font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-none mt-2"
      >
        Login
      </Button>
      <hr className="my-2 border-t border-[var(--color-border)]" />
      <div className="flex justify-between items-center text-base text-[var(--color-muted-foreground)] gap-2">
  <a
    href="#"
    className="font-medium text-[var(--color-muted-foreground)] no-underline hover:text-black hover:underline cursor-pointer transition-colors"
  >
    Forgot password
  </a>
  <span>|</span>
  <a
    href="/register"
    className="font-medium text-[var(--color-muted-foreground)] no-underline hover:text-black hover:underline cursor-pointer transition-colors"
  >
    Create New Account
  </a>
</div>

    </form>
  );
}
