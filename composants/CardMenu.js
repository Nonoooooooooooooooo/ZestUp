export default function CardMenu({menu}){
  return (
    <div style={{
      border:'1px solid #eee',
      borderRadius:'12px',
      padding:'1rem',
      width:'220px',
      textAlign:'center',
      backgroundColor:'white',
      boxShadow:'0 4px 10px rgba(0,0,0,0.05)',
      transition:'all 0.3s ease',
      cursor:'pointer'
    }}
    onMouseEnter={e => e.currentTarget.style.transform='translateY(-5px)'}
    onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
    >
      <img src={menu.image} alt={menu.title} style={{width:'100%', borderRadius:'10px', height:'150px', objectFit:'cover'}}/>
      <h3>{menu.title}</h3>
      <p>{menu.description}</p>
      <p style={{fontWeight:'600', color:'#FF5733'}}>{menu.price}</p>
    </div>
  )
}
