import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";


const College = () => {
    const [colleges,setColleges]=useState([]);
    useEffect(()=>{
        fetch('https://college-booking-server-mdshiam4-gmailcom.vercel.app/college')
        .then(res=>res.json())
        .then(data=>setColleges(data));
    },[])
    return (
        <div className="bg-orange-50">
              <div className="grid grid-cols-3  gap-2 pt-4 pl-2 pr-2  ">
               {
                colleges.map(college=><CollegeCard
                    key={college._id}
                    college={college}
                ></CollegeCard>)
            }
            </div>
        </div>
    );
};

export default College;