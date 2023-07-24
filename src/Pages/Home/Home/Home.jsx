import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import UniversityCard from "../UniversityCard/UniversityCard";


const Home = () => {
    return (
        <div className="bg-orange-50">
          <Banner/>
          <UniversityCard/>
          <Education/>
        </div>
    );
};

export default Home;