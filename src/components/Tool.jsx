import React, { useState } from "react";

// asset
const data = [
  {
    name: "HTML",
    href: "https://www.w3schools.com/html",
    src: require("../asset/tool/html.png"),
  },
  {
    name: "CSS",
    href: "https://www.w3schools.com/css",
    src: require("../asset/tool/css.png"),
  },
  {
    name: "JS",
    href: "https://www.w3schools.com/js",
    src: require("../asset/tool/js.png"),
  },
  {
    name: "NODE",
    href: "https://nodejs.org/",
    src: require("../asset/tool/node.png"),
  },
  {
    name: "PHP",
    href: "https://www.php.net/",
    src: require("../asset/tool/php.png"),
  },
];

function Tool() {
  const [hover, setHover] = useState(null);

  return (
    <div className="columns is-mobile is-tablet is-desktop is-multiline is-centered">
      {data.map((item, index) => (
        <div
          key={index}
          className="column is-4-mobile is-3-tablet is-2-desktop"
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(item.name)}
            onMouseLeave={() => setHover(null)}
          >
            <img
              className={hover === item.name ? "animated pulse infinite" : ""}
              src={item.src}
              alt="img"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Tool;
