import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleSignIn = async () => {
    const signInResult = await signIn();
    if (signInResult?.error) {
      console.log("erorrrrrororororo");
    } else {
      // Redirect to the desired path after successful sign-in
      router.push("/path");
    }
  };
  return (
    <div className="h-screen max-w-xs mx-auto text-center">
      <div
        className="relative flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/pic1.jpeg')",
          backgroundSize: "contain",
          height: "10rem",
        }}>
        <div className="absolute flex items-center justify-center space-x-2 top-1/2 text-black text-2xl font-semibold">
          <p>My Shopping App</p>
        </div>
      </div>
      <div>
        <Image className=" mx-auto" src="/pic2.jpeg" height={200} width={300} />
      </div>

      <button
        // onClick={() => signIn()}
        onClick={handleSignIn}
        className="bg-yellow-300 w-2/3 mx-auto  rounded-2xl p-2 my-12">
        Login In
      </button>
    </div>
  );
}

export default Login;
