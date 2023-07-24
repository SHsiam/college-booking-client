import { useEffect, useState } from "react";
import MyCollegeCard from "./MyCollegeCard";


const MyCollege = () => {
    const [colleges,setColleges]=useState([]);
    useEffect(()=>{
        fetch('https://college-booking-server-mdshiam4-gmailcom.vercel.app/admission')
        .then(res=>res.json())
        .then(data=>setColleges(data));
    },[])
    return (
        <div className='bg-orange-50 py-10 px-10'>
             <h2 className=" font-bold text-orange-950 text-center pb-8 text-5xl">
            My Admission
            </h2>
            {
                colleges.map(college=><MyCollegeCard
                    key={college._id}
                    college={college}
                ></MyCollegeCard>)
            }
        </div>
    );
};

export default MyCollege;