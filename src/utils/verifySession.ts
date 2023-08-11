import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const verifySession = () => {
  const router = useRouter();

  useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });
};

export default verifySession;
