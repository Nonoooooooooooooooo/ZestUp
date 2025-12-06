export default function CardMenu({menu}){
  return (
    <div style={{border:'1px solid #ddd', borderRadius:'8px', padding:'1rem', width:'200px', textAlign:'center'}}>
      <img src={menu.image} alt={menu.title} style={{width:'100%', borderRadius:'8px'}}/>
      <h3>{menu.title}</h3>
      <p>{menu.description}</p>
      <p>{menu.price}</p>
    </div>
  )
}
