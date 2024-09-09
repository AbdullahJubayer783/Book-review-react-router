import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BookCard = ({book}) => {
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;
    console.log(book);
    return (
        <Link to={`/book/${bookId}`}>
        <div className='border rounded-xl p-4 w-[328px]'>
            <div className='bg-[#F3F3F3] w-72 h-44 flex justify-center items-center rounded-xl'>
                <img className='w-32 h-fit' src={image} alt="" srcset="" />
            </div>
            <div className='mt-4'>
                {
                    tags.slice(0,2).map(tag=><button key={tag} className='text-xs font-sans font-semibold bg-[#ecfaea] text-green-600 px-3 py-1 rounded-full me-3 '>{tag}</button>)
                }
            </div>
            <h3 className='text-2xl font-bold mt-4'>{bookName}</h3>
            <p className='text-base font-semibold mt-3 text-gray-600 font-sans'>by : {author}</p>
            <div className='border-dashed border-b-2 mt-4 '></div>
            <div className='font-sans font-semibold mt-3 flex justify-between'>
                <div>{category}</div>
                <div className='flex items-center gap-1'>
                    {rating} <FaRegStar />
                </div>
            </div>
        </div>
        </Link>
    );
};

export default BookCard;