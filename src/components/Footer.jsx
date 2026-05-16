export default function Footer() {
  return (
    <footer style={{background:'var(--marrom)',padding:'2.5rem 5vw',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
      <span style={{fontFamily:'var(--ff-titulo)',fontWeight:600,color:'var(--branco)',fontSize:'1.1rem'}}>
        Espaço <em style={{fontStyle:'italic',color:'var(--dourado-claro)'}}>Ágape</em>
      </span>
      <span style={{fontSize:'.82rem',color:'rgba(255,255,255,.5)'}}>Barra da Tijuca · Rio de Janeiro · (21) 9xxxx-xxxx</span>
      <span style={{fontSize:'.82rem',color:'rgba(255,255,255,.4)'}}>© 2025 Espaço Ágape — Beleza & Cuidado</span>
    </footer>
  )
}
