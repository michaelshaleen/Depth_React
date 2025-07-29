function RequestForm({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function MyForm() {
  return (
    <fieldset>
      <h2>Appointment Request</h2>
      <input 
        type="name"
        placeholder="name"></input><br/>
        <input 
        type="phone number"
        placeholder="phone number"></input><br/>
        <input 
        type="date"
        ></input>
        <input 
        type="message"
        placeholder="What can we help you with?"
        ></input>
    </fieldset>
  );
}