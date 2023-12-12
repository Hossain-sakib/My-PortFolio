import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import RecentWorks from "../../Components/RecentWorks/RecentWorks";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <RecentWorks></RecentWorks>
        </div>
    );
};

export default Home;