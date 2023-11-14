import { Link } from "react-scroll";
import "./navbarItems.css";
export default function NavbarItems({ title, classProps }) {
  return (
    <li className={`listItem mx-4 cursor-pointer ${classProps}`}>
      <Link spy={true} smooth={true} offset={-70} duration={500} to={title}>
        {title}
      </Link>
    </li>
  );
}
