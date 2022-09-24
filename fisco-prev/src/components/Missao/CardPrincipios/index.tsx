import { ICardPrincipios } from 'types';

export default function CardPrincipios({subtitle, content}:ICardPrincipios) {
  return (
    <div className='text-center bg-white p-8 rounded-lg mb-10 lg:w-[32%]'>
      <h3 className='subtitle mb-3 text-azulPrimario'>{subtitle}</h3>
      <p className='content text-cinzaEscuro'>{content}</p>
    </div>
  );
}

