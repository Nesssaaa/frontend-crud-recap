// name your list resource in the page props
// and map over it to render it
import Link from "next/link";
export default function IndexPage({ musicals }) {
  return (
    <>
      <h1>Musical and Theatre Events</h1>
      {musicals.map((musical) => (
        <div key={musical.id}>
          <Link href={`/musicals/${musical.id}`}>
            <h2>{musical.title}</h2>
          </Link>
          {/* <p>Description: {musical.description}</p>
          <p>When: {musical.date}</p>
          <p>Where: {musical.location}</p>
          <p>Price in EUR: {musical.price}</p> */}
        </div>
      ))}
    </>
  );
}
