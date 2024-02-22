import { useRouter } from "next/router";
import Link from "next/link";

export default function SingleMusicalPage({ getMusical }) {
  const router = useRouter();
  const { id } = router.query;

  const musical = getMusical(id);
  if (!musical) {
    return <h1>Musical not found</h1>;
  }

  return (
    <>
      <h1>{musical.title}</h1>
      <p>Description: {musical.description}</p>
      <p>When: {musical.date}</p>
      <p>Where: {musical.location}</p>
      <p>Price in EUR: {musical.price}</p>
      <li>
        <Link href={`/musicals/${id}/edit`}>Edit</Link>
      </li>
    </>
  );
}
