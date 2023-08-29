"use client";

import { useSession, signOut } from "next-auth/react";
import { AvatarIcon, Pencil1Icon } from "@radix-ui/react-icons";
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
import Link from "next/link";

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
            <AvatarIcon className="w-[100px] h-[100px]" />
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
        <DropdownMenuItem>
          <div className="flex items-center justify-center gap-x-3">
            <Pencil1Icon />
            <Link href={`/${session?.user?.name}`}>Edit account</Link>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/" })}
          className="cursor-pointer"
        >
          <div className="flex items-center justify-center gap-x-3">
            <ExitIcon />
            Sign out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
