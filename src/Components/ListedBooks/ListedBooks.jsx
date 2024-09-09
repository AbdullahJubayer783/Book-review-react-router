import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';
import { getReadBookLists, getWishlistBookLists } from '../../utility/localstorage';
import ListCard from '../ListCard/ListCard';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    // read
    const readListBooksId = getReadBookLists();
    let arr = [];
    for (let ddd of readListBooksId) {
        let boks = allBooks.find(({bookId}) => bookId === ddd);
        arr.push(boks);
    }
    const [readList , setReadLists] = useState(arr);
    // wish
    const wishListBooksId = getWishlistBookLists();
    let arrWish = [];
    for (let ddd of wishListBooksId) {
        let boks = allBooks.find(({bookId}) => bookId === ddd);
        arrWish.push(boks);
    }
    const [wishList , setWishLists] = useState(arrWish);
    // Sorting / filter
    const selectFilter = op => {
        console.log(op);
        if (op === 'A') {
            const sortedNwArrRead = readList.sort((a, b) => (a.rating < b.rating) ? 1: -1);
            const sortedNwArrWish = wishList.sort((a, b) => (a.rating < b.rating) ? 1: -1);
            console.log('----------Wish',sortedNwArrRead);
            console.log('----------Read',sortedNwArrRead);
            setReadLists([]);
            setWishLists([]);
            setReadLists([...sortedNwArrRead]);
            setWishLists([...sortedNwArrWish]);
        }else if (op === 'B') {
            const sortedNwArrRead = readList.sort((a, b) => (a.totalPages < b.totalPages) ? 1: -1);
            const sortedNwArrWish = wishList.sort((a, b) => (a.totalPages < b.totalPages) ? 1: -1);
            console.log('----------Wish',sortedNwArrRead);
            console.log('----------Read',sortedNwArrRead);
            setReadLists([]);
            setWishLists([]);
            setReadLists([...sortedNwArrRead]);
            setWishLists([...sortedNwArrWish]);
        }else{
            const sortedNwArrRead = readList.sort((a, b) => (a.yearOfPublishing < b.yearOfPublishing) ? 1: -1);
            const sortedNwArrWish = wishList.sort((a, b) => (a.yearOfPublishing < b.yearOfPublishing) ? 1: -1);
            console.log('----------Wish',sortedNwArrRead);
            console.log('----------Read',sortedNwArrRead);
            setReadLists([]);
            setWishLists([]);
            setReadLists([...sortedNwArrRead]);
            setWishLists([...sortedNwArrWish]);
        }
    }



    return <>
        <div className='bg-[#F3F3F3] py-5 text-center mb-3 rounded-xl text-2xl font-bold font-sans'>
            Listed Books
        </div>
        <div className='flex justify-center'>
            <details className="dropdown font-sans">
            <summary className="btn m-1 flex items-center bg-[#23BE0E] font-bold">Sort By <IoIosArrowDropdown /></summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li onClick={()=>selectFilter('A')}><a>Rating</a></li>
                <li onClick={()=>selectFilter('B')}><a>Number of Pages</a></li>
                <li onClick={()=>selectFilter('C')}><a>Publisch Year</a></li>
            </ul>
            </details>
        </div>
        {/* tab */}
        <div role="tablist" className="tabs tabs-lifted font-sans my-8">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {
                readList.map(lst=><ListCard key={lst.bookId+'R'} book={lst}></ListCard>)
            }
        </div>

        <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
            defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {
                wishList.map(lst=><ListCard key={lst.bookId+'W'} book={lst}></ListCard>)
            }
        </div>
        </div>

    </>;
};

export default ListedBooks;