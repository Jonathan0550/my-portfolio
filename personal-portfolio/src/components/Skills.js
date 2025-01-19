import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import java from "../assets/img/java.png";
import sql from "../assets/img/sql.png";
import React from "../assets/img/React.png";
import Angular from "../assets/img/Angular.png";
import Spring from "../assets/img/Spring.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are some of my skills that I have developed over time.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Angular} alt="Angular" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={Spring} alt="SpringBoot" />
                                <h5>SpringBoot</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  )
}
