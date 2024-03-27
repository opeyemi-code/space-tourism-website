import React, { useState, useEffect } from "react";
import Header from "../componenets/Header";
import "../componenets/Destination.css";
import data from "../assets/data.json";
import "../index.css";
import marsImage from "../assets/destination/image-mars.png";
import moonImage from "../assets/destination/image-moon.png";
import europaImage from "../assets/destination/image-europa.png";
import titanImage from "../assets/destination/image-titan.png";

function Destination() {
  const [selectedDestination, setSelectedDestination] = useState("MARS");
  const [destinationImage, setDestinationImage] = useState(marsImage);

  useEffect(() => {
    const destinationListItem = document.querySelectorAll(
      ".destination-list-item"
    );
    const destinationTitle =
      document.querySelector(".destination-title").innerText;

    destinationListItem.forEach((listItem) => {
      listItem.innerText === destinationTitle
        ? listItem.classList.add("tab")
        : listItem.classList.remove("tab");
    });
  });

  function handleDestinationClick(destinationName, e) {
    setSelectedDestination(destinationName);

    if (e.currentTarget.id === "Moon") {
      setDestinationImage(moonImage);
    } else if (e.currentTarget.id === "Europa") {
      setDestinationImage(europaImage);
    } else if (e.currentTarget.id === "Titan") {
      setDestinationImage(titanImage);
    } else {
      setDestinationImage(marsImage);
    }
  }

  const destinationPost = data.destinations.find(
    (post) => post.name.toUpperCase() === selectedDestination.toUpperCase()
  );

  return (
    <div className="destination-body-container custom-body">
      <Header />
      <main id="destination">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <section className="col-lg-5 pt-md-5">
              <h1 className="heading-1 fw-normal destination-heading text-center text-md-start">
                <span className="pre-text heading-span me-3">01</span>
                <span className="text-light">PICK YOUR DESTINATION</span>
              </h1>
              <div className="destination-img-container d-flex justify-content-center py-5">
                <img
                  className="destination-img"
                  src={destinationImage}
                  alt={selectedDestination}
                />
              </div>
            </section>
            <section className="col-lg-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center pt-lg-5">
              <ul className="nav text-light destination-nav mt-5">
                {data.destinations.map((destination, index) => (
                  <li
                    key={index}
                    id={destination.name}
                    className={`destination-list-item list-item me-4 ${
                      selectedDestination === destination.name ? "active" : ""
                    }`}
                    onClick={(e) => handleDestinationClick(destination.name, e)}
                  >
                    {destination.name.toUpperCase()}
                  </li>
                ))}
              </ul>
              <section className="destinations-section d-flex flex-column justify-content-center align-items-center d-lg-block">
                <h2 className="text-light py-4 destination-title heading-2">
                  {destinationPost.name.toUpperCase()}
                </h2>
                <p className="pb-4 destination-description">
                  {destinationPost.description}
                </p>
                <div className="line my-4"></div>
                <div className="destination-footer d-flex justify-content-between">
                  <div className="me-5">
                    <h3 className="fs-6 destination-distance-heading">
                      AVG. DISTANCE
                    </h3>
                    <p className="destination-distance text-light fs-3">
                      {destinationPost.distance}
                    </p>
                  </div>
                  <div className="ms-5">
                    <h3 className="fs-6 destination-travel-heading">
                      EST. TRAVEL TIME
                    </h3>
                    <p className="destination-travel text-light fs-3">
                      {destinationPost.travel}
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;
