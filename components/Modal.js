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

// const Modal = ({children}) => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggleModal = () => {
//         setIsOpen(!isOpen);
//         document.body.style.overflowY = isOpen ? 'scroll' : 'hidden';
//     };
//
//     return (
//         <>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>
//                 Open Modal
//             </button>
//             {isOpen && (
//                 <div className="relative bottom-0 inset-0 sm:flex sm:items-center sm:justify-center z-20 h-auto">
//                     <div className="fixed inset-0">
//                         <div className="absolute inset-0 w-full h-full bg-gray-500 opacity-75" onClick={toggleModal}></div>
//                     </div>
//                     <div className="relative bg-white rounded-lg max-w-8xl w-full z-30 px-4 py-5 sm:p-6">
//                         {children}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export default Modal;

// <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                                   <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
//                                     <button type="button" onClick={toggleModal} className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
//                                       Close
//                                     </button>
//                                   </span>
// </div>
// export default function Modal({showModal, setShowModal, children, showFooter = false, showHeader = false}) {
//     //const [showModal, setShowModal] = React.useState(false);
//     // relative h-auto w-auto
//
//     return (
//         <>
//             {showModal && <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none flex-col">
//
//                 <div className="relative my-6 mx-auto z-50 ">
//
//                     <div className="bg-white max-w-6xl max-h-[90vh] p-10">
//                         <div>[X]</div>
//                         {children}
//                         {/*<img  className="max-w-screen max-h-screen p-10" src="https://images.prismic.io/aita/14874f4b-ee08-4531-8893-9081ef0f0557_EEP_0262.jpg?auto=compress,format" />*/}
//                         {/*<img className="max-w-screen max-h-screen p-20" src="https://images.prismic.io/aita/8ae28dce-08eb-4026-9e2e-43a683a7605e_Liza-Jesse-Rinka-Photography-29.jpg?auto=compress,format" />*/}
//                     </div>
//
//                 </div>
//
//                 <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
//             </div>
//             }
//         </>
//     );
// }