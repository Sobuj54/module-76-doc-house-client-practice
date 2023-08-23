import { Helmet } from "react-helmet-async";
import Banner from "../../../Shared/Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import ExpertDocs from "../ExpertDocs/ExpertDocs";
import Info from "../Info/Info";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Doc House | Home</title>
      </Helmet>
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
