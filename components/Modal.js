import React, { useEffect } from "react";

const Modal = ({ children, showModal, setShowModal, fullScreen = false }) => {
  useEffect(() => {
    document.body.style.overflowY = showModal ? "hidden" : "scroll";
  });

  return (
    <>
      {/*{showModal && (*/}
      <div
        className={`${
          showModal ? "visible z-20" : "-z-10 hidden"
        } fixed inset-0 bottom-0  flex h-auto items-center justify-center`}
      >
        <div className="fixed inset-0">
          <div
            className="absolute inset-0 h-full w-full bg-gray-500 opacity-75"
            onClick={() => setShowModal(false)}
          ></div>
        </div>
        <div
          className={`fixed flex flex-col items-center bg-white px-4 py-0 transition-opacity md:pb-5 
            ${
              fullScreen
                ? "h-full w-full"
                : "h-full w-full md:h-auto md:max-h-[90vh] md:w-auto"
            }
            ${showModal ? "opacity-100" : "opacity-0"}
            `}
        >
          <div
            className="cursor-pointer self-end p-4"
            onClick={() => setShowModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={`${fullScreen ? "h-10 w-10" : "h-8 w-8"}`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div>{children}</div>
        </div>
      </div>
      {/*)}*/}
    </>
  );
};
export default Modal;
