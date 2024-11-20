import Image from 'next/image';
import topImg from '../../asstes/images/head.jpeg';

const MainPage = () => {
    return ( 
        <header>
          <Image src={topImg} alt='header photo' quality={100} className="img-fluid w-100" />
        </header>
     );
}
 
export default MainPage;