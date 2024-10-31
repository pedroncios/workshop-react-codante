import { useContext } from "react";
import { PropertiesContext } from "../App";

function NumberOfProperties() {
  const { properties } = useContext(PropertiesContext);

  return <span>({properties.length})</span>;
}

export default NumberOfProperties;
