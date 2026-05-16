import { useState } from 'react'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => { setOpen(!open); document.body.style.overflow = !open ? 'hidden' : '' }
  const fechar = () => { setOpen(false); document.body.style.overflow = '' }
  const links = [['#sobre','Sobre'],['#servicos','Serviços'],['#depoimentos','Avaliações'],['#contato','Agendar']]
  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.1rem 5vw',background:'rgba(249,243,238,.97)',backdropFilter:'blur(10px)',borderBottom:'1px solid rgba(184,144,74,.15)'}}>
        <a href="#" style={{fontFamily:'var(--ff-titulo)',fontSize:'1.3rem',fontWeight:600,color:'var(--marrom)',textDecoration:'none',letterSpacing:'.04em'}}>
          Espaço <span style={{color:'var(--dourado)',fontStyle:'italic'}}>Ágape</span>
        </a>
        <ul style={{display:'flex',gap:'2.2rem',listStyle:'none'}}>
          {links.map(([h,l])=>(
            <li key={h}><a href={h} style={{fontSize:'.82rem',color:'var(--texto-muted)',textDecoration:'none',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase'}}>{l}</a></li>
          ))}
        </ul>
        <a href="#contato" style={{background:'var(--dourado)',color:'var(--branco)',padding:'.55rem 1.5rem',borderRadius:'30px',fontSize:'.82rem',fontWeight:700,textDecoration:'none',fontFamily:'var(--ff-corpo)',letterSpacing:'.04em'}}>Agendar horário</a>
        <button onClick={toggle} style={{display:'none',flexDirection:'column',gap:5,background:'none',border:'none',cursor:'pointer',padding:'.3rem'}}>
          <span style={{display:'block',width:22,height:2,background:'var(--marrom)',borderRadius:2,transition:'.3s',transform:open?'translateY(7px) rotate(45deg)':'none'}}/>
          <span style={{display:'block',width:22,height:2,background:'var(--marrom)',borderRadius:2,transition:'.3s',opacity:open?0:1}}/>
          <span style={{display:'block',width:22,height:2,background:'var(--marrom)',borderRadius:2,transition:'.3s',transform:open?'translateY(-7px) rotate(-45deg)':'none'}}/>
        </button>
      </nav>
      <div style={{display:'flex',position:'fixed',inset:0,zIndex:90,background:'var(--nude-claro)',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2rem',opacity:open?1:0,pointerEvents:open?'all':'none',transition:'opacity .3s'}}>
        {links.map(([h,l])=>(
          <a key={h} href={h} onClick={fechar} style={{fontFamily:'var(--ff-titulo)',fontSize:'2rem',fontWeight:600,color:'var(--marrom)',textDecoration:'none'}}>{l}</a>
        ))}
        <a href="#contato" onClick={fechar} style={{background:'var(--dourado)',color:'var(--branco)',padding:'.9rem 2.5rem',borderRadius:'30px',fontFamily:'var(--ff-corpo)',fontWeight:700,fontSize:'1rem',textDecoration:'none',marginTop:'1rem'}}>Agendar horário</a>
      </div>
    </>
  )
}
