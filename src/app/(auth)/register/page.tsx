"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import PasswordInput from "@/components/others/PasswordInput";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function RegisterPage() {
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    // Handler for input changes
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // Handle form submission
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("Registration failed");
            const signInResult = await signIn("credentials", { email: form.email, password: form.password, redirect: false });
            if (signInResult?.error) {
                setError(signInResult.error);
            } else {
                router.push("/dashboard");
            }
        } catch {
            setError("Registration failed. Please try again.");
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f6f6f7]">
            <Card
                className="w-full max-w-md rounded-[16px] shadow-[var(--color-shadow)] border border-[var(--color-border)] px-8 py-10 bg-[var(--color-card-bg)]"
            >
                <button
                    type="button"
                    onClick={() => router.back()}
                    className=" flex items-center  text-base text-[var(--color-muted-foreground)] bg-transparent border-0 p-0 mb-2 hover:underline "
                >
                    <ArrowLeftIcon className="h-4 w-4 mr-2 " />
                    Back
                </button>
                <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                        <h2 className="text-[2rem] leading-tight font-bold text-[var(--color-text-primary)] mb-1">
                            Register with email
                        </h2>
                        <p className="text-base text-[var(--color-muted-foreground)] font-normal">
                            Register using your email address.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label htmlFor="firstName" className="block mb-1 text-base font-medium text-[var(--color-text-primary)]">
                                First Name
                            </label>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                                className="h-11 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-[8px] text-base"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="lastName" className="block mb-1 text-base font-medium text-[var(--color-text-primary)]">
                                Last Name
                            </label>
                            <Input
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                                required
                                className="h-11 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-[8px] text-base"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-base font-medium text-[var(--color-text-primary)]">
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="h-11 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-[8px] text-base"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-base font-medium text-[var(--color-text-primary)]">
                            Password
                        </label>
                        <PasswordInput
                            name="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />

                    </div>
                    <Button
                        type="submit"
                        className="w-full h-12 rounded-full text-base font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-none "
                    >
                        Create my account
                    </Button>
                </form>
                <hr className="my-1 border-t border-[var(--color-border)]" />
                <div className="flex justify-center items-center gap-2 text-base text-[var(--color-muted-foreground)]">
                    Already have an account?
                    <Link href="/login" className="font-medium text-[var(--color-muted-foreground)] hover:text-black">Login</Link>
                </div>
            </Card>

        </div>
    );
}
