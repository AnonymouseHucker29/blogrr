"use client";

import { verifySession } from "@/utils/verifySession";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        verifySession(Home.name)
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-6xl">Home Page</h1>
        </div>
      )}
    </>
  );
}
