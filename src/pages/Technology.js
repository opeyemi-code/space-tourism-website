import { useState, useEffect } from "react";
import Header from "../componenets/Header";
import data from "../assets/data.json";
import "../componenets/Technology.css";
import launchVehicleImage from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortImage from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleImage from "../assets/technology/image-space-capsule-portrait.jpg";
import launchVehicleLandScapeImage from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spacePortLandscapeImage from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscapeImage from "../assets/technology/image-space-capsule-landscape.jpg";

function Technology() {
  const [selectedTechnology, setSelectedTechnology] =
    useState("Launch vehicle");

  const [selectedTechnologyImage, setSelectedTechnologyImage] =
    useState(launchVehicleImage);

  useEffect(() => {
    const bodyWidth = document.querySelector("body").offsetWidth;
    const foundPost = data.technology.find(
      (post) => post.name === selectedTechnology
    );
    if (foundPost) {
      if (foundPost.name === "Launch vehicle") {
        if (bodyWidth <= 768) {
          setSelectedTechnologyImage(launchVehicleLandScapeImage);
        } else {
          setSelectedTechnologyImage(launchVehicleImage);
        }
      } else if (foundPost.name === "Space capsule") {
        if (bodyWidth <= 768) {
          setSelectedTechnologyImage(spaceCapsuleLandscapeImage);
        } else {
          setSelectedTechnologyImage(spaceCapsuleImage);
        }
      } else {
        if (bodyWidth <= 768) {
          setSelectedTechnologyImage(spacePortLandscapeImage);
        } else {
          setSelectedTechnologyImage(spacePortImage);
        }
      }
    }
  }, [selectedTechnology]); // Add selectedTechnology as a dependency to useEffect

  useEffect(() => {
    const technologyBtns = document.querySelectorAll(".technology-btns");
    const technologyTitle =
      document.querySelector(".technology-title").innerText;

    technologyBtns.forEach((btn) => {
      btn.id.toUpperCase() === technologyTitle
        ? btn.setAttribute("style", "background-color: white; color: black")
        : btn.removeAttribute("style");
    });
  });

  const technologyPost = data.technology.find(
    (post) => post.name === selectedTechnology
  );

  function handleClickForTechnology(e) {
    setSelectedTechnology(e.currentTarget.id);

    if (e.currentTarget.id === "Space capsule") {
      setSelectedTechnologyImage(spaceCapsuleImage);
    } else if (e.currentTarget.id === "Spaceport") {
      setSelectedTechnologyImage(spacePortImage);
    } else {
      setSelectedTechnologyImage(launchVehicleImage);
    }
  }

  return (
    <div className="technology-body-container custom-body">
      <Header></Header>
      <main className="container" id="technology">
        <h1 className="technology-heading fw-normal heading-1">
          <span className="">03</span>{" "}
          <span className="text-light">SPACE LAUNCH 101</span>
        </h1>
        <div className="row flex-column-reverse flex-lg-row mt-5">
          <section className="col-lg d-flex flex-lg-row flex-column align-items-center mt-5 mt-lg-0">
            <div className="technology-btns-container flex-lg-column mx-auto me-lg-5 my-4 mt-md-0">
              {data.technology.map((tech, index) => {
                return (
                  <button
                    className="technology-btns rounded-circle py-3 px-4 fs-3 mb-3 me-3 me-lg-0"
                    id={tech.name}
                    type="button"
                    onClick={handleClickForTechnology}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="">
              <h2 className="fs-6 fw-normal heading-2">THE TERMINOLOGY...</h2>
              <h3 className="heading-3 text-light technology-title">
                {technologyPost.name.toUpperCase()}
              </h3>
              <p className="technology-description mx-auto mx-lg-0">
                {technologyPost.description}
              </p>
            </div>
          </section>
          <section className="col-lg d-flex justify-content-center">
            <picture className="d-inline float-lg-end">
              <source
                media="(max-width: 768px)"
                srcset={selectedTechnologyImage}
              />
              <source
                media="(min-width: 768px)"
                srcset={selectedTechnologyImage}
              />
              <img
                className="object-fit-cover"
                style={{ width: "100%", height: "auto" }}
                src={selectedTechnologyImage}
                alt={selectedTechnology}
              />
            </picture>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Technology;
