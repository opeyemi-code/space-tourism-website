import "../componenets/Home.css";
import Header from "../componenets/Header";

function Home() {
  return (
    <div className="home-body-container custom-body">
      <Header />
      <main id="home">
        <div className="container">
          <div className="row">
            <section className="title-description-section col-lg d-lg-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-normal title">
                SO, YOU WANT TO TRAVEL TO{" "}
                <span className="span-text d-block my-3 text-light">SPACE</span>
              </h1>
              <p className="description mx-auto">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </section>
            <section className="explore-section col-lg d-flex flex-column justify-content-center align-items-center">
              <h2 className="explore-text bg-light fw-normal border">
                EXPLORE
              </h2>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
