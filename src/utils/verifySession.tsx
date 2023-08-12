import Login from "@/app/(auth)/login/page";

const verifySession = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-xl text-red-600">
          You need to be signed in to view the content.
        </h1>
      </div>
      <Login />
    </>
  );
};
export default verifySession;
