export default function CarrouselImages(){
  const images=['/images/menu1.jpg','/images/menu2.jpg','/images/menu3.jpg'];
  return (
    <div style={{
      display:'flex',
      overflowX:'auto',
      gap:'1rem',
      marginTop:'2rem',
      paddingBottom:'1rem'
    }}>
      {images.map((img,i)=>(
        <img key={i} src={img} style={{
          height:'220px', 
          borderRadius:'12px',
          flex:'0 0 auto',
          transition:'transform 0.3s',
          cursor:'pointer'
        }}
        onMouseEnter={e=>e.currentTarget.style.transform='scale(1.05)'}
        onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
        />
      ))}
    </div>
  )
}
