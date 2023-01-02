import 'react-multi-carousel/lib/styles.css';
import aws from "../assets/img/skills/aws.svg"
import terraform from "../assets/img/skills/terraform.svg"
import docker from "../assets/img/skills/docker.svg"
import nginx from "../assets/img/skills/nginx-logo.svg"
import mongo from "../assets/img/skills/mongo.svg"
import python from "../assets/img/skills/python.svg"
import c from "../assets/img/skills/c.svg"
import cpp from "../assets/img/skills/c-plusplus.svg"
import java from "../assets/img/skills/java.svg"
import js from "../assets/img/skills/js.svg"
import figma from "../assets/img/skills/figma.svg"
import sketch from "../assets/img/skills/sketch.svg"
import blender from "../assets/img/skills/blender.svg"
import flutter from "../assets/img/skills/flutter.svg"
import selenium from "../assets/img/skills/selenium.svg"
import sql  from "../assets/img/skills/sql.svg"
import spring from "../assets/img/skills/spring.svg"
import react from "../assets/img/skills/react.svg"
import html  from "../assets/img/skills/html.svg"
import css from "../assets/img/skills/css.svg"
import django from "../assets/img/skills/django.svg"
import flask  from "../assets/img/skills/flask.svg"
import opencv from "../assets/img/skills/opencv.svg"
import tailwind from "../assets/img/skills/tailwindcss-icon.svg"



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
              <p className='skills-title'>What can I do?</p>
              <p className='skills-sub'>I've worked with multiple modern & powerful technologies to make quality products.<br></br></p>

              <div class="grid">
                <img src={aws} />
                <img src={terraform} />
                <img src={docker} />
                <img src={nginx} />
                <img src={mongo} />
                <img src={python} />
                <img src={c} />
                <img src={cpp} />
                <img src={java} />
                <img src={js} />
                <img src={figma} />
                <img src={sketch} />
                <img src={blender} />
                <img src={flutter} />
                <img src={selenium} />
                <img src={sql} />
                <img src={spring} />
                <img src={react} />
                <img src={html} />
                <img src={css} />
                <img src={django} />
                <img src={flask} />
                <img src={tailwind} />
                <img src={opencv} />
              </div>


            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
