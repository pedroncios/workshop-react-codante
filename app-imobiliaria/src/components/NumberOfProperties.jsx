import { useProperties } from "../providers/PropertiesProvider";

function NumberOfProperties() {
  const properties = useProperties();

  return <span>({properties.length})</span>;
}

export default NumberOfProperties;
