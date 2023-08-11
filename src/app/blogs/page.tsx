"use client";

import verifySession from "@/utils/verifySession";

export default function BlogPage() {
  verifySession();

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-6xl">Blog Page</h1>
    </div>
  );
}
