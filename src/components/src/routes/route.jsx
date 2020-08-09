import React from "react";
import { Route,BrowserRouter } from "react-router-dom";
import { ManagePrice,SpringPart,PriceList,ListPrice,AccessData } from "../bodies/index";
import {Header} from '../organisms/index';
import App from "../../../App";
import "./route.scss";


function Routes() {
  const routes = [
    {
      path: "/home",
      name: "صفحه اصلی",
      component: App,
      exact: true,
    },
    {
      path: "/spring_part/:id/access/:id",
      name: "دسترسی",
      component: AccessData,
      exact: true,
    },
    {
      path: "/spring_part/:id/manage_product/:id",
      name: "مدیریت محصولات",
      component: ManagePrice,
      exact: true,
    },
    {
      path: "/spring_part",
      name: "قیمت بهاره",
      component: SpringPart,
      exact: true,
    },
    
    {
      path: "/test",
      name: " تست لیست قیمت",
      component: PriceList,
      exact: true,
    },
    {
      path: "/manage_product/:id",
      name: "لیست قیمت",
      component: ListPrice,
      exact: true,
    },
  ];

  return (
    <BrowserRouter>
      <div className="route">
        {routes.map((route, key) => (
          <Route
            exact={route.exact}
            path={route.path}
            key={key}
            render={(props) => {
              const crumb = routes

                .filter(({ path }) => props.match.path.includes(path))

                .map(({ path, ...rest }) => ({
                  path: Object.keys(props.match.params).length
                    ? Object.keys(props.match.params).reduce(
                        (path, param) =>
                          path.replace(`:${param}`, props.match.params[param]),
                        path
                      )
                    : path,
                  ...rest,
                }));


              return (
                <>
                  <Header crumbs={crumb} />
                  <div className="content_site">
                    <route.component {...props} />
                  </div>
                </>
              );
            }}
           
          />
        ))}
      </div>
    </BrowserRouter>
  );
}

export default Routes;
