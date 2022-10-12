import mvv from 'data/missao.json';
import CardPrincipios from './CardPrincipios';

export default function Missao() {
  return (
    <section className='my-36 w-full px-6 py-8 flex flex-wrap bg-cardServicosBg lg:mt-60'>
      <h3 className='subtitle w-full mb-3 md:text-center'>Conheça a base da nossa cultura organizacional!</h3>
      <h2 className='titleh2 mb-9 w-full md:text-center'>Missão, Visão e
        <span className='text-azulPrimario'> Valores!</span>
      </h2>
      <div className='lg:flex lg:flex-row lg:justify-between'>
        {
          mvv.map((item, index) => (
            <CardPrincipios
              key={index}
              subtitle={item.subtitle}
              content={item.content}
            />
          ))
        }
      </div>
    </section>
  );
}
