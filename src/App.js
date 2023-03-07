import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Sum valueA={23} valueB={12} />
      <Sum valueA={23} valueB={33} />
      <Sum valueA={-13} valueB={4} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  let sum = valueA + valueB;
  return (
    <p>
      {valueA} + {valueB} = {sum}
    </p>
  );
}
