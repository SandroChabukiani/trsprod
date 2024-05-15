import React, { useState } from 'react';
import Product from './Product';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './sidebar.css'
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    };
  return (
    <div className='scc'>
            <div className='second'>
                <div className="container">
                    <input type="checkbox" id="check" checked={isSidebarOpen} onChange={handleSidebarToggle} />
                    <div className="nav-btn">
                        <div className="nav-links">
                        <ul>
                            <li className="nav-link" style={{ '--i': '.6s' }}>
                                <Link className='sas' to="/" onClick={handleLinkClick}>მთავარი</Link>
                            </li>
                            <li className="nav-link" style={{ '--i': '.85s' }}>
                                <a className='sas' href="#">ხის მასალა<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to='/sayalibe' onClick={handleLinkClick}>ლამინირებული ფანერა</Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <Link to="/laminati" onClick={handleLinkClick}>ლამინირებული იატაკი</Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">ფანერა<i className="fas fa-caret-down"></i></a>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <Link to="/fanera" onClick={handleLinkClick}>1/2 ხარისხი</Link>
                                                    </li>
                                                    <li className="dropdown-link" >
                                                        <Link to="/fanera23" onClick={handleLinkClick}>2/3 ხარისხი</Link>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <Link to="/fanera34" onClick={handleLinkClick}>3/4 ხარისხი</Link>
                                                    </li>
                                                    {/* <li className="dropdown-link">
                                                        <a href="#">More<i className="fas fa-caret-down"></i></a>
                                                        <div className="dropdown second">
                                                            <ul>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 1</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 2</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 3</a>
                                                                </li>
                                                                <div className="arrow"></div>
                                                            </ul>
                                                        </div>
                                                    </li> */}
                                                    {/* <div className="arrow"></div> */}
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li className="dropdown-link">
                                            <a href="#"> </a>
                                        </li> */}
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link" style={{ '--i': '1.1s' }}>
                                <a className='sas' href="#">სამშენებლო და სარემონტო<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to="/" onClick={handleLinkClick}>პროდუქცია მალე დაემატება</Link>
                                        </li>
                                        {/* <li className="dropdown-link">
                                            <a href="#">Link 2</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="#">Link 3<i className="fas fa-caret-down"></i></a>
                                            <div className="dropdown second">
                                                <ul>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 1</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 2</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">Link 3</a>
                                                    </li>
                                                    <li className="dropdown-link">
                                                        <a href="#">More<i className="fas fa-caret-down"></i></a>
                                                        <div className="dropdown second">
                                                            <ul>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 1</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 2</a>
                                                                </li>
                                                                <li className="dropdown-link">
                                                                    <a href="#">Link 3</a>
                                                                </li>
                                                                <div className="arrow"></div>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <div className="arrow"></div>
                                                </ul>
                                            </div>
                                        </li> 
                                        <li className="dropdown-link">
                                            <a href="#">Link 4</a>
                                        </li>
                                        <div className="arrow"></div>*/}
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link " style={{ '--i': '1.1s' }}>
                                <a className='sas' href="#">კერამიკა<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to="/klinkeri" onClick={handleLinkClick}>კლინკერის ფილები</Link>
                                        </li>
                                        <li className="dropdown-link">
                                            <Link to="/keramograniti" onClick={handleLinkClick}>კერამოგრანიტი</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link" style={{ '--i': '1.1s' }}>
                                <a className='sas' href="#">აქსესუარები<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <Link to="/" onClick={handleLinkClick}>პროდუქცია მალე დაემატება</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>     
                            <li className="nav-link" style={{ '--i': '1.35s' }}>
                                <Link to='/about' className='sas' onClick={handleLinkClick} >ჩვენს შესახებ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hamburger-menu-container">
                    <div className="hamburger-menu" style={{color: 'black'}}>
                        <div></div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Header;