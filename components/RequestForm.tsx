import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';




function RequestForm({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function MyForm() {
  return (
    <fieldset
      style={styles.form}>
      <h2>Appointment Request</h2>
      <input 
        style={styles.input}
        type="name"
        placeholder="name"
        required></input><br/>
        <input
        style={styles.input}
        type="phone number"
        placeholder="phone number"
        required></input><br/>
        <input 
        style={styles.input}
        type="date"
        required
        ></input><br/>
        <input
        style={styles.input} 
        type="message"
        placeholder="What can we help you with?"
        required
        ></input><br/>
        <input
        style={styles.button}
        type="submit"
        placeholder="Submit"
        ></input>
    </fieldset>
  );
}


const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderRadius: 4,
  }
})