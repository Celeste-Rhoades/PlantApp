import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";

const ModalWrapper = (props) => {
  const { children, isOpen, onCloseClick } = props;
  const backgroundDivRef = useRef();

  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div
        ref={backgroundDivRef}
        className="fixed left-0 top-0 z-20 flex h-full w-full items-start justify-end bg-black/30 font-lato backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
      >
        <button
          className="absolute right-0 top-0 p-4 text-4xl"
          onClick={onCloseClick}
        >
          <i className="fa-regular fa-circle-xmark text-emerald-400"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
