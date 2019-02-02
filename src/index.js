import React from "react";
import ReactDOM from "react-dom";

import NProgress from "@tanem/react-nprogress";

import "./styles.css";

const links = [
  { name: "Shop", link: "" },
  { name: "Papers", link: "https://hxks.typeform.com/to/IRwbFr" },
  { name: "Work", link: "" },
  { name: "Contact", link: "https://medium.com/hacksnextdoor/" }
];

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
      }}
    >
      <NProgress
        animationDuration={3000}
        incrementDuration={500}
        isAnimating
        minimum={0.1}
      >
        {({ isFinished, progress, animationDuration }) => (
          <div
            style={{
              alignItems: "center",
              width: "100%",
              height: "100%",
              marginTop: 250
            }}
          >
            <img
              width="100s"
              height="100"
              src="https://uploads.codesandbox.io/uploads/user/6de36dfb-5089-4d65-a313-a3622f450b9e/snat-Screen%20Shot%202019-01-09%20at%206.57.54%20PM.png"
            />
            {links.map(d => {
              return (
                <div>
                  {" "}
                  <a
                    className="link"
                    style={{
                      fontSize: 13,
                      padding: 2,
                      textDecorator: 0,
                      color: "black"
                    }}
                    href={d.link}
                  >
                    {d.name}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </NProgress>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
