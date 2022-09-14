import CallToAction from './call-to-action';
import FixedBar from './fixedBar';
import Landing from './landing';
import NavBar from './navBar';

export default function Header() {
  return (    
    <section className='bg-blue'> {/* header -->COMPONENTE<-- */}
      <FixedBar />
      <NavBar />
      <Landing />
      <CallToAction />
    </section>  
  );
}
