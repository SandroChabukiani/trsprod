import React, { useState } from "react";
import { Pagination3, Pagination7 } from "../../components/pageProps/shopPage/Pagination";

const Sayalibe = () => {
  const [itemsPerPage, setItemsPerPage] = useState(48);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
    <div className="max-w-container mx-auto px-4">
      <div style={{marginTop: '60px'}} className="xl:-mt-10 -mt-7">
        {/* <Breadcrumbs title="" prevLocation={prevLocation} /> */}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
        <div className="h-full xl:col-span-2">
          <img
            className="w-full h-full "
            src="https://i.imgur.com/2oOR2D3.png"
          />
        </div>
        <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">ლამინირებული ფანერა</h2>
            <p className="text-2xl font-semibold">
              95 ლარი
            </p>
            <hr />
            <p className="text-base text-gray-600">მისი ზომებით, ასევე ტექნიკური მახასიათებლებით. ტექნიკური მახასიათებლები: ჩვენი ლამინირებული ფანერას
             აქვს მაღალი წებოვნების და ფენოლის გარსის ხარისხი რაც ნიშნავს, რომ ფანერის ერთი და იგივე ფილის განმეორებითი გამოყენება არ დააქვეითებს მონოლითური
              კონსტრუქციების ხარისხს და სათანადო გამაგრების შემთხვევაში არ გამოიწვევს ზედაპირულ ტალღებს.
            </p>
            <p className="text-base text-green-600 font-medium">მარაგშია</p>
            <p className="font-medium text-lg">
              <span className="font-normal">ზომა: 1250 x 2500 x 18მმ</span> 
            </p>
           
          </div>
        </div>
      </div>
      <div>
        <div className=" space-x-4  pt-4">
            <button className="bg-blue-500 text-white py-2 px-4  focus:outline-none">ტექნიკური მახასიათებლები</button>
        </div>
        <div className="my-4">
          <div>
            <table className="table-auto w-full">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2 font-semibold">ფილის ფორმატი</td>
                  <td className="border px-4 py-2">1250 x 2500 x 18მმ</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2 font-semibold">ხარისხი</td>
                  <td className="border px-4 py-2">	1/1</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2 font-semibold">სიმკვრივე</td>
                  <td className="border px-4 py-2">750 კგ/მ3</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2 font-semibold">ზედაპირი	</td>
                  <td className="border px-4 py-2">125 გრ/მ2</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2 font-semibold">ტენიანობა</td>
                  <td className="border px-4 py-2">	5-7%</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2 font-semibold">შეკვრაში</td>
                  <td className="border px-4 py-2">23 ცალი ფილა</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2 font-semibold">გამოყენების ციკლი</td>
                  <td className="border px-4 py-2">60 +</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2 font-semibold">შენახვის ვადა</td>
                  <td className="border px-4 py-2">5 წელი</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="my-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={activeTab === tab.id ? "" : "hidden"}
            >
              {tab.id === "Fiche Technique" && productInfo.ficheTech ? (
                <div>
                  <table className="table-auto w-full">
                    <tbody>
                      {productInfo.ficheTech.map((row) => (
                        <tr key={row.label} className="bg-gray-100">
                          <td className="border px-4 py-2 font-semibold">
                            {row.label}
                          </td>
                          <td className="border px-4 py-2">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="my-4 flex justify-end">
                    
                  </div>
                </div>
              ) : (
                <p>{tab.content}</p>
              )}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  </div>
  );
};

export default Sayalibe;
