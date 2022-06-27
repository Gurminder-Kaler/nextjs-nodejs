import "../styles/globals.css";
// import 'bootstrap/dist/css/bootstrap.css';
import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "@/context/authContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    // somewhere at the root of your app
    <AuthContextProvider>
      <SessionProvider session={session}>
        <ToastContainer />
        <Component {...pageProps} />
      </SessionProvider>
    </AuthContextProvider>
  );
}
