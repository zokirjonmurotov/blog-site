import classes from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";

type CardTypes = {
  id: number;
  author: string;
  date: string;
  title: string;
  text: string;
  image: string;
};

export default function Card(props: CardTypes) {
  return (
    <>
      <Link href={`/blogs/${props.title}-${props.id}`}>
        <div className={classes.card}>
          <div className={classes.card__header}>
            <h4 className={classes.author}>{props.author}</h4>
            <p className={classes.date}>{props.date}</p>
          </div>
          <div className={classes.card__main}>
            <div className={classes.card__text}>
              <h3>{props.title}</h3>
              <p>{props.text}</p>
            </div>
            <div className={classes.card__poster}>
              <Image
                src={props.image}
                width={100}
                height={100}
                alt="poster img"
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
