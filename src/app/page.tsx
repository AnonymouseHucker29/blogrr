"use client";

import verifySession from "@/utils/verifySession";

export default function HomePage() {
  verifySession();

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-6xl">Home Page</h1>
      </div>
    </>
  );
}
