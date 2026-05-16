import { useState } from 'react'
import Navbar      from './components/Navbar.jsx'
import Hero        from './components/Hero.jsx'
import Sobre       from './components/Sobre.jsx'
import Servicos    from './components/Servicos.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import Contato     from './components/Contato.jsx'
import Footer      from './components/Footer.jsx'
import Obrigado    from './components/Obrigado.jsx'
import WhatsApp    from './components/WhatsApp.jsx'

export default function App() {
  const [obrigado, setObrigado] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Contato onSuccess={() => setObrigado(true)} />
      <Footer />
      <WhatsApp />
      {obrigado && <Obrigado onClose={() => setObrigado(false)} />}
    </>
  )
}
