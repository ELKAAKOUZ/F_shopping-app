import { useState } from "react";
import { useRouter } from "next/router";

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // User is signed up successfully, you can redirect them to the desired page
      console.log("User signed up:", userCredential.user);
      router.push("/");
    } catch (error) {
      // Handle sign-up error
      console.log(error);
      setError("An error occurred during sign-up");
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
      <h1 className="text-center font-semibold text-2xl">Sign Up</h1>
      <form className="border-2 rounded-2xl p-2 m-5" onSubmit={handleSignUp}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="my-2 border rounded-2xl p-1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Password :
          </label>
          <input
            type="password"
            id="password"
            className="my-2 border rounded-2xl p-1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="confirmPassword">
            Confirm Password :
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="my-2 border rounded-2xl p-1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-yellow-300 w-full rounded-2xl p-2 my-5"
          type="submit">
          Sign Up
        </button>
        <h6>
          already have an account{" "}
          <span
            onClick={() => router.push("/SignIn")}
            className="text-blue-500 cursor-pointer">
            Sign In
          </span>
        </h6>
      </form>
    </div>
  );
}

export default SignUp;
