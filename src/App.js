// import logo from "./logo.svg";
import ReactDOM from "react-dom";
// import GoogleLogin from "react-google-login";
// or
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Landing from "./pages/landing";
import { GoogleLogin } from "react-google-login";
import "./App.css";

//69658947465-7osqf4m6tf5vea9vobu1r5gu3vpv7c72.apps.googleusercontent.com
//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

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    // <div>
    //   <GoogleLogin
    //     clientId="69658947465-7osqf4m6tf5vea9vobu1r5gu3vpv7c72.apps.googleusercontent.com"
    //     buttonText="Login"
    //     onSuccess={responseGoogle}
    //     onFailure={responseGoogle}
    //     cookiePolicy={"single_host_origin"}
    //   />
    // </div>
    <div>
      <NavBar />
      <Banner />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
