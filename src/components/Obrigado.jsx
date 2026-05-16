export default function Obrigado({ onClose }) {
  return (
    <div style={{position:'fixed',inset:0,zIndex:999,background:'rgba(249,243,238,.98)',backdropFilter:'blur(8px)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'2rem',animation:'fadeUp .4s ease'}}>
      <div style={{fontSize:'4rem',marginBottom:'1.2rem',animation:'pop .4s ease'}}>🌸</div>
      <h2 style={{fontFamily:'var(--ff-titulo)',fontSize:'clamp(1.8rem,4vw,2.8rem)',fontWeight:700,color:'var(--marrom)',marginBottom:'.8rem'}}>Agendamento recebido!</h2>
      <p style={{fontSize:'1rem',color:'var(--texto-muted)',maxWidth:420,lineHeight:1.8,marginBottom:'2rem',fontWeight:300}}>
        Te retornamos em breve para confirmar dia e horário. Mal podemos esperar para te receber! ✨
      </p>
      <button onClick={onClose} style={{background:'var(--dourado)',color:'var(--branco)',border:'none',padding:'.9rem 2.5rem',borderRadius:'30px',fontSize:'1rem',fontFamily:'var(--ff-corpo)',fontWeight:700,cursor:'pointer'}}>Voltar ao site</button>
    </div>
  )
}
