import styles from "./Form.module.css";

export default function Form({ onSubmit, musical = {} }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Title
        <input
          name="title"
          required
          placeholder="Enter the musical title"
          defaultValue={musical.title}
        />
      </label>
      <label>
        Description
        <input
          name="description"
          required
          placeholder="Enter the musical description"
          defaultValue={musical.description}
        />
      </label>
      <label>
        Date
        <input
          name="date"
          required
          placeholder="Enter the date of the musical"
          defaultValue={musical.date}
        />
      </label>
      <label>
        location
        <input
          name="location"
          required
          placeholder="Enter the location of the musical-event"
          defaultValue={musical.location}
        />
      </label>
      <label>
        Price
        <input
          name="price"
          type="number"
          required
          placeholder="Enter the price of the musical"
          defaultValue={musical.price}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
