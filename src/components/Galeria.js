import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useState } from "react";

export default function Galeria({ images }) {
  const [flag, setFlag] = useState({});

  const handleLike = (imageId) => {
    let list = JSON.parse(localStorage.getItem("heartList"))
    let tempList = [];
    list.map((image) => {
      if (image.id === imageId) {
        image.liked = !image.liked
      }
      tempList.push(image)
    })
    localStorage.setItem("heartList", JSON.stringify(tempList));
    setFlag(new Date());
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        images ?
          images.map((image) => {
            return (
              <div className="galeria foto svg" key={image.id}>
                <div onClick={() => handleLike(image.id)} className="heart">
                  <Heart imageId={image.id} flag={flag} />
                  <p className="text"> {image.alt} </p>
                </div>
                <img src={image.src.tiny} alt={image.alt} />
              </div>
            );
          }) : null
      }
    </div>
  );
}
