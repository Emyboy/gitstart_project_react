import { FiAlignLeft, FiSearch } from "react-icons/fi";
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg container shadow header ">

            <FiAlignLeft className='grow' />
            {/* <h2 className='ml-3'>Finder</h2> */}
            <input/>
            <FiSearch className='grow' />
        </nav>
    )
}

export default Header;

