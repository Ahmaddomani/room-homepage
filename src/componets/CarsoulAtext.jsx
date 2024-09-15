import "../Styles/CarsoulAtext.css";
import arrow from "../images/icon-arrow.svg";

export default function CarsoulAtext() {
  return (
    <div className="CarsoulAtext">
      <p className="title">Discover innovative ways to decorate</p>
      <p className="description">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <p className="show-more">
        SHOP NOW <img className="arrow" src={arrow} alt="" />
      </p>
    </div>
  );
}
