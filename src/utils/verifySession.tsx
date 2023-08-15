import Login from "@/app/(auth)/login/page";
import { Card, CardContent } from "@/components/ui/card";

export const verifySession = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card>
          <CardContent className="pt-10">
            <h1 className="text-xl text-red-500">
              You need to be signed in to view the content.
            </h1>
          </CardContent>
        </Card>
      </div>
      <Login />
    </>
  );
};
