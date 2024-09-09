import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [booksData , setBooksData] = useState([]);
    useEffect(()=>{
        fetch(`APIData.json`)
        .then(res => res.json())
        .then(data => setBooksData(data))
    },[])
    console.log(booksData);
    return <>
    <div className='flex justify-between items-center bg-[#F3F3F3] rounded-2xl px-24 py-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'>Books to freshen up <br></br> your bookshelf</h2>
            <p><NavLink to='/listedbooks' ><button className='btn btn-accent'>View The List</button></NavLink></p>
            
        </div>
        <div>
        <img className='ps-40' src="/src/assets/pngwing 1.png" alt="" />
        </div>
        <div>

        </div>
    </div>
    <h3 className='text-3xl font-bold font-sans my-5 text-center'>Available All Books</h3>
    <div className='grid grid-cols-3 gap-8 my-5'>
        {
            booksData.map(book=><BookCard key={book.bookId} book={book}></BookCard>)
        }
    </div>
    
    </>;
};

export default Home;