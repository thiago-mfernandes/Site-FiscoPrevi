import data from 'data/nav.json';
import { useState } from 'react';
import { Item } from 'types';
import MenuHamburguer from '../menuHamburguer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../../assets/logo-azul.png';

export default function NavBar() {

  const [menuMobileState, setMenuMobileState] = useState(false);
  const [fixedMenu, setFixedMenu] = useState(false);

  function scrollPosition(){
    scrollY > 50 
      ? setFixedMenu(true) 
      : setFixedMenu(false);
  }  

  window.addEventListener('scroll', scrollPosition);

  return (
    <nav 
      className={
        fixedMenu 
          ? 'lg:fixed lg:flex lg:items-center lg:justify-between lg:w-full lg:top-0 lg:px-20 lg:bg-navBg lg:shadow-xl z-50' 
          : 'flex items-center justify-between flex-wrap w-full absolute lg:w-full lg:flex-nowrap lg:px-20 z-50'
      }>
      <a href="#" className='w-1/2 pt-4 pl-4 pb-4 lg:w-1/5'>
        <img src={logo} alt="Logotipo FiscoPrev" />
      </a>
      <MenuHamburguer 
        menuMobileState={menuMobileState} 
        setMenuMobileState={setMenuMobileState}
      />
      
      <div className={
        menuMobileState
          ? 'w-full absolute top-[68px] bg-slate-200 transition-all translate-y-1 ease-in-out delay-200'
          : 'w-full opacity-0 translate-y-0 transition-all lg:flex lg:w-full lg:opacity-100 '
      }>
        <ul className='flex flex-col w-full justify-center lg:flex-row'>
          {
            data.map((item: Item, index) => (
              <li 
                onClick={() => setMenuMobileState(false)}
                key={index} 
                className={fixedMenu 
                  ? 'w-full h-12 text-center p-3 text-white flex justify-center opacity-70 hover:text-cinzaSubTitle  duration-300 ease-in-out border-b border-slate-300 last-of-type:border-none `transition={height} ease-in-out delay-500` lg:border-none lg:hover:border-b lg:hover:border-cinzaSubTitle lg:transition-all lg:duration-200 lg:ease-in-out' 
                  : 'w-full h-12 text-center p-3 text-azulPrimario flex justify-center opacity-70 hover:text-cinzaSubTitle  duration-300 ease-in-out border-b border-slate-300 last-of-type:border-none `transition={height} ease-in-out delay-500` lg:border-none lg:hover:border-b lg:hover:border-cinzaSubTitle lg:text-white lg:transition-all lg:duration-200 lg:ease-in-out'}
              >
                <AnchorLink className='w-full text-center lg:text-end' href={item.href}>{item.title}</AnchorLink>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
