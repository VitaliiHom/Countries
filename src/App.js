import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import styled from "styled-components";

import Main from "./components/Main";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";



function App() {

    const [countries, setCountries] = useState([])

  return (
    < >
      <Header />
        <Main>
            <Switch>
                <Route exact path='/'>
                    <HomePage countries={countries} setCountries={setCountries}/>
                </Route>

                <Route path='/country/:name' component={Details} />
                <Route component={NotFound} />

            </Switch>
        </Main>
    </>
  );
}

export default App;
