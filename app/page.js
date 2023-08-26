import Image from 'next/image'
import './page.css'


export default function Home() {
  return (
    <section className='main'>


        <video className='video' autoPlay loop muted>
          <source src="file.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
        </video>
          <div div className="content">
           
            <h1>Desbravando o mundo dos <span>computadores</span> e eletrônicos</h1>
            <p>Fique por dentro do mundo dos computadores e eltrônicos</p>
        
        <form>
          <input className='input2' placeholder='Email*' />
          <button className='btn'>Enviar</button>
        </form>
        </div>
   </section>
  )
}
