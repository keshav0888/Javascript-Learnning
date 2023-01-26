//console.log("keshav shinde");
import React from "react";
import ReactDOM from "react-dom/client";
//const heading2 = (
//<h1 id="title" key="h2">
//Namaste React
//</h1>
//);

const HeaderComponent = () => {
  return (
    <div>
      <h1>keshav Shinde</h1>
      <h1>Namaste React Functional component</h1>
    </div>
  );
};

const HeaderComponent1 = () => (
  <div>
    <h1>keshav Shinde</h1>
    <h1>Namaste React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent></HeaderComponent>);
