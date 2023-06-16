import { useState } from "react";
import { useRouter } from "next/router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User is signed in, redirect to the desired page
      router.push("/");
    } catch (error) {
      // Handle sign-in error
      console.log(error);
    }
  };

  return (
    <div className="h-screen max-w-xs mx-auto">
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
      <h1 className="text-center font-semibold text-2xl">Sign In</h1>

      <form className="border-2 rounded-2xl p-2 m-5" onSubmit={handleSignIn}>
        <input
          type="email"
          className="my-2 border rounded-2xl p-1"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="my-2 border rounded-2xl p-1"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-yellow-300 w-full rounded-2xl p-2 my-5"
          type="submit">
          Sign In
        </button>
        <h6>
          Don't have an account?{" "}
          <span
            onClick={() => router.push("/SignUp")}
            className="text-blue-500 cursor-pointer">
            Sign Up
          </span>
        </h6>
      </form>
    </div>
  );
}

export default SignIn;
