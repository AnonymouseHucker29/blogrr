"use client";

import { verifySession } from "@/utils/verifySession";
import { useSession } from "next-auth/react";

export default function Blog() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        verifySession(Blog.name)
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-6xl">Blog Page</h1>
        </div>
      )}
    </>
  );
}
