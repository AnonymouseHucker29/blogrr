"use client";

import { useSession, signOut } from "next-auth/react";
import { AvatarIcon } from "@/components/misc/avatar";
import { ExitIcon } from "@/components/misc/exitIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const Credentials = () => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer scale-90">
          <AvatarImage
            src={session?.user?.image || undefined}
            alt="Profile Icon"
          />
          <AvatarFallback>
            <AvatarIcon />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <h3 className="flex justify-center items-center">
            Hello, {session && `${session.user?.name}!`}
          </h3>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <div className="flex items-center justify-center gap-x-3">
            <ExitIcon />
            Sign out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
