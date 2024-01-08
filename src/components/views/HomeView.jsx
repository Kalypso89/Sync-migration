import { TestimonialsCards } from "../cards/TestimonialsCards";
import testimonials from "../../contents/testimonials";
import HeaderOrganism from "../organisms/header/HeaderOrganism";
import HomeOrganism from "../organisms/home/HomeOrganism";
import DescriptionOrganism from "../organisms/description/DescriptionOrganism";
import FeaturesOrganism from "../organisms/features/FeaturesOrganism";
import ScreensOrganism from "../organisms/screens/ScreensOrganism";
import FooterOrganism from "../organisms/footer/FooterOrganism";

export function HomeView() {

    return (
        <>
            <HeaderOrganism/>
            <main>
                <HomeOrganism/>
                <DescriptionOrganism/>
                <FeaturesOrganism/>
                <ScreensOrganism/>
            </main>
            <FooterOrganism/>     
        </>
    );
  }
  