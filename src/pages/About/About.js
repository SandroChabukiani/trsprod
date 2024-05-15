import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="ჩვენს შესახებ" />
      <div className="pb-10">
        <h1 style={{width: '80%', maxWidth: '800px'}} className=" text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">EUROWOOD</span>{" "}
          -ი გახლავთ მსხვილი ბელორუსული მწარმოებლების წარმომადგენელი საქართველოში. ჩვენს მიერ იმპორტირებული პროდუქცია აკმაყოფილებს ხარისხის ყველა საერთაშორისო სტანდარტს და გამოირჩევა გონივრული ღირებულებით. ჩვენი მუშაობის სფერო გახლავთ: ხის მასალა, კერამიკა და სამშენებლო - სარემონტო მასალა. ჩვენი მიზანია მაქსიმალური კომფორტის შექმნა მომხმარებელისათვის, ამიტომ გარდა მაღალი ხარისხის პროდუქციისა რომლებსაც ჩვენ გთავაზობთ მისაწვდომი ფასებში , ჩვენ ასევე გთავაზობთ სხვადასხვა სახის მომსახურებას: ხის მასალის ზომებზე დაჭრას, მიწოდების სერვისს, უფასო კონსულტაციას და სხვა.
 <br/>
ევროვუდთან თანამშრომლობის შემთქვევაში თქვენ ისარგებლებთ:
<br/>
- პროდუქციის უწყვეტი მიწოდების სერვისით
<br/>
- გარანტირებულად მაღალი ხარისხის პროდუქციით
<br/>
- სტაბილური, პარტნიორებისთვის განკუთვნილი ფასებით
<br/>
- ადგილზე კვალიფიციური კონსულტაციით და მომსახურებით
<br/>
ჩვენ ვიძლევით გარანტიას ყველა პროდუქტზე, რომელსაც გაწვდით!
<br />
<br />
<span className="text-primeColor font-semibold text-lg">კონტაქტი: +995 595 077 011; 511 19 99 95</span>{" "}
<br />
<span className="text-primeColor font-semibold text-lg">თბილისი, ხოშარაულის N29, სავაჭრო ცენტრი "აშენდი", საწყობი 44s
</span>{" "}

        </h1>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            მთავარი გვერდი
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
