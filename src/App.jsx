import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import apiFetch from "./services/apiFetch";
import { useState } from "react";
import * as UserService from "services/user";
import SessionContext from "contexts/sessionContext";
import { jwtDecode } from "jwt-decode";
import PlantListPage from "pages/PlantListPage.js";
import PlantsShowPage from "pages/PlantsShowPage";

const response = await apiFetch("GET", "/api-key/info");
console.log(response.status);

const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    UserService.getSessionTokenStorage()
  );

  return (
    <SessionContext.Provider
      value={{
        username: sessionToken ? jwtDecode(sessionToken).username : null,
        signIn: capstoneSessionToken => {
          setSessionToken(capstoneSessionToken);
          UserService.setSessionTokenStorage(capstoneSessionToken);
        },
        signOut: () => {
          setSessionToken(null);
          UserService.removeSessionTokenStorage();
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/plants" element={<PlantListPage />} />
          <Route path="/plants/:plantId" element={<PlantsShowPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
