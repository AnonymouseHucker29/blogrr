"use client";

import { verifySession } from "@/utils/verifySession";
import { useSession } from "next-auth/react";

export default function About() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        verifySession()
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-6xl">About Page</h1>
        </div>
      )}
    </>
  );
}
