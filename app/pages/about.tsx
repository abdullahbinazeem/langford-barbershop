import Image from "next/image";
import React from "react";
import Container from "../components/container";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-neutral-900">
      <Container>
        <div>
          <h1>Why Choose Us?</h1>
          <p>
            With over 10 years of combined experience, our team is passionate
            about quality grooming and building a space where everyone feels
            welcome.
          </p>
          <div>
            <div />
            <div>
              <h2>Professional Barbers</h2>
              <p>
                All of our hairdressers are incredibly experienced and qualified
                in hair styling services. They are employed after thorough
                inspection and training measures
              </p>
            </div>
          </div>
          <div>
            <div />
            <div>
              <h2>Professional Barbers</h2>
              <p>
                All of our hairdressers are incredibly experienced and qualified
                in hair styling services. They are employed after thorough
                inspection and training measures
              </p>
            </div>
          </div>
        </div>
        <div>Images</div>
      </Container>
    </div>
  );
};

export default About;
