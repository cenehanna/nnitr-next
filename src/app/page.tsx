import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Specialties from "@/components/home/Specialties";
import LatestNews from "@/components/home/LatestNews";
import AcademicMobility from "@/components/home/AcademicMobility";

export default function HomePage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <Hero />
        <Specialties />
        <LatestNews />
        <AcademicMobility />
      </main>
      <Footer />
      <MobileMenu variant="dark" />
    </>
  );
}
