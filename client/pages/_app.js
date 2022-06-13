import "../styles/globals.css";
// import 'bootstrap/dist/css/bootstrap.css';
import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.css";
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
