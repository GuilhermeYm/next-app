import Button from "@/components/FormComponents/Button";
import Input from "@/components/FormComponents/Input";
import Label from "@/components/FormComponents/Label";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen min-w-screen py-12 ">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-16 border-b border-zinc-800 pb-8">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
            Buttons
          </span>
          <h1 className="font-bold text-4xl mt-2">Template of Buttons</h1>
          <p className="text-zinc-400 mt-3 text-lg">
            You can use this template to build your complete website. This is a
            button template.
          </p>
        </header>
      </div>
      <main className="space-y-24">
        <section className="mx-auto max-w-5xl px-6 border-b border-zinc-50/30 pb-9">
          <h2 className="text-2xl font-bold mb-8 text-center">Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary */}
            <div className="bg-zinc-800/80 backdrop-blur-md rounded-2xl border border-zinc-700/50 shadow-xl px-4 py-6 flex flex-col items-center gap-4">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Primary
              </span>
              <Button type="button" variant="primary">
                Primary
              </Button>
            </div>
            {/* Secondary */}
            <div className="bg-zinc-800/80 backdrop-blur-md rounded-2xl border border-zinc-700/50 shadow-xl px-4 py-6 flex flex-col items-center gap-4">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Secondary
              </span>
              <Button type="button" variant="secondary">
                Secondary
              </Button>
            </div>
            {/* Success */}
            <div className="bg-zinc-800/80 backdrop-blur-md rounded-2xl border border-zinc-700/50 shadow-xl px-4 py-6 flex flex-col items-center gap-4">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Success
              </span>
              <Button type="button" variant="success">
                Success
              </Button>
            </div>
            {/* Danger */}
            <div className="bg-zinc-800/80 backdrop-blur rounded-2xl border border-zinc-700/50 shadow-xl px-4 py-6 flex flex-col items-center gap-4">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Danger
              </span>
              <Button type="button" variant="danger">
                Danger
              </Button>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center gap-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Examples</h2>
          <div className="max-w-1/2 flex flex-col gap-4">
            {/*Forms */}
            <div className="bg-zinc-800/80 backdrop-blur-2xl rounded-2xl border border-zinc-700/50 shadow-xl px-4 py-6 flex flex-col items-center gap-4">
              <h3 className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                Using in forms
              </h3>
              <form className="space-y-2">
                <div>
                  <Label htmlFor="username" variant="primary">
                    Username
                  </Label>
                  <Input
                    variant="primary"
                    id="username"
                    name="username"
                    type={"text"}
                  />
                </div>
                <div>
                  <Label htmlFor={"password"} variant="primary">
                    Password
                  </Label>
                  <Input
                    variant="primary"
                    type={"password"}
                    id="password"
                    name="password"
                  />
                </div>
                <div>
                  <Button type="button" variant="secondary">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
            {/* Links */}
            <div className="bg-zinc-800/80 backdrop-blur-2xl rounded-2xl border border-zinc-700/50 shadow-xl px-4 py-6 flex flex-col items-center gap-4">
              <h3 className="text-blue-400 text-sm font-medium uppercase tracking-widerx">
                Links
              </h3>
              <Button type="button" variant="primary" className="flex gap-3">
                <Github size={24} />
                <Link href="https://github.com">
                  Clique here to go to Github
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
