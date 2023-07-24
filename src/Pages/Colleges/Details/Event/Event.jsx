import event1 from '../../../../assets/event/event1.jpg'
import event2 from '../../../../assets/event/event2.jpg'
import event3 from '../../../../assets/event/event3.jpg'
import event4 from '../../../../assets/event/event4.jpg'
import event5 from '../../../../assets/event/event5.jpg'
import event6 from '../../../../assets/event/event6.jpg'

const Event = () => {
    return (
        <div className='bg-orange-50 py-10 px-10'>
            <h2 className=" font-bold text-orange-950 text-center pb-8 text-5xl">
            EVENTS CALENDAR
            </h2>
        <div className="shadow-2xl bg-orange-100 mx-3 my-3">
  <div className="hero-content text-orange-950 flex-col  lg:flex-row">
    <img src={event1}/>
    <div>
      <h2 className="text-3xl font-bold pt-2">Abdul Latif Jameel Poverty Action Lab </h2>
      <p className="py-3">The Abdul Latif Jameel Poverty Action Lab (J-PAL) is a network of 145 affiliated professors from 49 universities. Our mission is to reduce poverty by...</p>
      <div className='flex justify-end'>
      <div className="badge py-2 bg-orange-200 font-bold w-28 h-8">08-01-2023</div>
      </div>
    </div>
  </div>
</div>
<div className="shadow-2xl bg-orange-100 mx-3 my-3">
  <div className="hero-content text-orange-950 flex-col  lg:flex-row">
    <img src={event2}/>
    <div>
      <h2 className="text-3xl font-bold pt-2">
Aeronautics and Astronautics </h2>
      <p className="py-3">The Abdul Latif Jameel Poverty Action Lab (J-PAL) is a network of 145 affiliated professors from 49 universities. Our mission is to reduce poverty by...</p>
      <div className='flex justify-end'>
      <div className="badge py-2 bg-orange-200 font-bold w-28 h-8">08-01-2023</div>
      </div>
    </div>
  </div>
</div>
<div className="shadow-2xl bg-orange-100 mx-3 my-3">
  <div className="hero-content text-orange-950 flex-col  lg:flex-row">
    <img src={event3}/>
    <div>
      <h2 className="text-3xl font-bold pt-2">AgeLab </h2>
      <p className="py-3">The MIT AgeLab is a multidisciplinary research program that works with business, government, and NGOs to improve the quality of life of older people and...</p>
      <div className='flex justify-end'>
      <div className="badge py-2 bg-orange-200 font-bold w-28 h-8">08-01-2023</div>
      </div>
    </div>
  </div>
</div>
<div className="shadow-2xl bg-orange-100 mx-3 my-3">
  <div className="hero-content text-orange-950 flex-col  lg:flex-row">
    <img src={event4}/>
    <div>
      <h2 className="text-3xl font-bold pt-2">
Beaver Works </h2>
      <p className="py-3">Beaver Works is a joint effort between the School of Engineering and Lincoln Laboratory. We conduct research and educational programs that strengthen and...</p>
      <div className='flex justify-end'>
      <div className="badge py-2 bg-orange-200 font-bold w-28 h-8">08-01-2023</div>
      </div>
    </div>
  </div>
</div>
<div className="shadow-2xl bg-orange-100 mx-3 my-3">
  <div className="hero-content text-orange-950 flex-col  lg:flex-row">
    <img src={event5}/>
    <div>
      <h2 className="text-3xl font-bold pt-2">
Biological Engineering </h2>
      <p className="py-3">Our departments mission is to educate leaders and generate new knowledge at the interface of engineering and biology. We are defining and leading the...</p>
      <div className='flex justify-end'>
      <div className="badge py-2 bg-orange-200 font-bold w-28 h-8">08-01-2023</div>
      </div>
    </div>
  </div>
</div>
<div className="shadow-2xl bg-orange-100 mx-3 my-3">
  <div className="hero-content text-orange-950 flex-col  lg:flex-row">
    <img src={event6}/>
    <div>
      <h2 className="text-3xl font-bold pt-2">Biophysics </h2>
      <p className="py-3">The Biophysics Program seeks to foster the training of graduate students in the application of the physical sciences and engineering to fundamental...</p>
      <div className='flex justify-end'>
      <div className="badge py-2 bg-orange-200 font-bold w-28 h-8">08-01-2023</div>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Event;