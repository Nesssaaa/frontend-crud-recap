import Form from "../../components/Form";
import { useRouter } from "next/router";
export default function NewPage({ addMusical }) {
  const router = useRouter();
  function onSubmit(data) {
    addMusical(data);
    router.push("/");
  }
  return (
    <>
      <h1>New</h1>
      <Form onSubmit={addMusical} />
    </>
  );
}
