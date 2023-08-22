import Banner from "../../../Shared/Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import ExpertDocs from "../ExpertDocs/ExpertDocs";
import Info from "../Info/Info";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Info></Info>
      <Reviews></Reviews>
      <ExpertDocs></ExpertDocs>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
