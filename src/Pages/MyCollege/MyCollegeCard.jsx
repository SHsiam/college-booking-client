

const MyCollegeCard = ({college}) => {
    const{name,image}=college;
    return (
        <div>
                   <div className="shadow-2xl bg-orange-100 mx-3 my-3">
  <div className="hero-content text-orange-950 flex-col  lg:flex-row">
    <img src={image}/>
    <div>
      <h2 className="text-3xl font-bold pt-2">{name} </h2>
      <div className='flex justify-end mt-4'>
      <div className="badge py-4 bg-orange-200 font-bold w-28 h-8">Details</div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyCollegeCard;