import './HomePage.scss';
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/fondo.jpg';


const styles = { 
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '0px',
    height: '680px',
    marginTop: '-19px',
};

export default function HomePage() {
    return (
        <div style={styles}>
            <div id='titulo'>
                <h1 className='sun'>SUNSHINE</h1>
            </div>
            <div id='titulo2'>
                <h1 className='sun2'>CLUB</h1>
            </div>
        </div>
    );
}
