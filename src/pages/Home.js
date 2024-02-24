import "../componenets/Home.css";

function Home() {
  return (
    <main>
      <div className="contaner">
        <div className="row">
          <section className="title-description-section col-md d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-ligh fs-4 fw-normal text-center title">
              SO, YOU WANT TO TRAVEL TO{" "}
              <span className="span-text d-block my-3 text-light">SPACE</span>
            </h1>
            <p className="description w-50">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <section className="explore-section col-md d-flex flex-column justify-content-center align-items-center">
            <h2 className="explore-text bg-light fs-3 fw-normal">EXPLORE</h2>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
