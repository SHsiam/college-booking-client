import { Link } from "react-router-dom";
import logo from '../../../public/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const NavMenu = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }

    const navOption = <>
        <li ><Link to='/'>Home</Link></li>
        <li>
            <Link to='/college'>Colleges</Link>

        </li>
        <li ><Link to='/admission'>Admission</Link></li>
        <li ><Link to='/mycollege'>My College</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-orange-500 ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="lg:hidden h-full w-full  ">
                            <svg xmlns="/public/logo.png" className="h-20 w-20 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow text-orange-50 rounded-box w-52 font-bold">
                            {navOption}
                        </ul>
                    </div>
                    <Link to='/' className="w-full h-20 ms-4">
                        <img className="h-full" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-orange-50">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end flex-none gap-8">
                <div className="form-control text-black">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    {
            user ?<span className='text-primary'>
            <div className="avatar">
              <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 inline-block w-10 h-10 ">
                <img title={user.displayName}
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            </div>
            <button onClick={handleLogOut} className="px-2 text-orange-50 font-bold">Logout</button></span> :  <Link className='text-decoration-none text-orange-50 font-bold' to='/login'>Login</Link>
        }
                </div>
            </div>
        </div>
    );
};

export default NavMenu;