"use client"
import { useState } from 'react'

interface Icomment{
    id:number;
    comment: string;
}

const CommentSection = ()=>{
  
    const [comment , setComment] = useState("");
    const [commentlist, setCommentlist] = useState<Icomment[]>([]);


    const addComment = ()=>{
        if (comment.trim() === '') return;
        const newComment = {id: Date.now(), comment};
        setCommentlist([...commentlist , newComment]);
    setComment("");
}
const deleteComment = (id: number)=>{
    setCommentlist(commentlist.filter(commentlist => commentlist.id !== id))
}





 return(
    <div className='w-full max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-300 mt-9 mb-11'>
        <h1 className='text-4xl font-semibold text-teal-800 mb-4 text-center'>Comment Section</h1>
      
  
        <div className='mb-4 flex justify-between items-center'>
            <input
            type="text"
            value={comment}
            onChange={(e)=> setComment(e.target.value)}
            placeholder='Add Comment'
            className='w-full p-[10px] border-2 border-teal-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-950'
            />
            <button onClick={addComment} disabled={!comment}  className='ml-4 px-6 py-3 bg-teal-700 text-white rounded-md disabled:bg-teal-700'>Comment</button>
       
        </div>
        <div className='space-y-4 '>
        <ul className=''>
            {commentlist.map((commentlist)=>(
                <li className='flex justify-between items-center p-3 border-b border-gray-500 rounded-md hover:bg-slate-100' key={commentlist.id}>
                <p className='text-gray-800 text-[15px]'>{commentlist.comment}</p>
                <button onClick={()=> deleteComment(commentlist.id)} className='text-red-500 hover:text-red-700 transition duration-200'>Delete</button>
                </li>
            ))}
             
        </ul>
        </div>
    </div>
 );

};
export default CommentSection
