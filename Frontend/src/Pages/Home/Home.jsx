import Header from "../../Components/Header/Header";
import "./Home.css";
import AppDownload from "../../Components/AppDownload/AppDownload";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AppDownload />
    </div>
  );
};

export default Home;
