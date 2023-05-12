import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import oceans from "../../data/oceans.json";

function Informations() {
  const { id } = useParams();
  const oceanData = oceans.filter(
    (ocean) => ocean.id === Number.parseInt(id, 10)
  )[0];
  const [photos, setPhotos] = useState([]);
  const [author1, setAuthor1] = useState("");
  const [author2, setAuthor2] = useState("");
  const [author3, setAuthor3] = useState("");
  useEffect(() => {
    fetch(oceanData.entryPoint)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos.photo.slice(0, 3));
      })
      .catch((err) => console.error(err));
  }, []);

  // Since the first fetch does not allow to fetch the username directly (Flickr APIs seem to be constructed like a RDBSM without the SQL abilities :-/ ), we have to loop on each photo to fetch it
  useEffect(() => {
    if (photos.length) {
      photos.forEach((photo, index) => {
        const entryPoint = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=5092befa51e134a7285b2c781e45a2af&photo_id=${photo.id}&format=json&nojsoncallback=1`;
        fetch(entryPoint)
          .then((res) => res.json())
          .then((userData) => {
            const {
              photo: {
                owner: { username },
              },
            } = userData;
            switch (index) {
              case 2:
                setAuthor3(username);
                break;
              case 1:
                setAuthor2(username);
                break;
              default:
                setAuthor1(username);
                break;
            }
          })
          .catch((err) => console.error(err));
      });
    }
  }, [photos]);
  const authors = [author1, author2, author3];

  return (
    <>
      <h2>Informations</h2>
      <div className="information_container">
        <div className="information">
          <p>{oceanData.content}</p>
        </div>
        <div className="pictures_info_container">
          {photos.length &&
            photos.map((photo, index) => {
              return (
                <figure key={photo.id}>
                  <img
                    src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                    srcSet={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_k.jpg 4x,
                      https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg 3x,
                      https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg 2x,
                      `}
                    alt={photo.title}
                    width="512"
                    height="512"
                  />
                  <figcaption>
                    {photo.title} (photo&nbsp;: {authors[index]}, CC BY)
                  </figcaption>
                </figure>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Informations;
