import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Admission = () => {
    const {user} = useContext(AuthContext);
    const handleApplication = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const collegename = form.collegename.value;
        const subject = form.subject.value;
        const email = user?.email;
        const phone = form.phone.value;
        const address = form.address.value;
        const dateofbirth = form.dateofbirth.value;
        const image = form.image.value;
        const submitApplication={
            customerName:name,
            name:collegename,
            sub_category:subject,
            email:email,
            phone:phone,
            address,
          dateofbirth:dateofbirth,
            image:image,
            
        }

        console.log(submitApplication);

        fetch('https://college-booking-server-mdshiam4-gmailcom.vercel.app/admission/', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(submitApplication)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Admission Submitted')
            }
        })

    }
    
    return (
        <div className="bg-orange-50 min-h-screen px-4 text-orange-950 font-bold">
             <h2 className="text-5xl text-center py-8 ">Admission Now</h2>
              <form onSubmit={handleApplication} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">College name</span>
                    </label>
                    <input type="text" name="collegename" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input type="text" name="subject" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" name="phone" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" name="address" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">date of birth </span>
                    </label>
                    <input type="text" name="dateofbirth" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" defaultValue={user?.photoURL} name="image" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6 w-96 ">
                <input className="btn  bg-orange-500 hover:bg-orange-800 text-orange-50" type="submit" value="submit" />
            </div>
        </form>
        </div>
    );
};

export default Admission;