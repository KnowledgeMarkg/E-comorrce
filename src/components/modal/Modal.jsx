import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myContext from "../../context/data/myContext";

export default function Modal({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
  buyNow,
  user,
}) {
  let [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
  }

  const context = useContext(myContext);
  const { toggleMode, mode } = context;

  function openModal() {
    setIsOpen(true);
  }

  function checkUser(user, openModal, navigate) {
    if (!user) {
      toast.error("Please Login First");
      navigate("/login");
    } else {
      openModal();
    }
  }
  // console.log(name,address,pincode,phoneNumber)
  return (
    <>
      <div className="  text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={() => checkUser(user, openModal, navigate)}
          className="w-full bg-violet-600 py-2 text-center rounded-lg text-white bg-black font-bold"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Buy Now
        </button>
      </div>

      <Transition
        appear
        show={isOpen} 
        as={Fragment}
        style={{
          backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center text-center  pt-24">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full mt-4 max-w-md transform overflow-hidden rounded-2xl p-2  text-left align-middle shadow-xl transition-all bg-gray-50"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                          <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-900"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                Enter Full Name
                              </label>
                              <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                                name="name"
                                id="name"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                                style={{
                                  backgroundColor:
                                    mode === "dark" ? "rgb(62 64 66)" : "",
                                  color: mode === "dark" ? "white" : "",
                                }}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-1 text-sm font-medium text-gray-900"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                Enter Full Address
                              </label>
                              <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                name="address"
                                id="address"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                                style={{
                                  backgroundColor:
                                    mode === "dark" ? "rgb(62 64 66)" : "",
                                  color: mode === "dark" ? "white" : "",
                                }}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="pincode"
                                className="block mb-1 text-sm font-medium text-gray-900"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                Enter Pincode
                              </label>
                              <input
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                type="text"
                                name="pincode"
                                id="pincode"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                                style={{
                                  backgroundColor:
                                    mode === "dark" ? "rgb(62 64 66)" : "",
                                  color: mode === "dark" ? "white" : "",
                                }}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobileNumber"
                                className="block mb-1 text-sm font-medium text-gray-900"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                Enter Mobile Number
                              </label>
                              <input
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                                style={{
                                  backgroundColor:
                                    mode === "dark" ? "rgb(62 64 66)" : "",
                                  color: mode === "dark" ? "white" : "",
                                }}
                              />
                            </div>
                          </form>
                          <button
                            onClick={() => {
                              buyNow();
                              closeModal();
                            }}
                            type="button"
                            className="focus:outline-none w-full text-black bg-blue-gray-800 hover:bg-gray-500-800  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
