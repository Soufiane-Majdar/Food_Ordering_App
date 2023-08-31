
import logo from '../assets/images/foody.png';
import cartIcon from '../assets/icons/cart.svg';
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
                <div className="logo-wrapper ml-4 felx item-center">
                    <Link to="/" className='taggleColor text-white no-underline hover:no_underline font-bold text-2xl lg:text-4xl'>
                        <img src={logo} alt="logo" className='w-40 h-40 object-cover' /></Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10 ">
                    <Link to="/" className='text-xl'>Home</Link>
                    <Link to="/menu" className='text-xl'>Menu</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/cart" className='text-xl'>
                        <img src={cartIcon} alt="cart" srcset="" width={20} />
                    </Link>
                    <Link to="/login" className='text-xl'>Log In</Link>
                    <Link to="/register" className='text-xl'>Sign Up</Link>
                </div>
            </div>

        </nav>
    );
}

export default Header;