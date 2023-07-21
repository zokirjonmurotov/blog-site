"use client";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import { getAllData } from "@/blogs-data";
import { Metadata } from "next";

export type dataProps = {
  id: number;
  title: string;
  body: string;
};

export const metadata: Metadata = {
  title: "just blog page",
  description: "this is just description",
};
export default function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data.map((content: dataProps) => (
        <Card
          key={content.id}
          id={content.id}
          // author={content.author}
          // date={content.date}
          title={content.title}
          body={content.body}
          // image={content.image}
        />
      ))}
    </div>
  );
}
