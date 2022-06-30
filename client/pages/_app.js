import "@/styles/globals.css";
// import 'bootstrap/dist/css/bootstrap.css';
import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.css";
import { Wrapper, Store } from "@/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import setAuthToken from "@/utils/setAuthToken";
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from '@/store/actions/authAction';
//Pertains the user

function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    const { location, localStorage } = window;
    if (localStorage.jwtToken) {
      //set Auth token header auth
      setAuthToken(localStorage.jwtToken);
      //decode token
      const decoded = jwt_decode(localStorage.jwtToken);
      //set user and is Authenticated
      Store.dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        Store.dispatch(logoutUser());
        Store.dispatch(clearCurrentProfile());
        //clear current Profile
        location.href = "/login";
      }
    }
  }, []);
  return (
    <Provider store={Store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
export default Wrapper.withRedux(App);
