import HeroSection from "../components/HeroSection";
import MovieRow from "../components/MovieRow";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MovieRow rowId="1" genre="Top Rated" url={requests.requestTopRated} />
      <MovieRow rowId="2" genre="Popular" url={requests.requestPopular} />
      <MovieRow rowId="3" genre="Trending" url={requests.requestTrending} />
      <MovieRow rowId="4" genre="Upcoming" url={requests.requestUpcoming} />
    </div>
  );
};

export default Home;
