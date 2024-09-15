import "../Styles/Footer.css";
import Image from "./Image";
import Img1 from "../images/image-about-dark.jpg";
import Img2 from "../images/image-about-light.jpg";

import About from "./About";

export default function Footer() {
  return (
    <div className="footer">
      <Image url={Img1} />
      <About />
      <Image url={Img2} />
    </div>
  );
}
