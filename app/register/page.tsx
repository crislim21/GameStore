import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import RegisterForm from "../components/register/registerForm";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-library">
        <div className="container mx-auto p-0 h-screen flex justify-center items-center">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item carousel-image bg-img-1 active py-5">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center mb-5">
                    <div className="col-span-3">
                      <h1 className="my-5 text-5xl font-bold text-white">
                        The best library <br />
                        <span className="text-gray-300">
                          for your gaming world
                        </span>
                      </h1>
                      <p className="mb-4 opacity-70 text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Temporibus, expedita iusto veniam atque, magni
                        tempora mollitia dolorum consequatur nulla, neque
                        debitis eos reprehenderit quasi ab ipsum nisi dolorem
                        modi. Quos?
                      </p>
                    </div>

                    <div className="col-span-2 md:col-span-2">
                      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center">
                            <Image src="/images/GimStore.png" alt="" width={200} height={100} />
                        </div>
                        <RegisterForm />
                        <div>
                            <p className="mt-4 text-center">
                                Already have an account?{" "}
                                <Link href="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
                                    Login here
                                </Link>
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
