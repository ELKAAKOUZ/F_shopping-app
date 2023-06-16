import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

import Footer from "../components/Footer";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Footer>
        <Component {...pageProps} />
      </Footer>
    </SessionProvider>
  );
}

// import "@/styles/globals.css";
// import { useRouter } from "next/router";
// import Footer from "../components/Footer";

// export default function App({ Component, pageProps }) {
//   const router = useRouter();
//   const { pathname } = router;

//   // Exclude the footer from the sign-in and sign-up pages
//   const excludeFooterPaths = ["/SignIn", "/SignUp"];
//   const shouldShowFooter = !excludeFooterPaths.includes(pathname);

//   return (
//     <div>
//       {shouldShowFooter && <Footer />}
//       <Component {...pageProps} />
//     </div>
//   );
// }
