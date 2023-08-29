import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { GoogleLoginButton } from "@/components/GoogleLoginButton";
import RegisterForm from "@/app/(auth)/register/formRegister";
import Link from "next/link";

export default function Register() {
  return (
    <section className="flex justify-center items-center">
      <Card className="w-[350px] mt-4 pt-4 pb-3 flex flex-col justify-center items-center">
        <CardTitle className="text-xl">REGISTER NOW</CardTitle>
        <CardContent>
          <RegisterForm />
          <h3 className="text-xs text-center mt-7">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login now!
            </Link>
          </h3>
          <div className="text-sm mx-auto my-10 mt-6 mb-6 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            OR
          </div>
          <GoogleLoginButton />
        </CardContent>
      </Card>
    </section>
  );
}
