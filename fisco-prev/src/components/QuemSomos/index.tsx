import teste from 'assets/slide_01.jpg';

export default function QuemSomos() {
  return (
    <section id='quemSomos' className='my-36 w-full px-6 lg:flex lg:flex-row'>
      <img src={teste} alt="foto quem somos" className='lg:w-1/2 lg:bg-contain bg-center bg-no-repeat bg:overflow-hidden'/>
      <div className='w-full px-6 py-8 flex flex-wrap bg-cardServicosBg md:px-16 lg:w-1/2'>
        <h3 className='subtitle mb-3'>Saiba mais sobre a nossa organização!</h3>
        <h2 className='titleh2 mb-9'>Quem é a
          <span className='text-azulPrimario'> FiscoPrev?</span>
        </h2>
        <p className='content text-cinzaSubTitle mb-6'>Criada a partir de um sonho de uma vida melhor, a Organização Fisco Previ foi fundada em 1979 por Nelson e Roseli Peroni.</p>
        <p className='content text-cinzaSubTitle mb-6'>Empreendedores, eles acreditavam que através dessa empresa garantiriam uma vida melhor para sua família e para todas as pessoas que estivessem verdadeiramente envolvidas. E como eles estavam certos! Ao longo destes anos, a Organização Fisco Previ cresceu e se profissionalizou, tornandoqua-se uma das empresas de Prestação de Serviços de Contabilidade, Fiscal e Departamento Pessoal mais respeitadas do ramo em nossa cidade.</p>
        <p className='content text-cinzaSubTitle mb-6'>Desde a sua fundação, a Organização Fisco Previ atende seus clientes sempre levando em conta a fidelização, satisfação e qualidade no atendimento e serviços prestados. Valorizamos a honestidade e priorizamos compartilhar experiências e vivências com nossos clientes para que cresçamos juntos.</p>
        <p className='content text-cinzaSubTitle mb-6'>Nosso cotidiano é alicerçado na transparência, ética e responsabilidade, e acima de tudo somos empáticos com nossos clientes em todos os processos de atendimento!</p>
      </div>
    </section>
  );
}
