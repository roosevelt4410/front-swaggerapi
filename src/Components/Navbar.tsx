import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUsers, faUniversity, faBook, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../Auth/context/AuthContext';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handlerLogout, login } = useContext(AuthContext);
    console.log(login);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <button onClick={toggleNavbar} className="text-white md:hidden">
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    <img
                        src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0042/7987/Bancoomeva_personas__productos_y_virtual.png?1615358533"
                        alt="Logo" className="h-16 mr-3"
                    />
                </div>
                <h1 className="text-xl font-serif text-white mx-auto">Interoperabilidad</h1>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'} items-center`}>
                    {login.isAuth && (
                        <>
                            
                            {login.isAdmin && (
                <Link
                    to="/users"
                    className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2 flex flex-col items-center"
                >
                    <FontAwesomeIcon icon={faUsers} className="fa-lg" />
                    <span className="text-xs mt-1">Users</span>
                </Link>
            )}

                            
                           {/*  <Link
                                to="/apis"
                                className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2 flex flex-col items-center"
                            >
                                <FontAwesomeIcon icon={faUniversity} className="fa-lg" /> 
                                <span className="text-xs mt-1">Banco</span>
                            </Link> */}

                            
                            <Link
                                to="/apis/apisComponetsExternas"
                                className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2 flex flex-col items-center"
                            >
                                <FontAwesomeIcon icon={faBook} className="fa-lg" /> 
                                <span className="text-xs mt-1">Cobis</span>
                            </Link>

                            {/* <Link
      to="/apis/mensajeriaColas"
      className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2 flex flex-col items-center"
    >
      <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
      <span className="text-xs mt-1">Mensajería</span>
    </Link> */}

                            <Link
    to="/apis/buc"
    className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2 flex flex-col items-center group"
>
    <FontAwesomeIcon icon={faFolderOpen} className="fa-lg" />
    <span className="text-xs mt-1">
        <span className="group-hover:hidden">CI</span> {/* Texto corto visible por defecto */}
        <span className="hidden group-hover:inline">Capa de Interoperabilidad</span> {/* Texto largo visible al hacer hover */}
    </span>
</Link>


                            
                            <div className="ml-4">
                                <button
                                    onClick={handlerLogout}
                                    className="bg-empresa-verde hover:bg-empresa-rojo text-white rounded-full font-bold py-2 px-4 hover:text-white"
                                >
                                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-white" />
                                </button>
                            </div>


                            {/* <Link
                                to="/users/changePassword"
                                className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2 flex flex-col items-center"
                            >
                               <span className="fa-lg">🔒</span>
                                <span className="text-xs mt-1">Change Password</span>
                            </Link> */}
                        </>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
