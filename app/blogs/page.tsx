import Card from "@/components/Card/Card";

const obj = [
  {
    author: "Zokir",
    date: "20-12-2022",
    title: "Map data sturucture",
    text: "lorem ipsum dolor sit amet",
    image: "https://murotov.netlify.app/assets/images/zokirjpg.jpg",
  },
  {
    author: "Zokir2",
    date: "20-12-2022",
    title: "Map data sturucture",
    text: "lorem ipsum dolor sit amet",
    image: "https://murotov.netlify.app/assets/images/zokirjpg.jpg",
  },
  {
    author: "Zokir3",
    date: "20-12-2022",
    title: "Map data sturucture",
    text: "lorem ipsum dolor sit amet",
    image: "https://murotov.netlify.app/assets/images/zokirjpg.jpg",
  },
];

export default function Blogs() {
  return (
    <>
      {obj.map((content) => (
        <Card
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
