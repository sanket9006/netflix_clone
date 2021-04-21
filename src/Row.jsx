import React, { useEffect } from "react";

function Row({ title }) {
  useEffect(() => {
    {
      fetch("https://api.github.com/users/sanket9006/repos")
        .then((response) => response.json())
        .then((data) => console.log(data));
      {
        <h1>Hwllo</h1>;
      }
    }
  }, []);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
