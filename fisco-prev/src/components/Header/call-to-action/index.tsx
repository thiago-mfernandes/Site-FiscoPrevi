export default function CallToAction() {
  return (
    <div className='bg-azulPrimario p-6 flex flex-col justify-center'> {/* div verde */}
      <div className='flex flex-col justify-center'> {/* div com o subtitulo e content */}
        <h3 className='text-cinzaBg w-full text-2xl text-center opacity-80 my-2'>Você precisa falar conosco agora?</h3>
        <p className='text-cinzaBg w-full text-justify opacity-80 my-2'>Acesse nossas redes sociais ou envie um email pelo formulário clicando no botão abaixo.</p>
      </div>
      <button className='button my-4'>Enviar Email</button>
    </div>
  );
}
