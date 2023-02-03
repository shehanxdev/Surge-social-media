//IMPORTING MODULES
import { BrowserRouter } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
//STYLESHEETS
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import ListingPage from "./pages/ListingPage";
import { AppBar } from "@mui/material";
import TopNav from "./componenets/TopNav";

function App() {
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedOut>
        <div className=" h-100">
          <AuthenticationPage />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-100">
          <TopNav />
          <ListingPage />
        </div>
      </SignedIn>
    </ClerkProvider>
  );
}

export default App;
