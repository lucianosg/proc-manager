import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// import PerfectScrollbar from "perfect-scrollbar";
import NotificationAlert from "react-notification-alert";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import logo from "assets/img/logo.png";

// var ps;

const Admin = (props) => {
  const [activeColor, setActiveColor] = React.useState("green");
  const [sidebarMini, setSidebarMini] = React.useState(true);
   const [opacity, /*setOpacity*/] = React.useState(0);
  const [sidebarOpened, setSidebarOpened] = React.useState(false);
  const mainPanelRef = React.useRef(null);
  const notificationAlertRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);

  // React.useEffect(() => {
  //   let innerMainPanelRef = mainPanelRef;
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     document.documentElement.classList.add("perfect-scrollbar-on");
  //     document.documentElement.classList.remove("perfect-scrollbar-off");
  //     ps = new PerfectScrollbar(mainPanelRef.current);
  //     mainPanelRef.current &&
  //       mainPanelRef.current.addEventListener("ps-scroll-y", showNavbarButton);
  //     let tables = document.querySelectorAll(".table-responsive");
  //     for (let i = 0; i < tables.length; i++) {
  //       ps = new PerfectScrollbar(tables[i]);
  //     }
  //   }

  //   window.addEventListener("scroll", showNavbarButton);
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //       document.documentElement.classList.add("perfect-scrollbar-off");
  //       document.documentElement.classList.remove("perfect-scrollbar-on");
  //       innerMainPanelRef.current &&
  //         innerMainPanelRef.current.removeEventListener(
  //           "ps-scroll-y",
  //           showNavbarButton
  //         );
  //     }
  //     window.removeEventListener("scroll", showNavbarButton);
  //   };
  // }, []);

  // const showNavbarButton = () => {
  //   if (
  //     document.documentElement.scrollTop > 50 ||
  //     document.scrollingElement.scrollTop > 50 ||
  //     (mainPanelRef.current && mainPanelRef.current.scrollTop > 50)
  //   ) {
  //     setOpacity(1);
  //   } else if (
  //     document.documentElement.scrollTop <= 50 ||
  //     document.scrollingElement.scrollTop <= 50 ||
  //     (mainPanelRef.current && mainPanelRef.current.scrollTop <= 50)
  //   ) {
  //     setOpacity(0);
  //   }
  // };

  const getRoutes = (rout) => {
    return rout.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
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
          return rts[i].name;
        }
      }
    }
    return activeRoute;
  };

  const handleActiveClick = (color) => {
    setActiveColor(color);
  };

  const handleMiniClick = () => {
    let notifyMessage = "Sidebar mini ";
    if (document.body.classList.contains("sidebar-mini")) {
      setSidebarMini(false);
      notifyMessage += "desativada...";
    } else {
      setSidebarMini(true);
      notifyMessage += "ativada...";
    }
    let options = {};
    options = {
      place: "tr",
      message: notifyMessage,
      type: "sidebar",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
    document.body.classList.toggle("sidebar-mini");
  };

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
    document.documentElement.classList.toggle("nav-open");
  };

  const closeSidebar = () => {
    setSidebarOpened(false);
    document.documentElement.classList.remove("nav-open");
  };

  return (
    <div className="wrapper">
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <div className="navbar-minimize-fixed" style={{ opacity: opacity }}>
        <button
          className="minimize-sidebar btn btn-link btn-just-icon"
          onClick={handleMiniClick}>
          <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
          <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
        </button>
      </div>
      <Sidebar
        {...props}
        routes={routes}
        activeColor={activeColor}
        logo={{
          outterLink: "https://www.creative-tim.com/",
          text: "Desburocratiza",
          imgSrc: logo,
        }}
        closeSidebar={closeSidebar}
      />
      <div className="main-panel" ref={mainPanelRef} data={activeColor}>
        <AdminNavbar
          {...props}
          handleMiniClick={handleMiniClick}
          brandText={getActiveRoute(routes)}
          sidebarOpened={sidebarOpened}
          toggleSidebar={toggleSidebar}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/dashboard" />
        </Switch>
        {
          // we don't want the Footer to be rendered on full screen maps page
          props.location.pathname.indexOf("full-screen-map") !== -1 ? null : (
            <Footer fluid />
          )
        }
      </div>
      <FixedPlugin
        activeColor={activeColor}
        sidebarMini={sidebarMini}
        handleActiveClick={handleActiveClick}
        handleMiniClick={handleMiniClick}
      />
    </div>
  );
};

export default Admin;
