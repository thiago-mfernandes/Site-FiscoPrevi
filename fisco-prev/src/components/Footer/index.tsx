import Form from 'components/Contato/Form';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Footer() {
  return (
    <section className='padding-[80px 0px 20px 0px] bg-cinzaFooter px-6 py-10 w-full flex flex-col mt-16'> 
      <div className='flex flex-col'>  
        <div className='flex flex-col border-b border-neutral-700 mb-8 pb-8'>
          <h2 className='titleh2 text-white mb-4 w-full'>FiscoPrev</h2>
          <p className='content text-cinzaSubTitle w-full'>Especialistas em Serviços de Contabilidade, Fiscal e Departamento Pessoal.</p>
        </div>

        <div className='flex flex-col border-b border-neutral-700 mb-8 pb-8'>
          <h3 className='titleh3 text-start'>Acesse nossas redes sociais</h3>
          <div className='flex flex-row w-full h-fit'>
            <a 
              href='https://www.facebook.com/fiscoprevi' 
              target='_blank' 
              rel='noreferrer'
            >
              <BsFacebook className='text-cinzaSubTitle text-3xl mr-4 hover:text-azulPrimario transition-all duration-200 ease-in-out'/>
            </a>
            <a 
              href='https://www.instagram.com/fiscoprevi/'
              target='_blank' 
              rel='noreferrer'
            >
              <BsInstagram className='text-cinzaSubTitle text-3xl mr-4 hover:text-azulPrimario transition-all duration-200 ease-in-out'/>
            </a>
            <a 
              href='https://wa.me/551934345600'
              target='_blank' 
              rel='noreferrer'
            >
              <BsWhatsapp className='text-cinzaSubTitle text-3xl mr-4 hover:text-azulPrimario transition-all duration-200 ease-in-out'/>
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col border-b border-neutral-700 mb-8 pb-8'>
        <AnchorLink href="#home">Home</AnchorLink>
        <AnchorLink href="#servicos">Servicos</AnchorLink>
        <AnchorLink href="#quemSomos">Quem Somos</AnchorLink>
        <AnchorLink href="#contato">Contato</AnchorLink>
      </div>

      <Form type='footer'/>
      <p className='content text-brancoBorda text-base'>&copy; Todos os Direitos Reservados</p>

      <div className='flex flex-col border-t border-neutral-700 mt-4'>
        <p className='content text-brancoBorda mt-2 text-xs'>Desenvolvido pela  
          <a 
            className='text-azulTerciario'
            href='https://corework.com.br/'
            target='_blank' 
            rel='noreferrer'
          > CoreWork</a> Soluções em Comunicação.
        </p>
      </div>
    </section>
  );
}
