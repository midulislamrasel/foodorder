import MenuCard from "@/menuCard/MenuCard";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Topbar from "./components/topbar";
import Footer from "./components/footer/Footer";
import FoodHealthSection from "./components/foodHealthySection/FoodHealth";
import Event from "./components/Event/Event";
import Delivary from "./components/Delivary/Delivary";

export default function Home() {
  return (
    <>
      <Topbar></Topbar>
      <Header></Header>
      <Banner></Banner>
      <MenuCard></MenuCard>
      <FoodHealthSection></FoodHealthSection>
      <Event></Event>
      <Delivary></Delivary>
      <Footer></Footer>
    </>
  );
}
