import data from 'data/nav.json';
import { useState } from 'react';
import { Item } from 'types';
import MenuHamburguer from '../menuHamburguer';

export default function NavBar() {

  const [menuMobileState, setMenuMobileState] = useState(false);

  return (
    <nav className='flex items-center justify-between flex-wrap w-full absolute'>
      <a href="#" className='w-1/2 pt-4 pl-4 pb-4'>
        <h2 className='uppercase text-white text-xl'>FiscoPrev</h2>
      </a>
      <MenuHamburguer menuMobileState={menuMobileState} setMenuMobileState={setMenuMobileState}/>
      
      <div className={
        menuMobileState
          ? 'w-full absolute top-[68px] bg-slate-200 transition-all translate-y-1 ease-in-out delay-200'
          : 'w-full opacity-0 translate-y-0 transition-all'
      }> {/* esta div contem a lista de links*/}
        <ul className='flex flex-col w-full justify-center'>
          {
            data.map((item: Item, index) => (
              <li 
                onClick={() => setMenuMobileState(false)}
                key={index} 
                className='w-full h-12 text-center p-3 text-azulPrimario flex justify-center opacity-70 hover:text-azulPrimario  duration-300 ease-in-out border-b border-slate-300 last-of-type:border-none `transition={height} ease-in-out delay-500`'
              >
                <a className='w-full text-center' href='#'>{item.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
