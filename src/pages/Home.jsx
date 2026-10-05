import { Link } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const url = 'https://dummyjson.com/products?limit=28';
  // const url = 'https://dummyjson.com/products/category/smartphones';
 
 

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        // Correctly target the products array from dummyjson
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter products based on search input
  const filteredProducts = products.filter((pro) =>
    pro.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center py-16 px-4">

        {/* Title */}
        {/* <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Product List
        </h1> */}

        {/* Search Bar matching dark theme */}
        <div className="w-full max-w-7xl mb-12 px-2">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-600 bg-slate-800 rounded-md py-3 px-4 text-white focus:outline-none focus:border-amber-400 placeholder-gray-400 transition-colors"
          />
        </div>

        {/* Maintained Style: Products Flex Container */}
        <div className="max-w-7xl w-full mx-auto px-5 flex flex-wrap justify-center gap-6">

          {/* Product Map */}
          {filteredProducts.map((pro) => (
            <div
              key={pro.id}
              className="w-full sm:w-[calc(50%-18px)] md:w-[calc(25%-18px)] bg-white/10 rounded-xl p-4 flex flex-col items-center justify-between border border-amber-200/30 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <Link to="/ProductDetail" className="w-full">
                <div className="w-full h-80 flex items-center justify-center p-2 bg-white rounded-lg">
                  <img className="h-full object-contain" src={pro.thumbnail} alt={pro.title} />
                </div>
              </Link>
              <div className="mt-4 text-center">
                <p className="font-semibold text-white line-clamp-1">{pro.title}</p>
                <p className="text-amber-400 font-bold mt-1">$ {pro.price}</p>
              </div>
            </div>
          ))}

        </div>

        {/* Explore More Button - Moved inside the dark background wrapper */}
        <div className="mt-12 mb-4 flex justify-center">
          <Link
            className="border border-gray-400 px-8 py-3 rounded-md transition-all duration-200 hover:bg-black hover:border-amber-400 hover:text-amber-400 text-white font-medium"
            to='/product'
          >
            Explore more
          </Link>
        </div>

      </div>
    </>
  );
}

export default Home;