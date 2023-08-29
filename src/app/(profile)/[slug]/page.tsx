"use client";

import { useSession } from "next-auth/react";
import { AvatarIcon, Pencil2Icon } from "@radix-ui/react-icons";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { verifySession } from "@/utils/verifySession";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Account() {
  const { data: session, update } = useSession();

  return (
    <>
      {!session ? (
        verifySession("Account")
      ) : (
        <section>
          <Card className="container mx-auto flex flex-col justify-center items-center w-[500px]">
            <CardHeader>
              <p className="text-2xl">Edit Profile</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-y-6">
              <Avatar className="w-[150px] h-[150px]">
                <AvatarImage src={session.user?.image || ""} />
                <AvatarFallback>
                  <AvatarIcon className="w-[150px] h-[150px]" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center justify-center gap-y-3">
                <div className="flex items-center justify-center relative">
                  <h1 className="text-4xl">
                    {session.user?.name || "Set username"}
                  </h1>
                  <span className="absolute right-[-30px]">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Pencil2Icon className="cursor-pointer" />
                      </DialogTrigger>
                      <DialogContent className="gap-y-5">
                        <DialogHeader>
                          <DialogDescription className="text-xl">
                            Edit username
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center justify-center gap-x-2">
                          Username:
                          <Input
                            type="text"
                            placeholder="Username"
                            defaultValue={session.user?.name || ""}
                          />
                        </div>
                        <Button variant="outline">Save</Button>
                      </DialogContent>
                    </Dialog>
                  </span>
                </div>
                <div className="flex items-center justify-center relative">
                  <h3 className="text-2xl">
                    {session.user?.email || "Add email"}
                  </h3>
                  <span className="absolute right-[-30px]">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Pencil2Icon className="cursor-pointer" />
                      </DialogTrigger>
                      <DialogContent className="gap-y-5">
                        <DialogHeader>
                          <DialogDescription className="text-xl">
                            Edit email
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center justify-center gap-x-2">
                          Email:
                          <Input
                            type="email"
                            placeholder="Email"
                            defaultValue={session.user?.email || ""}
                          />
                        </div>
                        <Button variant="outline">Save</Button>
                      </DialogContent>
                    </Dialog>
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Save</Button>
            </CardFooter>
          </Card>
        </section>
      )}
    </>
  );
}
