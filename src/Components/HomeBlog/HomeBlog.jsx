

const HomeBlog = () => {
    return (
      <div>
        <div className="bg-slate-100">
          <h1 className="bg-yellow-500 py-10 px-7 text-4xl font-bold text-center">
            Everything You Need to Know About Buying Sneakers
          </h1>
          <p className="bg-yellow-500 py-10 px-7 font-bold text-center mt-7">
            Old-school is the new cool with a pair of rare or limited edition
            deadstock collectible sneakers. You do not need to be walking around
            with a receipt to prove that you own a pair of Yeezy Boost 350,
            Jordan 1, Nike Sacai, or adidas Ultraboost sneakers. Get on eBay to
            buy DS and OG sneakers that may only have been worn once.
          </p>
        </div>

        <div>
          <h1 className="text-center font-bold text-3xl my-10">Our Collection</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <img
                className="w-[400px] h-[400px] rounded-lg"
                src="https://i.ibb.co/dc27HDP/addidas-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[400px] h-[400px] rounded-lg"
                src="https://i.ibb.co/q5YSPM3/g-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[400px] h-[400px] rounded-lg"
                src="https://i.ibb.co/k50Fdnj/nike-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[400px] h-[400px] rounded-lg"
                src="https://i.ibb.co/8Dtv6SD/zara-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[400px] h-[400px] rounded-lg"
                src="https://i.ibb.co/7VXJdLR/levis-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[400px] h-[400px] rounded-lg"
                src="https://i.ibb.co/WcvfxBK/nike-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeBlog;