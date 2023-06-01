import Card from "@/components/Card/Card";
import { getAllData } from "@/blogs-data";
import { Metadata } from "next";

const data = getAllData();

export const metadata: Metadata = {
  title :"just blog page",
  description:"this just description"
}
export default function Blogs() {

  return (
    <>
      {data.map((content) => (
        <Card
          id={content.id}
          author={content.author}
          date={content.date}
          title={content.title}
          text={content.text}
          image={content.image}
        />
      ))}
    </>
  );
}
