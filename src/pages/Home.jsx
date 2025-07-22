import SubCatogryGrid from "../components/SubCatogryGrid";
import BannerImage from "../assets/Utils/Banner.webp";


const Home = () => {
  return (
    <div className="bg-[#ffefe0] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full py-10">
        <img
          src={BannerImage}
          alt="Shop Banner"
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover object-center rounded-b-3xl shadow-md"
        />
      </div>

      {/* Category Grid */}
      <div className="bg-white rounded-t-3xl shadow-inner">
        <SubCatogryGrid />
      </div>
    </div>
  )
}

export default Home