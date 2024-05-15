import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems, paginationItems2, paginationItems3, paginationItems4, paginationItems5, paginationItems6 } from "../../../constants";
import Sidebarr from "../../sidebar/sidebar";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const filtered1 = paginationItems.filter((item) =>
      item && item.productName && item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filtered2 = paginationItems2.filter((item) =>
      item && item.productName && item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filtered3 = paginationItems3.filter((item) =>
      item && item.productName && item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filtered4 = paginationItems4.filter((item) =>
      item && item.productName && item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filtered5 = paginationItems5.filter((item) =>
      item && item.productName && item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filtered6 = paginationItems6.filter((item) =>
      item && item.productName && item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const combinedFiltered = filtered1.concat(filtered2, filtered3, filtered4, filtered5, filtered6);
  
    setFilteredProducts(combinedFiltered);
  }, [searchQuery])
  return (
    <div className="w-full bg-[#2F4F4F] relative">
      <div className="max-w-container mx-auto">
        <Flex style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} >
          <div style={{width: '100%', display: 'flex', justifyContent:'space-between', paddingTop: '2%',  paddingBottom: '1.3%'}}>
            <div style={{width: '15%', maxWidth: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className="gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <Sidebarr />
            <h2 style={{color: 'white', fontSize: "20px", marginBottom: '5px', fontWeight: "900" }}>პროდუქცია</h2>
            </div>
              <div style={{width: '80%', maxWidth: '600px'}} className="relative w-full h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                <input
                  className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                  type="text"
                  onChange={handleSearch}
                  value={searchQuery}
                  placeholder="Search your products here"
                />
                <FaSearch className="w-5 h-5" />
                {searchQuery && (
                  <div
                    className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                  >
                    {searchQuery &&
                      filteredProducts.map((item) => (
                        <div
                          onClick={() =>
                            navigate(
                              `/product/${item.productName
                                .toLowerCase()
                                .split(" ")
                                .join("")}`,
                              {
                                state: {
                                  item: item,
                                },
                              }
                            ) &
                            setShowSearchBar(true) &
                            setSearchQuery("")
                          }
                          key={item._id}
                          className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                        >
                          <img className="w-24" src={item.img} alt="productImg" />
                          <div className="flex flex-col gap-1">
                            <p className="font-semibold text-lg">
                              {item.productName}
                            </p>
                            <p className="text-xs">{item.color}</p>
                            <p className="text-sm">
                              ფასი:{" "}
                              <span className="text-primeColor font-semibold">
                                {item.price} ლარი
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              <Link to="/cart">
              <div className="relative">
                <FaShoppingCart style={{color: 'white', marginTop: '5px'}} />
                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-white text-black">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;