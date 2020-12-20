import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter, Route,
  Switch, Redirect
} from "react-router-dom";

import AuthLayout from "layout/Auth/Auth";
import AdminLayout from "layout/Admin/Admin";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.2.0";
import "assets/demo/demo.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
