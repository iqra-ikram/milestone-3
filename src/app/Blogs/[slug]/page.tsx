import React from 'react';
import { data } from '@/app/data/blog'
import Comment from "@/app/component/comment"

const dynamic = ({ params }: { params: { slug: string } }) => {
  
  const blog = data.find((b: { slug: string; }) => b.slug === params.slug);


  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center bg-teal-700 py-3 px-3 font-bold underline mb-4">
          Blog Not Found
        </h1>
        <p className="text-gray-700">Sorry, the blog post you are looking for could not be found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center bg-teal-700 py-3 px-3 font-bold underline mb-7">
        {blog.name}
      </h1>

      <div className="max-w-full mb-8 text-gray-700">
        <p>{blog.content}</p>
      </div>

<Comment/>

      <h2 className="text-lg sm:text-xl md:text-2xl mb-[50px] mt-[40px]">
        Written by: <span className="text-blue-950 text-xl sm:text-2xl font-medium underline">{blog.Author}</span>
      </h2>
    </div>

  );
};

export default dynamic;