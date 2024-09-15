import "../Styles/Nav.css";
import Humburgar from "../images/icon-hamburger.svg";
import closeimg from "../images/icon-close.svg";

export default function Nav() {
  return (
    <nav>
      <div className="Hamburger">
        <img
          src={Humburgar}
          className="humburgar"
          alt=""
          onClick={() => {
            let dropMenu = document.querySelector(".drop-menu");
            dropMenu.classList.add("show");
          }}
        />
      </div>
      <h2 className="logo">room</h2>
      <ul className="links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="drop-menu">
        <img
          src={closeimg}
          alt=""
          onClick={() => {
            let dropMenu = document.querySelector(".drop-menu");
            dropMenu.classList.remove("show");
          }}
        />
        <ul className="drop-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
