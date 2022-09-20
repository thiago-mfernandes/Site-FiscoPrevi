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

        {/* informacoes com paralaxe -->COMPONENTE<-- */}
        <div>
          <h3>subtitule</h3>
          <h2>Our solutions for your
            <span>business growth</span>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique a sunt assumenda quam laboriosam magni sint modi alias optio iusto quaerat culpa ducimus, tenetur nisi eaque soluta placeat, saepe reiciendis?</p>
        </div>
      </section>
      {/* fim do Servicos*/}
    </>
  );
}
