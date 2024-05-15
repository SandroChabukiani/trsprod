import React, { useState } from "react";
import { Pagination5 } from "../../components/pageProps/shopPage/Pagination";

const Keramograniti = () => {
  const [itemsPerPage, setItemsPerPage] = useState(48);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <h1 style={{fontSize: "1em", fontWeight: '600',color: 'gray' , padding: '2% 1%', textDecoration: 'underline  gray', textUnderlineOffset: '5px', letterSpacing: '1.3px'}} >
              პროდუქცია <span style={{letterSpacing: '4px'}}> > </span> კერამიკა <span style={{letterSpacing: '4px'}}> > </span> 
              <span style={{color: 'black', fontWeight: '700'}}>კერამოგრანიტი</span> 
            </h1>

      {/* <Breadcrumbs title="Products" /> */}
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        {/* <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div> */}
        <div className="w-full mdl:w-[90%] lgl:w-[95%] h-full flex flex-col gap-10">
          {/* <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} /> */}
          <Pagination5 itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Keramograniti;
