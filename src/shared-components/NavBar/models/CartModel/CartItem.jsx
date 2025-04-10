import * as cartService from "services/cart";

const CartItem = (props) => {
  const { item, fetchCart } = props;

  return (
    <div className="flex">
      <img className="w-28 rounded-md" src={item.image_src} />
      <div className="mx-4 flex flex-1 justify-between">
        <div className="">
          <div className="font-playfair text-xl text-emerald-700">
            {item.plant_name}
          </div>
          <div className="my-1 flex text-slate-500">
            <div className="w-14 text-slate-400">color:</div>
            {item.pot_color}
          </div>
          <div className="my-1 flex text-slate-500">
            <div className="w-14 text-slate-400">qty:</div>
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="text-slate-500">
            ${item.quantity * item.price_per_unit}
          </div>
          <button
            className="text-sm text-slate-400 hover:text-red-800"
            onClick={async () => {
              await cartService.removeItemFromCart({ itemId: item.id });
              fetchCart();
            }}
          >
            <i className="fa-regular fa-trash mr-1 text-base"></i>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
