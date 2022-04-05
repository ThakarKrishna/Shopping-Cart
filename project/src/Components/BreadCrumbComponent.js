

import React from "react";
import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname)
  const path = pathname.split("/").filter((item) => item);
  console.log(path)
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <>
      <div className="Bread_crumb">
        <div
          className="ui breadcrumb"
          style={{
            display: "flex",
            // marginLeft: "1rem",
            marginTop: "5rem",
            fontSize: "1.1rem",
          }}
        >
           {path.map((route, index) => {
            const routeTo = `/${path.slice(0, index + 1).join("/")}`;
            const isLast = index === path.length - 1;

            return isLast ? (
              <a className="section" style={{ color: "black" }}>
                {capitalize(route)}
              </a>
            ) : (
              <a className="section">
                <Link to={`${routeTo}`}>{capitalize(route)}</Link>
                <i
                  aria-hidden="true"
                  className="angle right icon"
                  style={{ color: "black" }}
                ></i>/
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BreadCrumb;

