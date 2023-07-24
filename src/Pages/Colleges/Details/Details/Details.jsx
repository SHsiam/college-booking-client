import { Link, useLoaderData } from "react-router-dom";
import Sports from "../Sports/Sports";


const Details = () => {
    const details=useLoaderData();
    const{picture,history,name,}=details;
    return (
        <div className=" bg-orange-50 ">
        <div className="w-full  shadow-xl py-8 ">
        <h1 className='text-center text-orange-950 font-bold text-5xl'>{name}</h1>
<figure className="rounded-lg " ><img className='w-full px-4 pt-8 rounded-lg" 'src={picture}alt="Shoes" /></figure>
<div className="card-body">
<p className="font-semibold text-justify mt-4 text-orange-950">{history}</p>
<Sports></Sports>
<div className="card-actions justify-between pt-20">
<Link to={'/event'}>
      <div className="btn  bg-orange-500 btn-outline hover:bg-orange-800 text-orange-50">Event</div>
      </Link>
     
      <Link to={'/admissionprocess'}>
      <div className="btn  bg-orange-500 btn-outline hover:bg-orange-800 text-orange-50">Admission Process</div>
      </Link>
</div>
</div>
</div>
    </div>
    );
};

export default Details;