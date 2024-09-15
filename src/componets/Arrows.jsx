import leftArrow from "../images/icon-angle-left.svg";
import rightArrow from "../images/icon-angle-right.svg";
import "../Styles/Arrows.css";
import { useState } from "react";
import imgDes1 from "../images/desktop-image-hero-1.jpg";
import imgDes2 from "../images/desktop-image-hero-2.jpg";
import imgDes3 from "../images/desktop-image-hero-3.jpg";
import imgMob1 from "../images/mobile-image-hero-1.jpg";
import imgMob2 from "../images/mobile-image-hero-2.jpg";
import imgMob3 from "../images/mobile-image-hero-3.jpg";
import { useEffect } from "react";

export default function Arrows() {
  const [counter, setCounter] = useState(0);

  const DesktopImges = [imgDes1, imgDes2, imgDes3];
  const mobileImges = [imgMob1, imgMob2, imgMob3];

  // define the width of the page
  let width = window.innerWidth;

  //declare the main imges list depends on the width of the page
  let MainImges = width >= 767 ? DesktopImges : mobileImges;

  // function for defalut background
  function defalutBackground() {
    document.querySelector(
      ".NavApics"
    ).style.cssText = `background-image:url("${MainImges[0]}");`;
  }

  //redefine the value of width and change the background imge
  window.onresize = () => {
    width = window.innerWidth;
    MainImges = width >= 767 ? DesktopImges : mobileImges;
    defalutBackground();
  };

  // set the default background imge
  useEffect(() => {
    defalutBackground();
  }, []);

  const Texts = [
    {
      id: 1,
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country.\
  Our experts combine form and function in bringing your vision to life.Create a room in your \
  own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      id: 2,
      title: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. \
  Locally, we’re in most major cities throughout the country.Find the branch nearest you using our \
  store locator.Any questions? Don't hesitate to contact us today.",
    },
    {
      id: 3,
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology \
  to ensure that every product is made as perfect and as consistent as possible.With three decades of \
  experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  // define the Nav for change its background img
  let Nav;

  // define the real value of the nav after all things is ready
  useEffect(() => {
    Nav = document.querySelector(".NavApics");
  });

  // Previos Imge function
  function mainDecrese() {
    Nav.style.cssText = ` background-image: url("${MainImges[counter - 1]}");`;

    setCounter(counter - 1);
  }

  // Next Imge function
  function mainIncrese() {
    Nav.style.cssText = ` background-image: url("${MainImges[counter + 1]}");`;

    setCounter(counter + 1);
  }

  // function for if the imge is the last and the use click on Next
  function IfLast() {
    Nav.style.cssText = ` background-image: url("${MainImges[0]}");`;
    setCounter(0);
  }

  // function for if the imge is the first and the use click on Previos
  function IfFirst() {
    Nav.style.cssText = ` background-image: url("${
      MainImges[MainImges.length - 1]
    }");`;
    setCounter(MainImges.length - 1);
  }

  // declare the Titles
  let Ptitle = document.querySelector("p.title");

  let Pdecs = document.querySelector("p.description");

  //function for the next text
  function ChangeTextNext() {
    let Ptitle = document.querySelector("p.title");

    let Pdecs = document.querySelector("p.description");

    if (Ptitle.textContent === Texts[Texts.length - 1].title) {
      Ptitle.textContent = Texts[0].title;
      Pdecs.textContent = Texts[0].description;
    } else {
      Ptitle.textContent = Texts[counter + 1].title;
      Pdecs.textContent = Texts[counter + 1].description;
    }
  }

  //function for previos text
  function ChangeTextPrevios() {
    if (Ptitle.textContent === Texts[0].title) {
      Ptitle.textContent = Texts[Texts.length - 1].title;

      Pdecs.textContent = Texts[Texts.length - 1].description;
    } else {
      Ptitle.textContent = Texts[counter - 1].title;

      Pdecs.textContent = Texts[counter - 1].description;
    }
  }

  return (
    <div className="Arrows">
      <div className="left">
        <img
          src={leftArrow}
          alt=""
          onClick={() => {
            ChangeTextPrevios();
            if (counter === 0) {
              IfFirst();
            } else {
              mainDecrese();
            }
          }}
        />
      </div>
      <div className="rigth">
        <img
          src={rightArrow}
          alt=""
          onClick={() => {
            ChangeTextNext();
            if (counter === 2) {
              IfLast();
            } else {
              mainIncrese();
            }
          }}
        />
      </div>
    </div>
  );
}
