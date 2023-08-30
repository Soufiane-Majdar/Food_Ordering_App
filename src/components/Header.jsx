import logo from '../logo.svg';
import "./Header.css";

export const Header = () => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className='w-full container mx-auto flex flex-wrap item-center justify-cente-between mt-0 py-2'>
                <div className="logo-wrapper ml-4 felx item-center">
                    <img width={60} src={logo} alt="logo" />
                </div>
                <div className="nav-menu-wrapper flex item-center justify-between space-x-10 ">
                    <div>Home</div>
                    <div>About</div>
                    <div>Menu</div>
                    <div>Contact</div>
                </div>
                <div className="flex item-center justify-center space-x-4 ">
                    <div>Cart</div>
                    <div>Log In</div>
                    <div>Sign Up</div>
                </div>
            </div>

        </nav>
    );
}

export default Header;