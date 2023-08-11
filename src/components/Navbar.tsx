"use client";

import Link from "next/link";
import NavbarData from "@/data/NavData";
import { ThemeToggle } from "./ThemeToggle";
import { Credentials } from "./Credentials";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <header className="flex items-center justify-between container mx-auto p-5">
          <h1 className="text-4xl">
            <Link href="/">Blogrr</Link>
          </h1>
          <nav className="flex gap-x-4 justify-center items-center">
            {NavbarData.map((props) => (
              <Link
                key={props.id}
                href={props.link}
                target={props.target}
                className=" text-2xl opacity-70 hover:opacity-100"
              >
                {props.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-x-8">
            {status === "authenticated" && <Credentials />}
            <ThemeToggle />
          </div>
        </header>
      ) : (
        <header className="flex items-center justify-between container mx-auto p-5">
          <h1 className="text-4xl">
            <Link href="/">Blogrr</Link>
          </h1>
          <ThemeToggle />
        </header>
      )}
    </>
  );
};

export default Navbar;
