import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoManOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";

const ListCard = ({book}) => {
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;
   
    return (
        
        <div className='border rounded-xl p-4 flex items-center'>
            <div className='bg-[#F3F3F3] w-44 h-44 flex justify-center items-center rounded-xl'>
                <img className='w-32 h-fit' src={image} alt="" srcset="" />
            </div>
            {/* divide */}
            <div className='ms-16'>
            
            <h2 className='text-3xl font-semibold'>{bookName}</h2>
                <h5 className='text-gray-600 font-sans font-bold'>By: {author}</h5>
                <div className='text-sm font-sans font-semibold flex items-center'>
                    <p className='text-black font-extrabold me-5'>Tags</p>
                    {
                        tags.slice(0,2).map(tag=><button key={tag} className='text-xs font-sans font-semibold bg-[#ecfaea] text-green-600 px-3 py-1 rounded-full me-3 '>#{tag}</button>)
                    }
                    <p className='text-xs ms-3 flex items-center gap-1'><FaRegCalendarCheck className='text-sm'></FaRegCalendarCheck>Year of publishing: {yearOfPublishing}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-xs mt-2 flex items-center gap-1'><IoManOutline className='text-sm'></IoManOutline >Publisher:  {author}</p>
                    <p className='text-xs mt-2 flex items-center gap-1'><MdOutlineFindInPage className='text-sm'></MdOutlineFindInPage>Pages: {totalPages}</p>
                </div>
                <div className='border border-gray-300 mt-2'></div>
                    
                <div className='space-x-3'>
                    <button className='text-xs font-semibold bg-blue-200 text-blue-700 rounded-full px-4 py-2 mt-3'>Category: {category}</button>
                    <button className='text-xs font-semibold bg-orange-200 text-orange-700 rounded-full px-4 py-2 mt-3'>Rating: {rating}</button>
                    <Link to={`/book/${bookId}`}>
                    <button className='text-xs font-semibold bg-green-200 text-green-700 rounded-full px-4 py-2 mt-3'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListCard;