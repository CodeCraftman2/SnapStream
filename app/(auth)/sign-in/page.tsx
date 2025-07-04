"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/" className="logo-link">
          <Image
            src="/assets/icons/logo.svg"
            alt="SnapStream Logo"
            width={32}
            height={32}
          />
          <h1>SnapStream</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
            SnapStream takes the hassle out of screen recording. Whether it&apos;s short demos or full-scale presentations — smooth, fast, and instantly shareable.
            </p>
            <div className="flex flex-row gap-8 items-center justify-center">
              <article>
                <Image
                  src="/assets/images/Deepesh.jpg"
                  alt="Deepesh"
                  width={94}
                  height={94}
                  className="rounded-full"
                />
                <div>
                  <h2>Deepesh Kumar</h2>
                  <p>Software Engineer</p>
                </div>
              </article>

              <article>
                <Image
                  src="/assets/images/Yagya.jpg"
                  alt="Yagya Saini"
                  width={94}
                  height={94}
                  className="rounded-full"
                />
                <div>
                  <h2>Yagya Saini</h2>
                  <p>Software Engineer</p>
                </div>
              </article>
            </div>
          </section>
        </div>
        <p>© SnapStream 2025</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="SnapStream Logo"
              width={40}
              height={40}
            />
            <h1 className="text-[#1de9b6]">SnapStream</h1>
          </Link>
          <p className="text-white">
            Create and share your very first <span style={{ color: "#1de9b6" }}>SnapStream video</span> in no
            time!
          </p>

          <button
            onClick={async () => {
              return await authClient.signIn.social({
                provider: "google",
              });
            }}
          >
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default SignIn;
