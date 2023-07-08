import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/firebase";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    const router = useRouter();

    // Check if the user is authenticated
    if (loading) {
      // Show loading spinner or skeleton UI while checking authentication status
      return <h1>Loading...</h1>;
    }

    if (!user) {
      // User is not authenticated, redirect to login page
      router.push("/");
      return null;
    }

    // User is authenticated, render the wrapped component
    return <WrappedComponent />;
  };

  return WithAuthComponent;
};

export default withAuth;
