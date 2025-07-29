function RequestForm({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function MyForm() {
  return (
    <fieldset>
      <input 
        type="name"
        placeholder="name"></input>
    </fieldset>
  );
}