"use client";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import getAlbum from "@/utils/data";

export type dataProps = {
  id: string;
  title: string;
  author: string;
  date: string;
  body: string;
};

export const metadata: Metadata = {
  title: "just blog page",
  description: "this is just description",
};
export default function Blogs() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getAlbum()
      .then((res) => {
        console.log("hii");
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(`bunaqa error: ${err}`);
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
          title={content.title}
          body={content.body}
        />
      ))}
    </div>
  );
}
