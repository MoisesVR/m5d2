import Heart from "../components/Heart";
import "../assets/css/galeria.css"
import { useEffect, useState } from "react";

export default function Favoritos() {

  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("heartList")))

  useEffect(() => {
    const filterFav = fav.filter((image)=> image.liked)
    setFav(filterFav);
  },[])

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-5">
        {
          fav.map((image) => {
            return (
              <div className="galeria foto svg" key={image.id}>
                <img src={image.src.tiny} alt={image.alt} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
