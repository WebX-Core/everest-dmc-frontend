import Banner from "../Components/home/hero";
import About from "../Components/home/about";
import WeOffer from "../Components/home/weoffer";
import TeamProcess from "../Components/home/teamprocess";
import ContactForm from "../Components/home/contact";
import TravelPackages from "../Components/home/services";
import ImageGridDivider from "../Components/home/Divider";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <WeOffer />
      <TravelPackages />
      <TeamProcess />
      <ImageGridDivider image="https://cdn.pixabay.com/photo/2018/04/22/18/38/mountain-3341919_1280.jpg" />
      <ContactForm />
    </>
  );
};

export default Home;