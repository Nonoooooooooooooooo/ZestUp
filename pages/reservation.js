import Navbar from '../composants/Navbar'; import Footer from '../composants/Footer';

export default function Reservation() { return ( <> <main style={{padding: '2rem'}}> Book a Private Chef <form style={{display:'flex', flexDirection:'column', maxWidth:'400px', margin:'auto'}}> Date: Time: Number of People: Choose a Menu: Mediterranean Asian Italian French Vegetarian Street Food Exotic Breakfast Gourmet Brunch Custom Menu Notes: <button type='submit' style={{marginTop:'1rem'}}>Send Reservation </> ) }
