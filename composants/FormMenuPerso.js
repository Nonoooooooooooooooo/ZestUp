export default function FormMenuPerso(){
  return (
    <form style={{display:'flex', flexDirection:'column', maxWidth:'400px', margin:'auto'}}>
      <label>Starter:</label><input type='text' />
      <label>Main:</label><input type='text' />
      <label>Dessert:</label><input type='text' />
      <label>Drink:</label><input type='text' />
      <label>Notes:</label><textarea placeholder='Allergies or preferences'></textarea>
      <button type='submit' style={{marginTop:'1rem'}}>Submit</button>
    </form>
  )
}
