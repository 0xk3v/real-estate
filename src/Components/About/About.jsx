import AboutWrapper from "./About.styled";

const About = () => {
  return (
    <AboutWrapper id="about">
      <div className="container">
        <div className="side-bar">
          <i>Real Estates</i>
        </div>
        <div className="about-img">
          <img src="/img/img-4.jpg" alt="About Us" />
        </div>
        <div className="desc">
          <header>
            <h1>About us</h1>
            <span></span>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            maiores, optio porro, odio nobis eligendi ad vel, quae provident
            veritatis consequuntur quas laudantium rerum? Obcaecati rerum qui
            voluptate eum doloremque?
          </p>
          <div className="card-container">
            <div className="card-item">
              <h1>103</h1>
              <strong>Estates</strong>
            </div>
            <div className="card-item">
              <h1>1K+</h1>
              <strong>Clients</strong>
            </div>
            <div className="card-item">
              <h1>50K</h1>
              <strong>Areas</strong>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
