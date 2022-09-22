import AnchorLink from 'react-anchor-link-smooth-scroll';

//iniciar o responsivo

export default function CallToAction() {

  return (
    <div className='bg-azulPrimario p-6 flex flex-col justify-center md:px-20 md:flex-row md:justify-between md:items-center'>
      <div className='flex flex-col justify-center md:w-3/5'>
        <h3 className='text-cinzaBg w-full text-2xl text-center opacity-80 my-2'>Você precisa falar conosco agora?</h3>
        <p className='text-cinzaBg w-full text-justify opacity-80 my-2'>Acesse nossas redes sociais ou envie um email pelo formulário clicando no botão abaixo.</p>
      </div>
      <AnchorLink href='#contato'>
        <button className='button my-4'>Enviar Email</button>
      </AnchorLink>
    </div>
  );
}
