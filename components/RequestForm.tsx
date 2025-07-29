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
        placeholder="name"
        required></input><br/>
        <input 
        type="phone number"
        placeholder="phone number"
        required></input><br/>
        <input 
        type="date"
        required
        ></input>
        <input 
        type="message"
        placeholder="What can we help you with?"
        required
        ></input>
        <input 
        type="submit"
        placeholder="Submit"
        ></input>
    </fieldset>
  );
}