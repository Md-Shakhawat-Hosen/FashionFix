
import { Link } from 'react-router-dom';
import sneker from '../../../public/images/snekers.jpg'
const HomeSneker = () => {
    return (
      <div className="flex flex-col md:flex-row items-center mt-12">
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">Sneakers that pave your way</h1>
          <p>Express yourself with iconic footwear from the best brands</p>
          <Link to='' >
            <button className="border-2 p-4">shop now</button>
          </Link>
        </div>
        <div className="w-3/4">
          <img className="h-[50vh] w-full" src={sneker} alt="" />
        </div>
      </div>
    );
};

export default HomeSneker;