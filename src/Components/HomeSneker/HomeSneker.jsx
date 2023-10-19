
import { Link } from 'react-router-dom';
import sneker from '../../../public/images/sne.jpg'
const HomeSneker = () => {
    return (
      <div className="flex flex-col md:flex-row items-center mt-12 gap-4">
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">Sneakers that pave your way</h1>
          <p>Express yourself with iconic footwear from the best brands</p>
          <Link>
            <button className="border-2 border-yellow-600 p-4 mt-4">shop now</button>
          </Link>
        </div>
        <div className="lg:w-3/4">
          <img className="h-[50vh] w-full" src={sneker} alt="" />
        </div>
      </div>
    );
};

export default HomeSneker;