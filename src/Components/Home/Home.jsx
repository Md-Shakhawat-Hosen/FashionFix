import { Link, useLoaderData } from "react-router-dom";


const Home = () => {
    const brandLoaded = useLoaderData();
    console.log(brandLoaded);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                brandLoaded.map(brand => <Link to={`/brand/${brand._id}`} key={brand._id} className="shadow-lg rounded-lg">
                     <img className="w-[400px] h-[300px] rounded-lg" src={brand.photo} alt="" />
                     <h1 className="font-bold text-2xl p-3">{brand.name}</h1>
                </Link>)
            }
        </div>
    );
};

export default Home;