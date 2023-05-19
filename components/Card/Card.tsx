import classes from "./Card.module.scss";
import Image from "next/image";

type CardTypes = {
  author: string;
  date: string;
  title: string;
  text: string;
  image: string;
};

export default function Card(props: CardTypes) {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.card__header}>
          <h2 className={classes.author}>{props.author}</h2>
          <p className={classes.date}>{props.date}</p>
        </div>
        <div className={classes.card__main}>
          <div className={classes.card__text}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
          <div className={classes.card__poster}>
            <Image
              src={props.image}
              width={200}
              height={200}
              alt="poster img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
