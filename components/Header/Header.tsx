import Image from "next/image";
import classes from "./Header.module.scss";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href={'/blogs'}>
           <p>Zokirdev's Blog</p>
          </Link>
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
