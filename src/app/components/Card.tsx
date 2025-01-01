
import Link from "next/link"
import { Blog_Data } from "../data/blog"
import "@/app/data/blog"

type cardProp = {
    category: string
}

export default function Card({ category }: cardProp) {
    return (
        <>
            {
                Blog_Data[category]?.map((blog) => (
                    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm
                     rounded-lg overflow-hidden mx-auto font-[sans-serif] my-4 sm:my-6 lg:my-8 md:my-10 xl:my-12"
                        key={blog.id}
                    >
                        <div className="min-h-[256px]">
                            <img src={`${blog.image}`} className="w-full" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-gray-800 text-xl font-bold">{blog.title}</h3>
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                                {
                                    blog.description
                                }
                            </p>
                            <Link href={`/blog/${blog.id}`} target="_blank">
                                <button
                                    type="button"
                                    className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                                >
                                    View
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
