import Card from "@/components/Card/Card";
import { getAllData } from "@/blogs-data";

export default function Blogs() {
  console.log(getAllData);

  const data = getAllData();

  return (
    <>
      <h2>Hi</h2>
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
