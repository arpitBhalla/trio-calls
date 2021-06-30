import React from "react";
import { AppBar } from "components";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import { DefaultVideoGalleryExample } from "./Meet/index";

function Topic() {
  const { meetLink } = useParams<{ meetLink: string }>();
  return <h3>Requested topic ID: {meetLink}</h3>;
}

const RouteApp: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/join/:meetLink">
          <Topic />
          <DefaultVideoGalleryExample />
        </Route>
        <Route path="/">HOME</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RouteApp;
