import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";

import routes from "routes.js";

const Pages = (props) => {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
  });
  const getRoutes = (rts) => {
    return rts.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getActiveRoute = (rts) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < rts.length; i++) {
      if (rts[i].collapse) {
        let collapseActiveRoute = getActiveRoute(rts[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            rts[i].layout + rts[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getFullPageName = (rts) => {
    let pageName = getActiveRoute(rts);
    switch (pageName) {
      case "Pricing":
        return "pricing-page";
      case "Login":
        return "login-page";
      case "Register":
        return "register-page";
      case "Lock Screen":
        return "lock-page";
      default:
        return "Default Brand Text";
    }
  };
  return (
    <>
      <AuthNavbar brandText={getActiveRoute(routes) + " Page"} />
      <div className="wrapper wrapper-full-page">
        <div className={"full-page " + getFullPageName(routes)}>
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/auth/login" />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    </>
  );
};

export default Pages;
