import SubCatogryGrid from "../components/SubCatogryGrid";

const Home = () => {
  const BannerImage = "/assets/Utils/Banner.webp";

  return (
    <div className="bg-[#ffefe0] min-h-screen overflow-x-hidden">
      {/* Full Width Hero Banner WITH spacing */}
      <div className="w-screen my-10 overflow-hidden pt-6 sm:pt-10 pb-6 sm:pb-10">
        <img
          src={BannerImage}
          alt="Shop Banner"
          className="w-full object-cover object-center"
        />
      </div>

      {/* Category Grid */}
      <div className="bg-white rounded-t-3xl shadow-inner -mt-6 sm:-mt-10 md:-mt-12 z-10 relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <SubCatogryGrid />
      </div>
    </div>
  );
};

export default Home;
