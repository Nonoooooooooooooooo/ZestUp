import Navbar from '../composants/Navbar'; import Footer from '../composants/Footer';

export default function Contact() { return ( <> <main style={{padding:'2rem'}}> Contact Us <form style={{display:'flex', flexDirection:'column', maxWidth:'400px', margin:'auto'}}> Name: Email: Message: <button type='submit' style={{marginTop:'1rem'}}>Send </> ) }
