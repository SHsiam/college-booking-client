import { Link } from "react-router-dom";


const CollegeCard = ({college}) => {
    const{_id,picture,history,name,date}=college;
    return (
        <div>
            <div className="card w-full bg-orange-200 h-96 shadow-xl my-2 ">
  <figure><img src={picture}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge bg-orange-100 w-28">{date}</div>
    </h2>
    <p>{history}</p>
    <div className="card-actions justify-between">
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
</div>
<Link to={`/college/${_id}`}>
      <div className="btn  bg-orange-500 btn-outline hover:bg-orange-800 text-orange-50">Details</div>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CollegeCard;