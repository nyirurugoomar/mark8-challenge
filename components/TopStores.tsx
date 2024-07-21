import Image from "next/image"
import { Stores } from "@/constants"

function TopStores() {
  return (
    <div className="lg:col-span-1  md:w-full md:h-full  border-[1px] border-accent rounded-[16px] ">
    <div className="flex justify-between md:p-4 p-6 items-center">
        <div className="flex items-center md:gap-4 gap-3">
          <Image src='/store-90.svg' width={24} height={24}  alt=""/>
          <h1 className="title">Top 10 Stores</h1>
        </div>
      <div>
          <Image src='/link.svg' width={16} height={16}  alt=""/>
      </div>
    </div>
    {/* input */}
    <div className="bg-image-bg bg-cover md:p-6 p-8">
    <form action="" className="text-center justify-center items-center flex">
    <div className="relative md:w-[600px] md:h-[48px]">
      <Image src='/search-01.svg' width={16} height={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"  alt="search-icon"/>
      <input
        type="text"
        className="md:w-[257px] w-[300px] md:h-[48px] h-[48px] bg-white pl-10 pr-10 text-black rounded-[8px]"
        placeholder="Search a store"
      />
      <Image src='/filter-04.svg' width={16} height={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" alt="filter-icon"/>
    </div>
  </form>
    </div>
    <div className="p-4 ">
    {Stores.map((store, index) => (
          <div key={index} className="justify-between flex items-center md:mb-6 mb-4">
            <div className="flex items-center gap-2">
              <Image src={store.image} width={60} height={60} alt={store.nameStore} />
              <div className="md:grid">
                <h1 className="subtitle">{store.nameStore}</h1>
                <p className="body">{store.numberProduct} Products</p>
              </div>
            </div>
            <div>
              <Image src='/arrow.svg' width={8} height={4} alt="arrow-icon"/>
            </div>
          </div>
        ))}
        
    </div>
  </div>
  )
}

export default TopStores