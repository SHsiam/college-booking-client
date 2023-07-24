import college1 from '../../../assets/university/college1.jpg'
import college2 from '../../../assets/university/college2.jpg'
import college3 from '../../../assets/university/college3.jpg'
import college4 from '../../../assets/university/college4.jpg'
import college5 from '../../../assets/university/college5.jpg'
import college6 from '../../../assets/university/college6.jpg'

const UniversityCard = () => {
    return (
        <div className='px-4 py-16 '>
            <h1 className='text-center text-orange-950 font-bold text-5xl'>Most Popular University</h1>        
        <div className="grid grid-cols-3  gap-4 mt-16  ">

<div className="hero h-96 rounded-lg" style={{backgroundImage: `url(${college1})`}}>
        <div className="hero-overlay opacity-30 bg-orange-950"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-orange-50  font-bold">Massachusetts Institute of Technology</h1>
          </div>
        </div>
      </div>

      <div className="hero h-96 rounded-lg" style={{backgroundImage: `url(${college2})`}}>
        <div className="hero-overlay opacity-30 bg-orange-950"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-orange-50  font-bold">Harvard University</h1>
          </div>
        </div>
      </div>

      <div className="hero h-96 rounded-lg" style={{backgroundImage: `url(${college3})`}}>
        <div className="hero-overlay opacity-30 bg-orange-950"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-orange-50  font-bold">Stanford University</h1>
          </div>
        </div>
      </div>

      <div className="hero h-96 rounded-lg" style={{backgroundImage: `url(${college4})`}}>
        <div className="hero-overlay opacity-30 bg-orange-950"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-orange-50  font-bold">University of Oxford</h1>
          </div>
        </div>
      </div>

      <div className="hero h-96 rounded-lg" style={{backgroundImage: `url(${college5})`}}>
        <div className="hero-overlay opacity-30 bg-orange-950"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-orange-50  font-bold">California Institute of Technology</h1>
          </div>
        </div>
      </div>

      <div className="hero h-96 rounded-lg" style={{backgroundImage: `url(${college6})`}}>
        <div className="hero-overlay opacity-30 bg-orange-950"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-orange-50  font-bold">Cambridge University</h1>
          </div>
        </div>
      </div>
</div>
</div> 
    );
};

export default UniversityCard;