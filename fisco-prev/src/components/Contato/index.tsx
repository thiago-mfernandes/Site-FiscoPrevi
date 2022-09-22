import Form from './Form';

export default function Contato() {

  return (
    <section id='contato' className='mt-36 w-full px-6 dlex flex-wrap text-center'>
      <h3 className='subtitle mb-3'>Você pode contar conosco para ajudá-lo</h3>
      <h2 className='titleh2 mb-9'>Preencha o
        <span className='text-azulPrimario'> Formulário</span>
      </h2>
      <p className='content text-cinzaSubTitle mb-10'>Responderemos sua solicitação o mais breve possível. Se preferir, fale conosco através das nossas redes sociais!</p>
      <Form type='' />  
    </section>
  );
}
