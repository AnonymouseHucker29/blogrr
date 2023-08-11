"use client";

import verifySession from "@/utils/verifySession";

export default function About() {
  verifySession();

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-6xl">About Page</h1>
    </div>
  );
}
