import Image from "next/image";
import { Product } from "@/constants";
import { NewsLetter, TopStores } from ".";
import { AiOutlineDown } from "react-icons/ai";

function RecentProduct() {
  return (
    <div className="md:w-full">
      <div className="justify-between md:flex flex items-center md:mx-20 mx-4 md:mt-10 md:my-4 my-4">
        <div className="md:flex flex md:gap-4 gap-2 items-center">
          <Image
            src="/delivery-box-01.svg"
            alt="delivery-icon"
            width={24}
            height={24}
          />
          <h1 className="title">Recent Products ({Product.length})</h1>
        </div>
        <div className="flex md:gap-2 gap-2">
          <button className="md:h-[48px] md:w-[48px] border-[1.5px] border-accent p-[8px] rounded-[8px] flex items-center justify-center ">
            <Image
              src="/filter2.svg"
              alt="icon-filter"
              width={16}
              height={16}
            />
          </button>
          <button className="md:h-[48px] md:w-[48px] border-[1.5px] border-accent p-[8px] rounded-[8px] flex items-center justify-center">
            <Image
              src="/arrange-letters.svg"
              alt="icon-filter"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
      {/* items */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:mx-20 mx-6 md:mt-10 gap-4">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {Product.map((product, index) => (
              <div
                key={index}
                className="border-[1px] border-accent rounded-[16px] md:w-full md:h-[324px] cursor-pointer"
              >
                <Image
                  src={product.image}
                  className="w-full rounded-t-[16px] object-cover"
                  height={256}
                  width={370}
                  alt="Product Image"
                />
                <div className="justify-between flex p-[20px] items-center">
                  <div className="space-y-2">
                    <h1 className="title max-w-[150px] truncate whitespace-nowrap">
                      {product.productName}
                    </h1>
                    <h2 className="title text-primary">
                      {product.price}{" "}
                      <span className="text-accent line-through ">
                        {product.discountedPrice}
                      </span>
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <button className="md:h-[48px] h-[40px] w-[40px] md:w-[48px] border-[1.5px] border-accent p-[8px] rounded-[8px] flex items-center justify-center">
                      <Image
                        src="/shopping-cart.svg"
                        alt="icon-filter"
                        width={16}
                        height={16}
                      />
                    </button>
                    <button className="md:h-[48px] md:w-[48px] border-[1.5px] border-accent p-[8px] rounded-[8px] flex items-center justify-center">
                      <Image
                        src="/like.svg"
                        alt="icon-filter"
                        width={16}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center md:mt-6 mt-6">
            <button className="flex justify-center items-center border-[1.5px] px-[32px] py-[8px] rounded-[8px] title text-[#141C24]">
              <AiOutlineDown className="mr-2 text-primary" />
              Load More
            </button>
          </div>
        </div>

        <TopStores />
      </div>
      <NewsLetter/>
    </div>
  );
}

export default RecentProduct;
