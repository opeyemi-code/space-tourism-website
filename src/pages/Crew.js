import { useState, useEffect } from "react";
import Header from "../componenets/Header";
import data from "../assets/data.json";
import anoushehAnasari from "../assets/crew/image-anousheh-ansari.png";
import douglasHurleyImage from "../assets/crew/image-douglas-hurley.png";
import markShuttleworthImage from "../assets/crew/image-mark-shuttleworth.png";
import victorGloverImage from "../assets/crew/image-victor-glover.png";
import "../componenets/Crew.css";

function Crew() {
  const [selectedCrew, setSelectedCrew] = useState("Anousheh Ansari");
  const [selectedCrewImage, setSelectedCrewImage] = useState(anoushehAnasari);

  useEffect(() => {
    const crewBtns = document.querySelectorAll(".crew-btn");
    const crewTitle = document.querySelector(".crew-title").innerText;

    crewBtns.forEach((btn) => {
      btn.id.toUpperCase() === crewTitle
        ? btn.setAttribute("style", "background-color: white")
        : btn.removeAttribute("style", "background-color: #8286a0");
    });
  });

  const crewPost = data.crew.find((post) => post.name === selectedCrew);

  function handleClickForCrewPost(e) {
    setSelectedCrew(e.currentTarget.id);

    if (e.currentTarget.id === "Douglas Hurley") {
      setSelectedCrewImage(douglasHurleyImage);
    } else if (e.currentTarget.id === "Victor Glover") {
      setSelectedCrewImage(victorGloverImage);
    } else if (e.currentTarget.id === "Mark Shuttleworth") {
      setSelectedCrewImage(markShuttleworthImage);
    } else {
      setSelectedCrewImage(anoushehAnasari);
    }
  }

  return (
    <div className="crew-body-container custom-body">
      <Header />
      <main id="crew">
        <div className="container pt-sm-5">
          <h1 className="heading-1 crew-heading fw-normal mb-5 mb-lg-0">
            <span className="me-3">02</span>{" "}
            <span className="text-light">MEET YOUR CREW</span>
          </h1>
          <div className="row">
            <section className="col-lg d-flex flex-column justify-content-center order-1 order-md-0">
              <h2 className="mb-3 crew-role heading-2 mt-5 mt-lg-0">
                {crewPost.role.toUpperCase()}
              </h2>
              <h3 className="mb-3 crew-title text-light heading-3">
                {crewPost.name.toUpperCase()}
              </h3>
              <p className="mb-5 crew-bio bio">{crewPost.bio}</p>
              <div className="d-flex justify-content-center justify-content-lg-start mb-5">
                {data.crew.map((post) => {
                  return (
                    <button
                      type="button"
                      className="me-3 crew-btn"
                      id={post.name}
                      onClick={handleClickForCrewPost}
                    ></button>
                  );
                })}
              </div>
            </section>
            <section className="col-lg d-flex justify-content-center justify-content-lg-end">
              <img
                className="object-fit-cover crew-img d-inline"
                src={selectedCrewImage}
                alt={selectedCrew}
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Crew;
