const depoimentos = [
  { nome:'Fernanda O.', bairro:'Barra da Tijuca', texto:'Fiz a limpeza de pele e amei! Ambiente super aconchegante, profissional atenciosa e resultado incrível. Já agendei a próxima sessão.', nota:'★★★★★' },
  { nome:'Bianca M.', bairro:'Recreio', texto:'A massagem relaxante foi uma experiência maravilhosa. Cheguei estressada do trabalho e saí praticamente dormindo de tão relaxada kkkk.', nota:'★★★★★' },
  { nome:'Carla R.', bairro:'Jacarepaguá', texto:'Fiz o pacote de drenagem linfática e o resultado superou minhas expectativas. Atendimento pontual, o que já é raro de encontrar!', nota:'★★★★★' },
]
export default function Depoimentos() {
  return (
    <section id="depoimentos" style={{padding:'6rem 5vw',background:'var(--branco)'}}>
      <div style={{maxWidth:1000,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'1rem'}}>
          <div style={{width:32,height:1,background:'var(--dourado)'}}/>
          <span style={{fontSize:'.78rem',fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--dourado)'}}>Avaliações</span>
        </div>
        <h2 style={{fontFamily:'var(--ff-titulo)',fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:700,color:'var(--marrom)',marginBottom:'3rem',lineHeight:1.2}}>
          O que nossas clientes dizem
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))',gap:'1.2rem'}}>
          {depoimentos.map(d=>(
            <div key={d.nome} style={{background:'var(--nude-claro)',borderRadius:'16px',padding:'1.8rem',border:'1px solid rgba(184,144,74,.12)'}}>
              <div style={{color:'var(--dourado)',fontSize:'1rem',marginBottom:'1rem',letterSpacing:'.1em'}}>{d.nota}</div>
              <p style={{fontSize:'.9rem',lineHeight:1.8,color:'var(--texto-muted)',marginBottom:'1.4rem',fontStyle:'italic',fontWeight:300}}>"{d.texto}"</p>
              <div style={{display:'flex',alignItems:'center',gap:'.8rem'}}>
                <div style={{width:40,height:40,borderRadius:'50%',background:'var(--dourado)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--branco)',fontWeight:700,fontFamily:'var(--ff-titulo)',fontSize:'1rem',flexShrink:0}}>{d.nome[0]}</div>
                <div>
                  <p style={{fontWeight:700,color:'var(--marrom)',fontSize:'.9rem'}}>{d.nome}</p>
                  <span style={{fontSize:'.78rem',color:'var(--texto-muted)'}}>{d.bairro}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
