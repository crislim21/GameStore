import Image from "next/image";
import Navbar from "./components/Navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-72">
        <div className="text-center">
          {/* Add a div with flex properties to center the image */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/image1.jpg"
              alt="Picture of the author"
              width={1300}
              height={300}
            />
          </div>
          <div className="border m-4 px-5 py-3 rounded-lg border-blue-500 shadow-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo dicta est qui labore neque. Eligendi quo laborum illum
              laboriosam dolorem id cupiditate ipsam quisquam amet illo harum,
              dignissimos aperiam, commodi architecto aliquam suscipit qui modi
              veniam voluptatibus repellat recusandae ad. Aliquam, facere cumque
              fugit, ipsum dignissimos neque laborum et perspiciatis officia
              fugiat eos? Ab expedita adipisci at, est quam qui ipsam dolore
              voluptas harum, laudantium doloribus! Eum reprehenderit magnam
              tempora enim iste sed, hic id vero soluta nisi. Optio tempore esse
              commodi sed! Sequi aspernatur a voluptatem sapiente maiores est
              eius totam dolorem odit assumenda, nesciunt quia esse? Amet
              corrupti dolores itaque consectetur tempore assumenda, rerum, sint
              beatae cumque fuga quidem odio odit ducimus inventore alias
              distinctio, nesciunt non nostrum! Fugit tempore aut odio minus
              ipsam, esse modi consequatur deserunt dolores commodi delectus,
              assumenda voluptate ullam optio nemo at maiores in explicabo
              libero. Explicabo quos hic saepe blanditiis? Illum non inventore
              in deleniti praesentium laudantium eligendi, voluptatum sint, quia
              earum ad fuga eum tenetur quaerat dolorum velit eveniet amet
              aperiam possimus minima nulla. Consequatur cupiditate laborum
              vitae quidem nostrum porro animi atque fuga et velit quod, quam
              eveniet temporibus numquam quia recusandae! Excepturi, quia optio
              at sapiente explicabo nam laudantium.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
