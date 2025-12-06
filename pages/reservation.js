import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';

export default function Reservation() {
  return (
    <>
      <Navbar />
      <main style={{padding: '2rem'}}>
        <h1>Book a Private Chef</h1>
        <form style={{display:'flex', flexDirection:'column', maxWidth:'400px', margin:'auto'}}>
          <label>Date:</label>
          <input type='date' required />
          <label>Time:</label>
          <input type='time' required />
          <label>Number of People:</label>
          <input type='number' min='1' required />
          <label>Choose a Menu:</label>
          <select>
            <option>Mediterranean</option>
            <option>Asian</option>
            <option>Italian</option>
            <option>French</option>
            <option>Vegetarian</option>
            <option>Street Food</option>
            <option>Exotic</option>
            <option>Breakfast</option>
            <option>Gourmet</option>
            <option>Brunch</option>
            <option>Custom Menu</option>
          </select>
          <label>Notes:</label>
          <textarea placeholder='Allergies, preferences...'></textarea>
          <button type='submit' style={{marginTop:'1rem'}}>Send Reservation</button>
        </form>
      </main>
      <Footer />
    </>
  )
}
