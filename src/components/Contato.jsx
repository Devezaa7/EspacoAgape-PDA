import { useState } from 'react'
// ⚠️ Substitua pelo seu endpoint do Formspree: https://formspree.io/f/XXXXXXXX
const ENDPOINT = 'https://formspree.io/f/SEU_ENDPOINT'
export default function Contato({ onSuccess }) {
  const [form, setForm] = useState({ nome:'', email:'', servico:'', mensagem:'' })
  const [loading, setLoading] = useState(false)
  const handle = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = async (e) => {
    e.preventDefault()
    if (ENDPOINT.includes('SEU_ENDPOINT')) { onSuccess(); return }
    setLoading(true)
    try {
      const res = await fetch(ENDPOINT, { method:'POST', body:JSON.stringify(form), headers:{'Content-Type':'application/json',Accept:'application/json'} })
      if (res.ok) { setForm({nome:'',email:'',servico:'',mensagem:''}); onSuccess() }
      else { alert('Algo deu errado. Me chama no WhatsApp!') }
    } catch { alert('Sem conexão. Me chama no WhatsApp!') }
    finally { setLoading(false) }
  }
  const inp = { width:'100%', background:'var(--nude-claro)', border:'1px solid rgba(184,144,74,.25)', color:'var(--texto)', padding:'.85rem 1rem', borderRadius:'10px', fontSize:'.92rem', fontFamily:'var(--ff-corpo)', outline:'none', marginTop:'.4rem' }
  const lbl = { display:'block', fontSize:'.8rem', fontWeight:700, color:'var(--marrom-claro)', letterSpacing:'.04em', textTransform:'uppercase' }
  return (
    <section id="contato" style={{padding:'6rem 5vw',background:'var(--nude-claro)'}}>
      <div style={{maxWidth:580,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'1rem'}}>
          <div style={{width:32,height:1,background:'var(--dourado)'}}/>
          <span style={{fontSize:'.78rem',fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--dourado)'}}>Agendar</span>
        </div>
        <h2 style={{fontFamily:'var(--ff-titulo)',fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:700,color:'var(--marrom)',marginBottom:'.8rem'}}>Vamos marcar seu horário?</h2>
        <p style={{color:'var(--texto-muted)',marginBottom:'2.5rem',lineHeight:1.7,fontWeight:300}}>Preenche o formulário e a gente te responde rapidinho pra confirmar o melhor horário pra você. ✨</p>
        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
          <div>
            <label style={lbl}>Seu nome</label>
            <input name="nome" value={form.nome} onChange={handle} required placeholder="Ex: Ana Paula" style={inp}/>
          </div>
          <div>
            <label style={lbl}>E-mail ou WhatsApp</label>
            <input name="email" value={form.email} onChange={handle} required placeholder="seu@email.com ou (21) 9xxxx-xxxx" style={inp}/>
          </div>
          <div>
            <label style={lbl}>Qual serviço te interessa?</label>
            <select name="servico" value={form.servico} onChange={handle} required style={{...inp,cursor:'pointer'}}>
              <option value="">Selecione...</option>
              <option>Limpeza de Pele</option>
              <option>Massagem Relaxante</option>
              <option>Design de Sobrancelhas</option>
              <option>Drenagem Linfática</option>
              <option>Peeling Facial</option>
              <option>Pacote especial</option>
              <option>Quero conhecer as opções</option>
            </select>
          </div>
          <div>
            <label style={lbl}>Alguma observação? (opcional)</label>
            <textarea name="mensagem" value={form.mensagem} onChange={handle} placeholder="Ex: prefiro atendimento à tarde, tenho pele sensível..." rows={3} style={{...inp,resize:'vertical'}}/>
          </div>
          <button type="submit" disabled={loading} style={{background:'var(--dourado)',color:'var(--branco)',border:'none',padding:'1rem',borderRadius:'30px',fontSize:'1rem',fontFamily:'var(--ff-corpo)',fontWeight:700,cursor:'pointer',letterSpacing:'.02em',marginTop:'.4rem'}}>
            {loading ? 'Enviando...' : 'Quero agendar meu horário ✨'}
          </button>
        </form>
        <p style={{textAlign:'center',marginTop:'1.5rem',fontSize:'.83rem',color:'var(--texto-muted)'}}>Ou nos chame direto no WhatsApp 😊</p>
      </div>
    </section>
  )
}
