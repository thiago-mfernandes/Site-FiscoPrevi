import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import logo from '../../assets/logo2.png';

export default function Footer() {
  return (
    <section className='padding-[80px 0px 20px 0px] bg-azulFooter px-6 py-10 w-full flex flex-col mt-16 md:px-16 lg:flex-row lg:flex-wrap'> 

      <div className='flex flex-col md:flex-row md:justify-between lg:flex-row lg:w-full'> 

        {/* endereco */}
        <div className='flex flex-col border-neutral-700 mb-8 pb-8 md:w-[70%] lg:w-1/2 lg:border-none'>
          <img 
            src={logo} 
            alt="Logotipo FiscoPrev" 
            className='w-24 mb-8'
          />
          <p className='content text-cinzaBg w-full mb-8 text-base'>
            Especialistas em Serviços de Contabilidade, 
            <br/>Fiscal e Departamento Pessoal.
          </p>

          <h3 className='titleh3 text-start lg:mt-2 lg:mb-6'>Redes sociais</h3>
          <div className='flex flex-row w-full h-fit'>
            <a 
              href='https://www.facebook.com/fiscoprevi' 
              target='_blank' 
              rel='noreferrer'
            >
              <BsFacebook className='text-cinzaBg text-3xl mr-4 hover:text-azulTerciario transition-all duration-200 ease-in-out'/>
            </a>
            <a 
              href='https://www.instagram.com/fiscoprevi/'
              target='_blank' 
              rel='noreferrer'
            >
              <BsInstagram className='text-cinzaBg text-3xl mr-4 hover:text-azulTerciario transition-all duration-200 ease-in-out'/>
            </a>
            <a 
              href='https://wa.me/551934345600'
              target='_blank' 
              rel='noreferrer'
            >
              <BsWhatsapp className='text-cinzaBg text-3xl mr-4 hover:text-azulTerciario transition-all duration-200 ease-in-out'/>
            </a>
          </div>
        </div>

        {/* maps */}
        <div className='flex flex-col border-neutral-700 mb-8 pb-8 md:w-[70%] lg:w-1/2 lg:border-none lg:items-end'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3680.1963098783067!2d-47.6302174!3d-22.7209437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631b9baa83865%3A0x71100ce9a39694f8!2sR.%20Napole%C3%A3o%20Laureano%2C%20308%20-%20Vila%20Independencia%2C%20Piracicaba%20-%20SP%2C%2013418-160!5e0!3m2!1spt-BR!2sbr!4v1667927732448!5m2!1spt-BR!2sbr" 
            width="400" 
            height="200" 
            allow="fullscreen" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full mt-10 mb-8 md:mb-2'
          ></iframe>
          <a 
            href="https://www.google.com.br/maps/place/R.+Napole%C3%A3o+Laureano,+308+-+Vila+Independencia,+Piracicaba+-+SP,+13418-160/@-22.7209437,-47.6302174,17z/data=!4m5!3m4!1s0x94c631b9baa83865:0x71100ce9a39694f8!8m2!3d-22.7205924!4d-47.6289299"
            target='_blank'
            rel="noreferrer"
            className='w-full'
          >
            <p className='content text-cinzaBg text-base md:text-end'>
              Rua Napoleão Laureano, 308 - Vila Independência 
              <br />Piracicaba - SP 
            </p>
          </a>
          <a 
            href="mailto:fiscoprevi@fiscoprevi.com.br"
            className='content text-cinzaBg underline text-base md:text-end'
          > 
            fiscoprevi@fiscoprevi.com.br
          </a>
        </div>

      </div>
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
