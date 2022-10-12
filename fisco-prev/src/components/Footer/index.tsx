import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
//import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <section className='padding-[80px 0px 20px 0px] bg-cinzaFooter px-6 py-10 w-full flex flex-col mt-16 md:px-16 lg:flex-row lg:flex-wrap'> 

      <div className='flex flex-col md:flex-row md:justify-between lg:flex-row lg:w-full'> 

        <div className='flex flex-col border-neutral-700 mb-8 pb-8 md:w-[70%] lg:w-1/2 lg:border-none'>
          <img src={logo} alt="Logotipo FiscoPrev" className='w-1/4 mb-8'/>
          <p className='content text-cinzaSubTitle w-full'>Especialistas em Serviços de Contabilidade, Fiscal e Departamento Pessoal.</p>
        </div>

        <div className='flex flex-col border-neutral-700 mb-8 pb-8 md:w-[25%] lg:w-1/2 lg:border-none lg:items-end'>
          <h3 className='titleh3 text-start md:text-end lg:mt-2 lg:mb-6 lg:text-end'>Redes sociais</h3>
          <div className='flex flex-row w-full h-fit md:justify-end lg:justify-end'>
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

      {/**
       
      <div className='md:flex md:flex-col md:items-center md:mb-20 lg:flex-row lg:w-1/2 lg:items-start'>
        <div className='flex flex-col border-b border-neutral-700 pb-8 md:w-[100%] md:flex-row lg:flex-col lg:border-none'>
          <h3 className='titleh3 text-start mb-6 md:text-center'>Links</h3>
          <AnchorLink className='content text-cinzaSubTitle md:text-center' href="#home">Home</AnchorLink>
          <AnchorLink className='content text-cinzaSubTitle md:text-center' href="#servicos">Servicos</AnchorLink>
          <AnchorLink className='content text-cinzaSubTitle md:text-center' href="#quemSomos">Quem Somos</AnchorLink>
          <AnchorLink className='content text-cinzaSubTitle md:text-center' href="#contato">Contato</AnchorLink>
        </div>        
      </div>

       */}
      

      <p className='content text-brancoBorda text-sm md:text-center lg:w-full'>&copy; Todos os Direitos Reservados</p>
      <div className='flex flex-col border-t border-neutral-700 mt-4 md:text-center lg:w-full'>
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
