import data from 'data/nav.json';
import { Item } from 'types';


export default function NavBar() {
  return (
    <nav className='px-16 py-4 bg-gray-600 flex items-center justify-between w-full'>
      <a href="#">
        <h2 className='uppercase'>FiscoPrev</h2>
      </a>
      <div className='w-1/2'>
        <ul className='flex flex-row w-full justify-end'>
          {
            data.map((item: Item, index) => (
              <li key={index} className='mr-4 text-white opacity-70 hover:text-azulPrimario transition-all duration-300 ease-in-out hover:border-b hover:border-azulPrimario'>
                <a href='#'>{item.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
