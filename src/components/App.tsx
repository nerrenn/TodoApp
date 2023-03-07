import { StrictMode } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AppGlobalStyle } from "../styles/App.style";
import Subscription from "./Subscription";
import Connexion from "./Connexion";

/**
 * Composants principale de l'application
 */
export default function App() {
  return(
    <StrictMode>
      <AppGlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/Subscription' element={<Subscription/>}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}