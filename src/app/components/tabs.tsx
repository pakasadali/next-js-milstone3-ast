
import { Blog_Data } from "../data/blog";

type tabsProp ={
    selectedCat:string
    setSelectedCat : (category:string) => void
}

export default function Tabs({selectedCat,setSelectedCat}:tabsProp) {
    return (
        <div className="w-full flex items-center justify-center font-sans px-1 py-2">
            <ul className="flex w-full">
                {
                    Object.keys(Blog_Data).map((category) => (
                        <li
                            key={category}
                            onClick={()=> setSelectedCat(category)}
                            id="homeTab"
                            className={`tab text-gray-500 font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center
                             bg-gray-50 py-3 px-6 border-b-2 border-transparent
                              hover:border-black ${category === selectedCat ? "text-orange-500":"text-gray-500"}
                              hover:border-b-2 cursor-pointer transition-all w-full`}
                        >
                            {category}
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
