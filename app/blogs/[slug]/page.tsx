"use client";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import Head from "next/head";
import Card from "@/components/Card/Card";
interface Props {
  params: { slug: string };
}
export type textProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function Blog({ params }: Props) {
  const [postdata, setPostData] = useState<textProps | null>(null);

  const paramId = params.slug.split("-");

  const postId = +paramId[paramId.length - 1];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((res) => setPostData(res));
  }, []);


  if (!postdata) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Card id={postdata?.id} title={postdata?.title} body={postdata?.body} />
    </section>
  );
}

export  function generateMetadata({ params }: Props) {
  const paramId = params.slug.split("-");

  return {
    title: 'dynamic page',
  };
}
