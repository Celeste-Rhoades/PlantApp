import { useContext, useState } from "react";
import SessionContext from "contexts/sessionContext";
import { Link } from "react-router-dom";
import CartModal from "./models/CartModel";

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <nav
        className="bg-emerald-800 flex justify-center font-lato"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="w-full max-w-5xl flex items-center justify-between px-8 py-2">
          <Link to="/plants">
            <div className="font-playfair text-white flex flex-col text-xl items-center">
              <img
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
                className="w-10 "
              />
              Rica's Plants
            </div>
          </Link>
          <div className=" flex-1 flex justify-end">
            <div className="relative min-w-32">
              <button
                className="text-emerald-200 flex items-center"
                onClick={() => setUserMenuOpen(true)}
              >
                <i className="fa-solid fa-user mr-2 text-xl"></i>
                {username}
              </button>
              {userMenuOpen && (
                <div className="absolute bottom-[-46px] px-4 py-2 left-0 bg-white rounded-md shadow-md ">
                  <button
                    className="text-slate-500 hover:text-emerald-700"
                    onClick={signOut}
                  >
                    <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
            <button
              className="text-emerald-200 flex items-center"
              onClick={() => setCartOpen(true)}
            >
              <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>cart
            </button>
          </div>
        </div>
      </nav>
      {cartOpen && <CartModal setCartOpen={setCartOpen} />}
    </>
  );
};
export default NavBar;
