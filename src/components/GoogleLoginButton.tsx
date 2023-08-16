"use client";

import { GoogleLogo } from "@/components/misc/google";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const GoogleLoginButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const finalCallbackUrl = callbackUrl || undefined;
  return (
    <Button
      variant="outline"
      className="w-full flex rounded-full justify-center items-center gap-x-4"
      onClick={() => signIn("google", { finalCallbackUrl })}
    >
      <GoogleLogo />
      Continue with Google
    </Button>
  );
};
