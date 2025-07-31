function RequestForm({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function MyForm() {
  return (
    <fieldset
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px',
      }}>
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
        ></input><br/>
        <input 
        type="message"
        placeholder="What can we help you with?"
        required
        ></input><br/>
        <input 
        type="submit"
        placeholder="Submit"
        ></input>
    </fieldset>
  );
}