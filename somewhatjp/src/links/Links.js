import React from "react";

import { data } from "./data";

const Links = () => {
  return (
    <div>
      <p>Links</p>
      {data.map(d => (
        <a
          key={d.url}
          href={d.url}
          target="_blank" // Open in new tab
          rel="noopener"
        >
          {d.title}
        </a>
      ))}
    </div>
  );
};

export default Links;
