import servicos from 'data/servicos.json';
import CardServico from './CardServico';
import styles from './Servicos.module.css';

export default function Servicos() {
  
  return (
    <section id='servicos' className='mt-32 px-6 md:px-20'>
      <p className='subtitle'>Há mais de 40 anos no mercado, somos referência na prestação de serviços contábeis, fiscais e departamento pessoal!</p>
      <h2 className='titleh2 mt-4 mb-20'>Nossos <span className='text-azulPrimario'>Serviços</span></h2>
      <div className={`lg:${styles} md:flex flex-wrap justify-between lg:justify-between`}>
        {
          servicos.map((item) => (
            <CardServico
              key={item.title}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))
        }
      </div>    
    </section>
  );
}
