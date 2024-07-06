import Header from "../../Components/Header/Header";
import "./Home.css";
import AppDownload from "../../Components/AppDownload/AppDownload";
import RomanceArrivals from "../../Components/LatestArrivals/RomanceArrivals";
import ChildrenArrivals from "../../Components/LatestArrivals/ChildrenArrivals";
import FictionArrivals from "../../Components/LatestArrivals/FictionArrivals";
import HistoryArrivals from "../../Components/LatestArrivals/HistoryArrivals";
import CookbooksArrivals from "../../Components/LatestArrivals/CookbooksArrivals";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <RomanceArrivals />
      <ChildrenArrivals />
      <FictionArrivals />
      <HistoryArrivals />
      <CookbooksArrivals />
      <AppDownload />
    </div>
  );
};

export default Home;
