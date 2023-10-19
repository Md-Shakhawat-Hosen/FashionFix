import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeBlog from "../HomeBlog/HomeBlog";
import HomeSneker from "../HomeSneker/HomeSneker";


const Home = () => {
    const brandLoaded = useLoaderData();
    return (
      <div>
        <Banner></Banner>

        <h1 className="text-center font-bold text-3xl mb-9">Our Brand</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandLoaded.map((brand) => (
            <Link
              to={`/brand/${brand._id}`}
              key={brand._id}
              className="shadow-lg rounded-lg"
            >
              <img
                className="w-[400px] h-[300px] rounded-lg"
                src={brand.photo}
                alt=""
              />
              <h1 className="font-bold text-2xl p-3">{brand.name}</h1>
            </Link>
          ))}
        </div>
        <HomeSneker></HomeSneker>

        <HomeBlog></HomeBlog>
      </div>
    );
};

export default Home;