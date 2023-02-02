import React, { useEffect } from 'react';

const Modal = ({children, showModal, setShowModal}) => {

    useEffect(() => {
        document.body.style.overflowY = showModal ? 'hidden' : 'scroll';

    })

    return (
        <>
            {showModal && (
                <div className="fixed bottom-0 inset-0 flex items-center justify-center z-20 h-auto">
                    <div className="fixed inset-0">
                        <div className="absolute inset-0 w-full h-full bg-gray-500 opacity-75" onClick={() => setShowModal(false)}></div>
                    </div>
                    <div className="fixed bg-white px-4 py-5 max-h-[90vh] flex flex-col items-center">
                        <div className="self-end cursor-pointer p-1" onClick={() => setShowModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>

                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Modal;