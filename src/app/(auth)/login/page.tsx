import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LoginForm from "./formLogin";

export default function Login() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px] mt-16 flex flex-col justify-center items-center">
        <CardHeader>
          <CardTitle className="text-2xl">LOGIN</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
