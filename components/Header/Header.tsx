import Image from "next/image";
import classes from "./Header.module.scss";
import { BsPencilSquare } from "react-icons/bs";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <p>Zokirdev's Blog</p>
        </div>
        <div className={classes.account}>
          <div className={classes.write}><BsPencilSquare /> Write</div>
          <p>account</p>
        </div>
      </header>
    </>
  );
}

export default Header;
