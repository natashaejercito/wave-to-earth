import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const waveToEarthData = [
  {
    numAlbum: "wave 0.01",
    titleUrl:
      "https://open.spotify.com/album/5KcbhgDwjakD3bKt4wYuee?si=maz0_1-hR5OpkmhFJ1iFhQ",
    coverImage: "img/wave0.01.jpg",
  },
  {
    numAlbum: "summer flows 0.02",
    titleUrl:
      "https://open.spotify.com/album/3NRNR4txhuRLhnQUUlqWXH?si=EzGxuNPmSvG4ofH1RtWN4g",
    coverImage: "img/summer-flows0.02.jpg",
  },
  {
    numAlbum: "daisy",
    titleUrl:
      "https://open.spotify.com/album/06LUoqFf4VRz193j5GBToN?si=l5aPtBZuREiZFGNV0FwB9A",
    coverImage: "img/daisy.jpg",
  },
  {
    numAlbum: "nouvelle vague",
    titleUrl:
      "https://open.spotify.com/album/2TMszv4CoiRFCEmmvH2k5e?si=CAD5IYIAShGU5hprdDe9uQ",
    coverImage: "img/nouvelle-vague.jpg",
  },
  {
    numAlbum: "calla",
    titleUrl:
      "https://open.spotify.com/album/4BUAIkZliZPIjt4ilfm0nx?si=t_goR5a2Qd6E57H2S2xrVA",
    coverImage: "img/calla.jpg",
  },
  {
    numAlbum: "dried flower",
    titleUrl:
      "https://open.spotify.com/album/7uGypjatRUHbWUxUwynTTn?si=lelJB5qrR7SduqY-VOIHrw",
    coverImage: "img/dried flower.jpg",
  },
  {
    numAlbum: "0.1 flaws and all",
    titleUrl:
      "https://open.spotify.com/album/5T0Gt5JYXh6gEttuB8ujML?si=SrVJ5YTTRGODWIvIUv5oHw",
    coverImage: "img/0.1flaws-and-all.jpg",
  },
  {
    numAlbum: "play with earth! 0.03",
    titleUrl:
      "https://open.spotify.com/album/527e8WrlMvJBEmlmt7kJCj?si=1o0NlSvuQ3e7eNw6uj2PXw",
    coverImage: "img/play-with-earth0.03.jpg",
  },
];

function App() {
  return (
    <div className="app-container">
      <Welcome />
      <Albums />
      <Credits />
    </div>
  );
}

function Welcome() {
  return (
    <div className="welcome-container">
      <h1 className="wave">DISCOGRAPHY💫</h1>
      <ul className="navbar">
        <li>
          <a href="https://wave-to-earth.com/34">Tours</a>
        </li>

        <li>
          <a href="https://wavetoearth.indiemerch.com/">Shops</a>
        </li>

        <li>
          <a href="https://dtc-wsuv.org/lgalvan23/info-card/">About</a>
        </li>
      </ul>
      <img
        src="img\welcome-wave-to-earth.png"
        alt="Wave to Earth Logo"
        className="welcome-logo"
      />
    </div>
  );
}

function Albums() {
  const [index, setIndex] = useState(0);
  const album = waveToEarthData[index];

  const prevAlbum = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? waveToEarthData.length - 1 : prevIndex - 1
    );
  };

  const nextAlbum = () => {
    setIndex((prevIndex) =>
      prevIndex === waveToEarthData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="albums-container-single-view">
      <button className="arrow-button" onClick={prevAlbum}>
        ◀
      </button>

      <div className="album-info">
        <img
          src={album.coverImage}
          alt={`${album.numAlbum} cover`}
          className="album-cover"
        />
        <h3>
          <a
            href={album.titleUrl}
            className="title-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {album.numAlbum}
          </a>
        </h3>
      </div>

      <button className="arrow-button" onClick={nextAlbum}>
        ▶
      </button>
    </div>
  );
}

function Credits() {
  return (
    <div className="footer-container">
      <footer>
        <p>© Copyright Wave to Earth | Made by Nat ♡</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
