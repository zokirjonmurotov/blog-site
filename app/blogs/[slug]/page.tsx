import { getDataById } from "@/blogs-data";
import { Metadata } from "next";
import Head from "next/head";
import { get } from "http";

interface Props {
  params: { slug: string };
}

// export const metadata: Metadata = {
//   title: "nimadir",
// }

export default async function Blog({ params }: Props) {
  const paramId = params.slug.split("-");

  const data = getDataById(+paramId[paramId.length - 1]);

  return (
    <>
      <section>
        <h2>{data?.title}</h2>
        <p>{data?.text}</p>
      </section>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paramId = params.slug.split("-");

  const data = getDataById(+paramId[paramId.length - 1]);
  return {
    title: data?.title,
  };
}
