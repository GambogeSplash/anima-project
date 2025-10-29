import React from "react";
import { FooterMargin } from "./sections/FooterMargin";
import { Header } from "./sections/Header";
import { Main } from "./sections/Main";
import { Nav } from "./sections/Nav";
import "./style.css";

export const ElementDefault = () => {
  return (
    <div className="element-default" data-model-id="12215:7744">
      <div className="container-131">
        <Nav />
        <div className="main-2">
          <Header />
          <Main />
        </div>

        <FooterMargin />
      </div>
    </div>
  );
};
