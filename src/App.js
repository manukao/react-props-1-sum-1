import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={23} valueB={12} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}
