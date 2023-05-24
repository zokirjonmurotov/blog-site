import { getDataById } from "@/blogs-data";
import { get } from "http";

interface Props {
  params: { slug: string };
}

export default async function Blog({ params }: Props) {
  const paramId = params.slug.split("-");

  const data = getDataById(+paramId[paramId.length - 1]);

  console.log(data);

  return (
    <>
      <h2>{data?.title}</h2>
      <p>{data?.text}</p>
    </>
  );
}
