import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import RecentWorks from "../../Components/RecentWorks/RecentWorks";
import SendEmail from "../../Components/SendEmail/SendEmail";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <RecentWorks></RecentWorks>
            <SendEmail></SendEmail>
        </div>
    );
};

export default Home;