import { useRouter } from "next/router";
import Link from "next/link";

export default function SingleMusicalPage({
  getMusical,
  deleteMusical,
  toggleFavorite,
}) {
  const router = useRouter();
  const { id } = router.query;

  const musical = getMusical(id);
  if (!musical) {
    return <h1>Musical not found</h1>;
  }

  function handleDelete() {
    deleteMusical(router.query.id);
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
      <li>
        <button onClick={() => toggleFavorite(musical.id)}>
          {musical.isFavorite ? "Unfav" : "Fav"}
        </button>
      </li>
      <li>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
}
