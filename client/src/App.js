import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css'
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";

function App() {
    const {token, login, logout, userId, ready} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    if(!ready){
        return <loader />
    }

      return(
          <AuthContext.Provider value={{
              token, login, logout, userId, isAuthenticated
          }}>
              <Router>
                  {isAuthenticated && <Navbar />}
                      <div className="container">
                          {routes}
                      </div>
            </Router>
          </AuthContext.Provider>

      )
}

export default App;
