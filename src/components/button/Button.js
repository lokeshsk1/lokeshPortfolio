import React from "react";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a
        class="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: "#EDF9FE",
          backgroundColor: "#001C55",
          border: `solid 1px ${"#001C55"}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, "#001C55", "#EDF9FE")}
        onMouseOut={(event) => onMouseOut(event, "#EDF9FE", "#001C55")}
      >
        {text}
      </a>
    </div>
  );
}
