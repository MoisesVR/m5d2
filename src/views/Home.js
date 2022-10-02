import Galeria from "../components/Galeria";
import { useContext } from "react";
import ContextApiProvider from "../context/ContextApiProvider";

export default function Home() {

  const {data} = useContext(ContextApiProvider);

  return (
    <div id="Home">
      <h1>Natural Pic</h1>
      <Galeria images={data} />
    </div>
  );
}
