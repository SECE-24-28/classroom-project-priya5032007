import React from "react";
import { OurPromisesStyle } from "./our-promises-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faMobile,
  faNetworkWired,
  faPeopleGroup,
  faRightFromBracket,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
const OurPromisesComponent = () => {
  return (
    <OurPromisesStyle>
      <div className="paras">
        <h1>Our Promise</h1>
        <p>
          As part of our high quality service, we'd like to offer something
          extra too.
        </p>
      </div>
      <div className="parent">
        <div className="child">
          <div className="title__parent">
            <FontAwesomeIcon icon={faLaptopCode} />
            <h1 className="title">Top Code Quality</h1>
          </div>
          <div className="para">
            Our commitment goes beyond mere code - it encompasses providing
            solutions. You receive W3C fully compliant markup, without any
            compromise on quality.
          </div>
        </div>
        <div className="child">
          <div className="title__parent">
            <FontAwesomeIcon icon={faMobile} />
            <h1 className="title">Responsive</h1>
          </div>
          <div className="para">
            We understand the value of a positive attitude, timely
            responsiveness, and adaptability. We're dedicated to attentively
            listening and leveraging our utmost capabilities to serve you.
          </div>
        </div>
        <div className="child">
          <div className="title__parent">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <h1 className="title">Rockstar Team</h1>
          </div>
          <div className="para">
            Our expertise is our unique selling proposition. You'll have access
            to an all-star team of experienced professionals fully dedicated to
            serving you, armed with coding skills that are truly exceptional.
          </div>
        </div>
        <div className="child">
          <div className="title__parent">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <h1 className="title">Fast Turn-arounds</h1>
          </div>
          <div className="para">
            The importance of speed is on par with quality for us. We are swift,
            nimble, and capable of providing high-quality code within a
            timeframe that suits your preferences.
          </div>
        </div>
        <div className="child">
          <div className="title__parent">
            <FontAwesomeIcon icon={faNetworkWired} />
            <h1 className="title">Life-time support</h1>
          </div>
          <div className="para">
            Our commitment to code quality is exemplified by our enduring
            support. If any bugs happen to emerge in the future, feel free to
            reach out to us for assistance.
          </div>
        </div>
        <div className="child">
          <div className="title__parent">
            <FontAwesomeIcon icon={faShieldHalved} />
            <h1 className="title">Secured Agreement</h1>
          </div>
          <div className="para">
            The creative work you receive is entirely your own, and we
            unequivocally respect that. We assure you of our commitment and
            readiness to formalize this with a Non-Disclosure Agreement (NDA).
          </div>
        </div>
      </div>
    </OurPromisesStyle>
  );
};
export default OurPromisesComponent;