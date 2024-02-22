import Link from "next/link";
export default function FavoritesPage({ musicals = [] }) {
  const favoriteMusicals = musicals.filter((musical) => musical.isFavorite);
  return (
    <>
      <h1>My favorite Musical</h1>
      <ul>
        {favoriteMusicals.map((musical) => (
          <li key={musical.id}>
            <h1>{musical.title}</h1>

            <Link href={`/musicals/${musical.id}`}>
              {musical.title} - Click here for more Infos...
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
