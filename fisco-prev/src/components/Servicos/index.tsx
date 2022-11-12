import servicos from 'data/servicos.json';
import CardServico from './CardServico';
import styles from './Servicos.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Servicos() {
  
  return (
    <section id='servicos' className='mt-32 px-6 md:px-20 flex-col'>
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
        <button className='button bg-[#00007e] text-white mx-auto md:w-1/2'>
          <AnchorLink href="#contato">Solicite um Orçamento</AnchorLink>
        </button>   
      </div> 
    </section>
  );
}
