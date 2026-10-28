
import React from "react";
import FormLogin from "./components/FormLogin";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] lg:grid lg:grid-cols-2">

      {/* Left Side - Library Image */}
      <section
        className="relative hidden min-h-screen bg-cover bg-center lg:flex"
        style={{
          backgroundImage: "url('/images/bg_imageLogin.png')",
        }}
      >
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10291f]/90 via-[#10291f]/20 to-black/20" />

        {/* Brand */}
        <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-2xl">
              📚
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-wide">FOLIO</h2>
              <p className="text-xs tracking-[0.25em] text-white/70">
                LIBRARY MANAGEMENT
              </p>
            </div>
          </div>

          {/* Hero Text */}
          <div className="max-w-xl pb-6 text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d9c79b]">
              Discover · Learn · Grow
            </p>

            <h1 className="font-serif text-5xl font-medium leading-tight xl:text-6xl">
              A world of knowledge,
              <span className="block italic text-[#e3d4ad]">
                within reach.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/75">
              Every book opens a new possibility. Organize your
              collection and inspire your community to discover more.
            </p>

            <div className="mt-10 h-px w-20 bg-[#d9c79b]" />
            <p className="mt-5 text-sm text-white/60">
              Your knowledge. Your library. One place.
            </p>
          </div>
        </div>
      </section>

      {/* Right Side - Login */}
      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-12 lg:px-14 xl:px-24">
        <div className="w-full max-w-md">

          {/* Mobile Brand */}
          <div className="mb-12 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#183d2e] text-2xl text-white">
              📚
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide text-[#183d2e]">
                FOLIO
              </h2>
              <p className="text-xs tracking-widest text-gray-500">
                LIBRARY MANAGEMENT
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#71806f]">
              Welcome back
            </p>

            <h2 className="font-serif text-4xl font-semibold tracking-tight text-[#183d2e] sm:text-5xl">
              Sign in to Folio
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Your library, thoughtfully organized.
              Enter your credentials to continue.
            </p>
          </div>

          {/* Login Form */}
          <FormLogin />

          {/* Footer */}
          <div className="mt-10 border-t border-[#e7e5dc] pt-6">
            <p className="text-center text-xs leading-6 text-gray-500">
              By signing in, you agree to your organization's
              access and security policies.
            </p>

            <p className="mt-5 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Folio Library Management
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
