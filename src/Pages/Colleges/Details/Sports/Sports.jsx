import sport1 from '../../../../assets/sport/sport1.jpg';
import sport2 from '../../../../assets/sport/sport2.jpg';
import sport3 from '../../../../assets/sport/sport3.jpg';
import sport4 from '../../../../assets/sport/sport4.jpg';
import sport5 from '../../../../assets/sport/sport5.jpg';
import sport6 from '../../../../assets/sport/sport6.jpg';

const Sports = () => {
    return (
        <div className="text-orange-950">
            <h2 className=" font-bold text-orange-950 text-center text-3xl">
                All Sports
            </h2>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-1  mt-4 ">
                <div className="card w-90 bg-orange-200 text-orange-950 px-4 py-4 shadow-xl">
                    <figure className="rounded " ><img className='w-96" ' src={sport1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Baseball</h2>
                        <p className="font-semibold">Cracking the Bat: Unleashing the Thrills of Americas Favorite Game</p>
                    </div>
                </div>

                <div className="card w-90 bg-orange-200 text-orange-950 px-4 py-4 shadow-xl">
                    <figure className="rounded " ><img className='w-96" ' src={sport2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Golf</h2>
                        <p className="font-semibold">From Fairway to Tee: Discovering the Beauty of Golf</p>
                    </div>
                </div>

                <div className="card w-90 bg-orange-200 text-orange-950 px-4 py-4 shadow-xl">
                    <figure className="rounded " ><img className='w-96" ' src={sport3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Basketball</h2>
                        <p className="font-semibold">Dribble, Shoot, Score: The Thrilling World of Basketball</p>
                    </div>
                </div>

                <div className="card w-90 bg-orange-200 text-orange-950 px-4 py-4 shadow-xl">
                    <figure className="rounded " ><img className='w-96" ' src={sport4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Football</h2>
                        <p className="font-semibold">From Goal to Goal: A Journey Through Footballs Thrills and Skills</p>
                    </div>
                </div>

                <div className="card w-90 bg-orange-200 text-orange-950 px-4 py-4 shadow-xl">
                    <figure className="rounded " ><img className='w-96" ' src={sport5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Badminton</h2>
                        <p className="font-semibold">The Graceful Racket: Discovering the World of Badminton</p>
                    </div>
                </div>

                <div className="card w-90 bg-orange-200 text-orange-950 px-4 py-4 shadow-xl">
                    <figure className="rounded " ><img className='w-96" ' src={sport6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Cricket</h2>
                        <p className="font-semibold">Bat and Ball: Exploring the Strategy and Drama of Cricket</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;