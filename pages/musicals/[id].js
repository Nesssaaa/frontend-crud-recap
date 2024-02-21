import { useRouter } from "next/router";
import data from "../../data.json";

export default function SingleMusicalPage({}) {
  const router = useRouter();
  const { id } = router.query;
  const musical = data.find((musical) => musical.id === id);
  return (
    <>
      <h1>{musical.title}</h1>
      <p>Description: {musical.description}</p>
      <p>When: {musical.date}</p>
      <p>Where: {musical.location}</p>
      <p>Price in EUR: {musical.price}</p>
    </>
  );
}
