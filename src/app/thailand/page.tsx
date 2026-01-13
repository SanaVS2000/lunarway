import Navbar from "../../../components/navbar"
import HeroSection from "../../../components/t-hero"
import PackageDetails from "../../../components/t-pack-details"
import Foot from "../../../components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PackageDetails />
      <Foot />
    </> 
  )
}
