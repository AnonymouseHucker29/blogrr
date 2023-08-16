import Login from "@/app/(auth)/login/page";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const verifySession = (pageName: string) => {
  return (
    <>
      <Alert
        variant="destructive"
        className="w-[350px] flex justify-center items-center mx-auto"
      >
        <AlertDescription className="flex justify-center items-center gap-x-3">
          <ExclamationTriangleIcon />
          Sign in to access the {pageName} page.
        </AlertDescription>
      </Alert>
      <Login />
    </>
  );
};
