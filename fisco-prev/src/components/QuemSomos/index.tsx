import Banner from 'assets/banner2.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function QuemSomos() {
  return (
    <section id='quemSomos' className='mt-36 mb-0 w-full px-6 lg:flex lg:flex-row lg:flex-wrap lg:relative z-0'>
      <img src={Banner} alt="foto quem somos" className='lg:w-full lg:h-full lg:bg-cover bg-no-repeat bg:overflow-hidden '/>
      <div className='w-full px-6 py-8 flex flex-wrap bg-cardServicosBg md:px-16 lg:w-1/2 lg:absolute top-0 right-0 z-10'>
        <h3 className='subtitle mb-3'>Saiba mais sobre a nossa organização!</h3>
        <h2 className='titleh2 mb-9'>Quem é a
          <span className='text-azulPrimario'> FiscoPrevi?</span>
        </h2>
        <p className='content text-cinzaSubTitle text-base mb-6'>Criada a partir de um sonho de uma vida melhor, a Organização Fisco Previ foi fundada em 1979 por Nelson e Roseli Peroni.</p>
        <p className='content text-cinzaSubTitle text-base mb-6'>Empreendedores, eles acreditavam que através dessa empresa garantiriam uma vida melhor para sua família e para todas as pessoas que estivessem verdadeiramente envolvidas. E como eles estavam certos! Ao longo destes anos, a Organização Fisco Previ cresceu e se profissionalizou, tornandoqua-se uma das empresas de Prestação de Serviços de Contabilidade, Fiscal e Departamento Pessoal mais respeitadas do ramo em nossa cidade.</p>
        <p className='content text-cinzaSubTitle text-base mb-6 md:mb-6'>Desde a sua fundação, a Organização Fisco Previ atende seus clientes sempre levando em conta a fidelização, satisfação e qualidade no atendimento e serviços prestados. Valorizamos a honestidade e priorizamos compartilhar experiências e vivências com nossos clientes para que cresçamos juntos.</p>
        <p className='content text-cinzaSubTitle text-base mb-6 md:mb-0'>Nosso cotidiano é alicerçado na transparência, ética e responsabilidade, e acima de tudo somos empáticos com nossos clientes em todos os processos de atendimento!</p>
      </div>
      <button className='button bg-[#00007e] text-white mx-auto md:w-1/2 md:mt-20'>
        <AnchorLink href="#contato">Solicite um Orçamento</AnchorLink>
      </button> 
    </section>
  );
}
