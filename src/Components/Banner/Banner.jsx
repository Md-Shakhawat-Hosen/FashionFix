
import bgLogo from '../../../public/images/bannerHouse.jpg'
const Banner = () => {
    const bg = {
      height: "80vh",
      backgroundImage: `url('${bgLogo}')`,
      backgroundSize: "cover",
      backgroundPosition: "center", // Center the background image
      position: "relative",
    };
    return (
      <div style={bg} className="mb-10 text-white">
        <div className="flex flex-col lg:flex-row items-center h-[80vh]">
          <div className="flex-1 pl-6 space-y-4">
            <h1 className="font-bold text-3xl">
              Discover Limitless Possibilities
            </h1>
            <p>
              Unleash innovation and explore a world of endless opportunities
              with [FashionHouse]. Our commitment to excellence and cutting-edge
              solutions empowers you to redefine boundaries. Join us on a
              journey where creativity meets functionality, and together, we will
              shape the future.
            </p>
            <p className='text-cyan-300'>
              Feel free to let me know if you have a specific theme or purpose
              in mind, and I can tailor the header and description accordingly!
            </p>
          </div>
          <div className='flex-1'></div>
        </div>
      </div>
    );
};

export default Banner;
