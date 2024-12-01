import '../App.css';
import Carousel from '../components/Carousel';
import PlanetCards from '../components/PlanetCards';
import carouselData from '../data/carouselData';

function Home() {
        return (
        <div className="App">
            <Carousel items={carouselData}/>
            <PlanetCards />
        </div>
    );
}

export default Home;
