const servicos = [
  { icon:'✨', nome:'Limpeza de Pele', desc:'Higienização profunda com extração, tonificação e hidratação. Pele renovada e respirando.', preco:'R$ 120', tempo:'60 min' },
  { icon:'💆‍♀️', nome:'Massagem Relaxante', desc:'Técnica sueca com aromaterapia. Ideal pra aliviar tensão e desestressar de verdade.', preco:'R$ 150', tempo:'60 min' },
  { icon:'💅', nome:'Design de Sobrancelhas', desc:'Modelagem personalizada para o formato do seu rosto. Micropigmentação disponível.', preco:'R$ 60', tempo:'40 min' },
  { icon:'🌿', nome:'Drenagem Linfática', desc:'Reduz inchaço, melhora a circulação e dá aquela sensação de leveza imediata.', preco:'R$ 130', tempo:'50 min' },
  { icon:'💎', nome:'Peeling Facial', desc:'Remove células mortas e uniformiza o tom da pele. Resultado visível já na primeira sessão.', preco:'R$ 140', tempo:'45 min' },
  { icon:'🌹', nome:'Pacotes Especiais', desc:'Monte o seu pacote com 4, 8 ou 12 sessões e ganhe desconto progressivo. Consulte!', preco:'sob consulta', tempo:'a combinar' },
]
export default function Servicos() {
  return (
    <section id="servicos" style={{padding:'6rem 5vw',background:'var(--nude-claro)'}}>
      <div style={{maxWidth:1050,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'1rem'}}>
          <div style={{width:32,height:1,background:'var(--dourado)'}}/>
          <span style={{fontSize:'.78rem',fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--dourado)'}}>O que fazemos</span>
        </div>
        <h2 style={{fontFamily:'var(--ff-titulo)',fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:700,color:'var(--marrom)',marginBottom:'3rem',lineHeight:1.2}}>
          Nossos tratamentos
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))',gap:'1.2rem'}}>
          {servicos.map(s=>(
            <div key={s.nome} style={{background:'var(--branco)',borderRadius:'16px',padding:'2rem',border:'1px solid rgba(184,144,74,.15)',transition:'transform .3s, box-shadow .3s',cursor:'default'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(184,144,74,.12)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'2.2rem',marginBottom:'1rem'}}>{s.icon}</div>
              <h3 style={{fontFamily:'var(--ff-titulo)',fontSize:'1.2rem',fontWeight:600,color:'var(--marrom)',marginBottom:'.6rem'}}>{s.nome}</h3>
              <p style={{fontSize:'.88rem',lineHeight:1.75,color:'var(--texto-muted)',marginBottom:'1.4rem',fontWeight:300}}>{s.desc}</p>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid var(--nude-medio)',paddingTop:'1rem'}}>
                <span style={{fontFamily:'var(--ff-titulo)',fontWeight:700,fontSize:'1.2rem',color:'var(--dourado)',fontStyle:'italic'}}>{s.preco}</span>
                <span style={{fontSize:'.78rem',color:'var(--texto-muted)',background:'var(--nude-claro)',padding:'.3rem .8rem',borderRadius:'20px',fontWeight:700}}>⏱ {s.tempo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
