import HeroWrapper from "./Hero.styled";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
  return (
    <HeroWrapper id="home">
      <div className="container">
        <h1>
          Your Dream House is
          <br />
          Already Waiting !
        </h1>
        <p>This is the best time to change your Life</p>
        <br />
        <a href="#about">
          <button className="btn btn-lg btn-primary btn-round">
            Order Your Project
          </button>
        </a>
      </div>
      <a href="#about" className="explore">
        <HiOutlineChevronDoubleDown />
      </a>
    </HeroWrapper>
  );
};

export default Hero;
