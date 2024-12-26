import React from 'react';
import Link from "next/link";
import {data} from '@/app/data/blog'

const Blogspage = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-[60px] mb-[60px]">
        {data.map((blog: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; smallText: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; slug: any; }) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
          
            <div className="bg-gray-200 text-blue-950 text-center py-20 hover:bg-teal-600 hover:text-white transition-colors duration-300">
              <h3 className="text-[35px] font-[800] tracking-wide">{blog.name}</h3>
            </div>
           
            <div className="p-6 space-y-4">
              <p className="text-gray-700">{blog.smallText}</p>
              <div className="text-right">
                <Link href={`/Blogs/${blog.slug}`}>
                  <p className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogspage;