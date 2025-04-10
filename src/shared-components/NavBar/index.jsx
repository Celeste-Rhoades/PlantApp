import { useContext, useState } from "react";
import SessionContext from "contexts/sessionContext";
import { Link } from "react-router-dom";
import CartModal from "./models/CartModel";
import ModalWrapper from "./models/CartModel/ModalWraaper";
import MobileMenuModal from "./models/CartModel/MobilMenuModal";

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav
        className="flex justify-center bg-emerald-800 font-lato"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="flex w-full max-w-5xl items-center justify-between px-8 py-2">
          <Link to="/plants">
            <div className="flex flex-col items-center font-playfair text-xl text-white">
              <img
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
                className="w-10"
              />
              Rica's Plants
            </div>
          </Link>
          <div className="hidden flex-1 justify-end sm:flex">
            <div className="relative min-w-32">
              <button
                className="flex items-center text-emerald-200"
                onClick={() => setUserMenuOpen(true)}
              >
                <i className="fa-solid fa-user mr-2 text-xl"></i>
                {username}
              </button>
              {userMenuOpen && (
                <div className="absolute bottom-[-46px] left-0 rounded-md bg-white px-4 py-2 shadow-md">
                  <button
                    className="text-slate-500 hover:text-emerald-700"
                    onClick={signOut}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
            <button
              className="flex items-center text-emerald-200"
              onClick={() => setCartOpen(true)}
            >
              <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>cart
            </button>
          </div>
          <button
            className="flex sm:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars text-4xl text-emerald-400"></i>
          </button>
        </div>
      </nav>
      <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
        <CartModal setCartOpen={setCartOpen} />
      </ModalWrapper>
      <ModalWrapper
        isOpen={mobileMenuOpen}
        onCloseClick={() => setMobileMenuOpen(false)}
      >
        <MobileMenuModal
          onCartOpenClick={() => {
            setCartOpen(true);
            setMobileMenuOpen(false);
          }}
        />
      </ModalWrapper>
    </>
  );
};
export default NavBar;
