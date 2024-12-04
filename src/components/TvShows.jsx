import CentralPage from "./CentralPage";
import Footer from "./Footer";

const TvShows = ({ movie }) => {
  return (
    <>
      <CentralPage movie={movie} />
      <Footer />
    </>
  );
};
export default TvShows;
