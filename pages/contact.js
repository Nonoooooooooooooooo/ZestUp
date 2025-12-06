import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{padding:'2rem'}}>
        <h1>Contact Us</h1>
        <form style={{display:'flex', flexDirection:'column', maxWidth:'400px', margin:'auto'}}>
          <label>Name:</label>
          <input type='text' required />
          <label>Email:</label>
          <input type='email' required />
          <label>Message:</label>
          <textarea required></textarea>
          <button type='submit' style={{marginTop:'1rem'}}>Send</button>
        </form>
      </main>
      <Footer />
    </>
  )
}
