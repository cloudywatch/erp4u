
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const modules = [
  { icon: "◫", name: "Finance", detail: "Reports & insights" },
  { icon: "▦", name: "Inventory", detail: "Stock & orders" },
  { icon: "♧", name: "People", detail: "Teams & payroll" },
  { icon: "⌘", name: "Operations", detail: "Workflows & tasks" },
];

export default function HomePage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Enter your username and password.");
      return;
    }

    // TODO: Connect your database-backed authentication API.
    // Never treat client-side validation as authentication.
    setError("Authentication is not connected yet.");
  }

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-[#191a35]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#5b4bdb] text-xl font-bold text-white shadow-lg shadow-violet-200">
            e
          </span>
          <span>
            <span className="block text-xl font-bold tracking-tight">
              erp4u
            </span>
            <span className="block text-[9px] font-semibold tracking-[.22em] text-slate-500">
              BUSINESS, IN SYNC.
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 sm:flex">
          <span className="size-2 rounded-full bg-emerald-500" />
          Your business, one workspace
        </div>

        <a
          href="#login"
          className="rounded-xl bg-[#5b4bdb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4939c4]"
        >
          Sign in <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-14 pt-10 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-16">
        <div className="relative">
          <div className="pointer-events-none absolute -left-8 -top-10 -z-0 size-48 rounded-full bg-violet-200/40 blur-3xl" />

          <div className="relative">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700">
              <span>✳</span> ONE WORKSPACE. EVERY WORKFLOW.
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Your business,
              <span className="mt-2 block bg-gradient-to-r from-[#6554dc] to-[#a16be8] bg-clip-text pb-2 text-transparent">
                beautifully connected.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
              Finance, inventory, people, and operations — bring
              your entire business together in one intelligent
              workspace built to move you forward.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {modules.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-2xl border border-slate-200/80 bg-white/80 p-4 transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/60 sm:p-5"
                >
                  <span className="mb-4 grid size-10 place-items-center rounded-xl bg-violet-50 text-xl text-violet-600 transition group-hover:bg-violet-100">
                    {item.icon}
                  </span>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <span className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white text-violet-600">
                ✓
              </span>
              Designed for clarity. Built for growth.
            </div>
          </div>
        </div>

        <div id="login" className="relative mx-auto w-full max-w-md scroll-mt-8">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-200/60 via-transparent to-indigo-200/60 blur-2xl" />

          <div className="rounded-[1.75rem] border border-white bg-white p-7 shadow-[0_24px_80px_-28px_rgba(58,48,120,0.22)] sm:p-9">
            <div className="mb-8">
              <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#6d5ce7] to-[#5140c6] text-xl text-white shadow-lg shadow-violet-200">
                ✳
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-violet-600">
                YOUR WORKSPACE AWAITS
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Welcome back
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sign in to your account to pick up where you left off.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email or username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="you@company.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setError("Password reset will be available once authentication is connected.")
                    }
                    className="text-xs font-semibold text-violet-600 hover:text-violet-800"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 pr-16 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-4 text-xs font-semibold text-slate-500 hover:text-violet-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="size-4 rounded border-slate-300 accent-violet-600"
                />
                Remember me
              </label>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6252db] to-[#7460e9] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-200/70 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-200 active:translate-y-0"
              >
                Sign in to erp4u
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                ERP made simpler
              </span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
              <span className="mt-0.5 text-violet-600">◇</span>
              <p className="text-xs leading-5 text-slate-500">
                Your business workspace, thoughtfully organized.
                Authentication will be connected to your secure
                backend in the next stage.
              </p>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            Secure workspace access · erp4u
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} erp4u. All rights reserved.</p>
          <p>One platform. Your entire business.</p>
        </div>
      </footer>
    </main>
  );
}
