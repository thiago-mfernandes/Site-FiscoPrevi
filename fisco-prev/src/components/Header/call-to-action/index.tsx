import AnchorLink from 'react-anchor-link-smooth-scroll';

//iniciar o responsivo

export default function CallToAction() {

  return (
    <div className='bg-azulPrimario p-6 flex flex-col justify-center md:px-20 md:flex-row md:justify-between md:items-center'>
      <div className='flex flex-col justify-center md:justify-between md:w-[72.5%]'>
        <h3 className='text-cinzaBg w-full text-2xl text-center opacity-80 my-2 md:text-start'>Quer falar com a gente?</h3>
        <p className='text-cinzaBg w-full text-justify opacity-80 my-2 md:text-start'>Clique no botão ao lado! Responderemos sua solicitação o mais breve possível.</p>
      </div>      
      
      <a 
        href='https://wa.me/551934345600'
        target='_blank' 
        rel='noreferrer' 
        className='bg-white w-1/4 flex justify-center items-center h-10 border-none rounded-lg text-azulPrimario shadow-md hover:shadow-2xl transition-all ease-in-out delay-200'
      >
        Fale conosco
      </a>
    </div>
  );
}
