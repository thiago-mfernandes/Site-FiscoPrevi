import servicos from 'data/servicos.json';
import CardServico from './CardServico';

export default function Servicos() {
  
  return (
    <>
      <section className='mt-32 px-6'>
        <h2 className='titleh2'>Nossos <span className='text-azulPrimario'>Serviços</span></h2>
        <p className='subtitle mt-4 mb-20'>Há mais de 40 anos no mercado, somos referência na prestação de serviços contábeis, fiscais e departamento pessoal!</p>
        {
          servicos.map((item, index) => (
            <CardServico 
              key={index} 
              icon={item.icon} 
              title={item.title} 
              content={item.content}              
            />
          ))
        }     
      </section>
    </>
  );
}
