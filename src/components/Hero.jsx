export default function Hero() {
  return (
    <section style={{minHeight:'100vh',display:'flex',alignItems:'center',background:'linear-gradient(135deg, var(--nude-claro) 0%, var(--nude-medio) 100%)',padding:'8rem 5vw 4rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:-120,right:-120,width:500,height:500,borderRadius:'50%',background:'rgba(184,144,74,.08)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',bottom:-80,left:-80,width:300,height:300,borderRadius:'50%',background:'rgba(184,144,74,.06)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',top:'20%',right:'8%',fontSize:'8rem',opacity:.06,pointerEvents:'none',userSelect:'none'}}>✦</div>

      <div style={{maxWidth:680,animation:'fadeUp .9s ease both'}}>
        <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'1.6rem'}}>
          <div style={{width:32,height:1,background:'var(--dourado)'}}/>
          <span style={{fontSize:'.78rem',fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--dourado)',fontFamily:'var(--ff-corpo)'}}>Barra da Tijuca · Rio de Janeiro</span>
        </div>
        <h1 style={{fontFamily:'var(--ff-titulo)',fontSize:'clamp(2.6rem,6vw,4.5rem)',fontWeight:700,color:'var(--marrom)',lineHeight:1.1,marginBottom:'1.6rem'}}>
          Beleza que<br/>
          <em style={{fontStyle:'italic',color:'var(--dourado)'}}>cuida de dentro</em><br/>
          pra fora.
        </h1>
        <p style={{fontSize:'1.05rem',color:'var(--texto-muted)',lineHeight:1.85,maxWidth:500,marginBottom:'2.8rem',fontWeight:300}}>
          No Espaço Ágape você encontra tratamentos estéticos feitos com carinho, técnica e produtos de qualidade. Um lugar pra você sair se sentindo outra pessoa.
        </p>
        <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',marginBottom:'3.5rem'}}>
          <a href="#contato" style={{background:'var(--dourado)',color:'var(--branco)',padding:'1rem 2.4rem',borderRadius:'30px',fontFamily:'var(--ff-corpo)',fontWeight:700,fontSize:'.95rem',textDecoration:'none',letterSpacing:'.02em'}}>
            Agendar agora ✨
          </a>
          <a href="#servicos" style={{border:'1.5px solid var(--nude-escuro)',color:'var(--marrom-claro)',padding:'1rem 2rem',borderRadius:'30px',fontFamily:'var(--ff-corpo)',fontWeight:700,fontSize:'.95rem',textDecoration:'none'}}>
            Ver serviços
          </a>
        </div>
        <div style={{display:'flex',gap:'3rem',flexWrap:'wrap'}}>
          {[['+800','atendimentos realizados'],['5 anos','no mercado'],['4.9★','avaliação no Google']].map(([n,l])=>(
            <div key={l}>
              <span style={{display:'block',fontFamily:'var(--ff-titulo)',fontWeight:700,fontSize:'1.5rem',color:'var(--dourado)',fontStyle:'italic'}}>{n}</span>
              <span style={{fontSize:'.78rem',color:'var(--texto-muted)',textTransform:'uppercase',letterSpacing:'.06em',fontWeight:700}}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
