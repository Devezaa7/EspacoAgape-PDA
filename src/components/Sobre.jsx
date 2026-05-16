export default function Sobre() {
  return (
    <section id="sobre" style={{padding:'6rem 5vw',background:'var(--branco)'}}>
      <div style={{maxWidth:1000,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center'}}>
        <div>
          <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'1rem'}}>
            <div style={{width:32,height:1,background:'var(--dourado)'}}/>
            <span style={{fontSize:'.78rem',fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--dourado)'}}>Nossa história</span>
          </div>
          <h2 style={{fontFamily:'var(--ff-titulo)',fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:700,color:'var(--marrom)',marginBottom:'1.4rem',lineHeight:1.2}}>
            Um espaço criado<br/><em style={{fontStyle:'italic'}}>com amor</em>
          </h2>
          <p style={{lineHeight:1.9,color:'var(--texto-muted)',marginBottom:'1rem',fontWeight:300}}>
            O Espaço Ágape nasceu em 2020 do sonho de criar um lugar diferente — sem aquela frieza de clínica e sem o barulho de salão movimentado. Um cantinho só seu, onde você chega estressada e sai renovada.
          </p>
          <p style={{lineHeight:1.9,color:'var(--texto-muted)',marginBottom:'1rem',fontWeight:300}}>
            Fica na Barra da Tijuca, em ambiente climatizado, cheiroso e com música ambiente. Atendimento com hora marcada pra você não esperar nem um minuto.
          </p>
          <p style={{lineHeight:1.9,color:'var(--texto-muted)',marginBottom:'2rem',fontWeight:300}}>
            Trabalhamos só com marcas profissionais e cada procedimento é feito com técnica e carinho. A gente acredita que cuidar da beleza é também cuidar da autoestima.
          </p>
          <div style={{display:'flex',gap:'.8rem',flexWrap:'wrap'}}>
            {['Ambiente privativo','Produtos profissionais','Agendamento online','Parcela em até 3x'].map(tag=>(
              <span key={tag} style={{background:'var(--nude-claro)',border:'1px solid var(--nude-escuro)',fontSize:'.78rem',padding:'.4rem 1rem',borderRadius:'20px',color:'var(--marrom-claro)',fontWeight:700}}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{position:'relative'}}>
          <div style={{background:'linear-gradient(135deg, var(--nude-medio), var(--nude-escuro))',borderRadius:'20px',aspectRatio:'4/5',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'6rem'}}>
            🌸
          </div>
          <div style={{position:'absolute',bottom:-20,left:-20,background:'var(--dourado)',borderRadius:'16px',padding:'1.2rem 1.6rem',textAlign:'center'}}>
            <strong style={{display:'block',fontFamily:'var(--ff-titulo)',fontSize:'1.8rem',color:'var(--branco)',fontStyle:'italic'}}>800+</strong>
            <span style={{fontSize:'.75rem',color:'rgba(255,255,255,.85)',textTransform:'uppercase',letterSpacing:'.06em',fontWeight:700}}>clientes felizes</span>
          </div>
          <div style={{position:'absolute',top:-16,right:-16,background:'var(--branco)',border:'1px solid var(--nude-escuro)',borderRadius:'12px',padding:'1rem 1.2rem',textAlign:'center',boxShadow:'0 8px 30px rgba(0,0,0,.08)'}}>
            <strong style={{display:'block',fontFamily:'var(--ff-titulo)',fontSize:'1.4rem',color:'var(--dourado)',fontStyle:'italic'}}>4.9★</strong>
            <span style={{fontSize:'.72rem',color:'var(--texto-muted)',fontWeight:700,textTransform:'uppercase',letterSpacing:'.04em'}}>Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
