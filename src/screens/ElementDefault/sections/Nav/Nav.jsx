import React from "react";
import "./style.css";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="overlay">
        <img className="link" alt="Link" src="/img/link-2.svg" />

        <div className="list">
          <div className="item">
            <div className="div">
              <div className="SVG">
                <div className="github">
                  <img
                    className="vector"
                    alt="Vector"
                    src="/img/vector-100.svg"
                  />
                </div>
              </div>

              <div className="container">
                <div className="text-wrapper">17.9k</div>
              </div>
            </div>
          </div>

          <div className="item-2">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Login</div>
            </div>

            <div className="container-wrapper">
              <div className="container-2">
                <div className="text-wrapper-3">Sign Up</div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-main">
          <div className="list-wrapper">
            <div className="list-2">
              <div className="item">
                <button className="button">
                  <div className="text-wrapper-4">Product</div>

                  <div className="SVG-margin">
                    <div className="frame-wrapper">
                      <div className="frame">
                        <img
                          className="img"
                          alt="Vector"
                          src="/img/vector-102.svg"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="item">
                <button className="button-2">
                  <div className="text-wrapper-4">Resources</div>

                  <div className="SVG-margin">
                    <div className="frame-wrapper">
                      <div className="frame">
                        <img
                          className="img"
                          alt="Vector"
                          src="/img/vector-102.svg"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="item">
                <div className="link-2">
                  <div className="text-wrapper-5">Book</div>
                </div>
              </div>

              <div className="item">
                <div className="link-2">
                  <div className="text-wrapper-5">Blog</div>
                </div>
              </div>

              <div className="item">
                <div className="link-2">
                  <div className="text-wrapper-5">Docs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
