import { useRouter } from "next/router";
import Form from "../../../components/Form";

export default function EditMusicalPage({ getMusical, editMusicalPage }) {
  const router = useRouter();
  const musical = getMusical(router.query.id);

  function onSubmit(data) {
    editMusicalPage(router.query.id, data);
  }

  if (!musical) {
    return <h1>Musical not found</h1>;
  }
  return (
    <>
      <h1>Edit {musical.title}</h1>
      <Form musical={musical} onSubmit={onSubmit} />
    </>
  );
}
