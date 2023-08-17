"use client";

import { verifySession } from "@/utils/verifySession";
import { useSession } from "next-auth/react";

export default function Blog() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        verifySession("Blogs")
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-6xl">Blogs Page</h1>
        </div>
      )}
    </>
  );
}
