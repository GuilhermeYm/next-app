import { Book, Component, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen font-[family-name:var(--font-inter)] flex flex-col items-center justify-center gap-2">
      <h1 className="font-bold text-4xl">Welcome, dev! 🫡</h1>
      <p className="text-xl">
        You can use this template to build your complete website.
      </p>
      <div className="flex gap-5">
        <section className="border-r pr-4">
          <Link
            href={"https:github.com/GuilhermeYm/next-app"}
            className="flex gap-2"
          >
            <Github size={24} />
            Repository
          </Link>
        </section>
        <section className="border-r pr-4">
          <Link
            href={"https:github.com/GuilhermeYm/next-app"}
            className="flex gap-2"
          >
            <Component size={24} />
            Components
          </Link>
        </section>
        <section>
          <Link
            className="flex gap-2"
            href={"https:github.com/GuilhermeYm/next-app"}
          >
            <Book size={24} />
            ReadMe
          </Link>
        </section>
      </div>
    </div>
  );
}
