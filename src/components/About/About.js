import "./About.css";

function About() {
  return (
    <section className="about" id="About">
      <div className="about__info">
        <h2 className="about__title">About me</h2>
        <div className="about__text">
          <p>
          I am taking a bootcamp for full stack developer.
          </p>
          <p>
          This is the final project for the bootcamp.
          </p>
          <p>
          This is an improvement upon Project 10.
          </p>
        </div>
      </div>
      <img
        className="about__img"
        alt="MERN Stack ==> Save File locally?"
        src="https://miro.medium.com/v2/resize:fit:960/1*ytTJyQrR9ZCNW-HeNOIokQ.png"
      />
    </section>
  );
}

export default About;
