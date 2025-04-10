import { useContext } from "react";
import SessionContext from "contexts/sessionContext";
import { motion } from "framer-motion";

const MobileMenuModal = (props) => {
  const { onCartOpenClick } = props;
  const { username, signOut } = useContext(SessionContext);
  return (
    <motion.div
      className="flex flex-col items-start rounded-bl-lg bg-emerald-800 pb-6 pr-12 pt-12 text-emerald-200 shadow-md"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-8 py-4">
        <i className="fa-solid fa-user mr-2 text-2xl"></i>
        {username}
      </div>
      <button className="px-8 py-4" onClick={signOut}>
        <i className="fa-solid fa-arrow-right-from-bracket mr-2 text-2xl"></i>
        sign Out
      </button>
      <button className="px-8 py-4" onClick={onCartOpenClick}>
        <i className="fa-solid fa-cart-shopping mr-2 text-2xl"></i>
        Cart
      </button>
    </motion.div>
  );
};

export default MobileMenuModal;
