import { useLoaderData, useParams } from 'react-router-dom';
import { postReadBookLists, postWishlistBookLists } from '../../utility/localstorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const {id} = useParams();
    const books = useLoaderData();
    const book = books.filter(bk=> {
        if (bk.bookId === id) {
            return bk;
        }
    } )
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book[0];

    const hendelAddReadBook = () =>{
        const isPosted = postReadBookLists(bookId);
        if (isPosted) {
            toast.success("Added to read this book..!!");
        }else{
            toast.error("Already added to read book")
        }
    }

    const hendelAddWishlistBook = () =>{
        const isPosted = postWishlistBookLists(bookId);
        if (isPosted) {
            toast.success("Added to Wishlist this book..!!");
        }else{
            toast.error("Already added to Wishlist book")
        }
    }
    return (<><ToastContainer />
        <div className='grid grid-cols-2 my-8'>
            <div className='bg-[#F3F3F3] h-full p-5 rounded-lg w-fit'>
                <img className='h-96' src={image} alt="" srcset="" />
            </div>
            <div>
                <h2 className='text-4xl font-semibold'>{bookName}</h2>
                <h5 className='text-gray-600 font-sans font-bold mt-3'>By: {author}</h5>
                <div className='border border-gray-300 mt-3'></div>
                <h4 className='text-gray-600 font-sans font-bold mt-2'>{category}</h4>
                <div className='border border-gray-300 mt-2'></div>
                <p className='text-sm font-sans font-semibold text-gray-500 mt-3'><span className='text-black font-extrabold'>Review: </span>{review}</p>
                <div className='text-sm font-sans font-semibold mt-3 flex items-center'>
                    <p className='text-black font-extrabold me-5'>Tags</p>
                    {
                        tags.slice(0,2).map(tag=><button key={tag} className='text-xs font-sans font-semibold bg-[#ecfaea] text-green-600 px-3 py-1 rounded-full me-3 '>#{tag}</button>)
                    }
                </div>
                <div className='border border-gray-300 mt-4'></div>

                <div className='font-sans text-sm font-bold flex items-center mt-4'>
                <div className='w-48'><p className='text-gray-500 font-semibold '>Number of Pages:</p></div>
                <p>{totalPages}</p>
                </div>
                <div className='font-sans text-sm font-bold flex items-center mt-3'>
                <div className='w-48'><p className='text-gray-500 font-semibold '>Publisher:</p></div>
                <p>{publisher}</p>
                </div>
                <div className='font-sans text-sm font-bold flex items-center mt-3'>
                <div className='w-48'><p className='text-gray-500 font-semibold '>Year of Publishing:</p></div>
                <p>{yearOfPublishing}</p>
                </div>
                <div className='font-sans text-sm font-bold flex items-center mt-3'>
                <div className='w-48'><p className='text-gray-500 font-semibold '>Rating:</p></div>
                <p>{rating}</p>
                </div>
                <div className='mt-6'>
                <button className="btn btn-outline me-4 rounded-md font-sans font-bold" onClick={hendelAddReadBook}>Read</button>
                <button className="btn btn-active btn-accent rounded-md text-white font-sans font-bold" onClick={hendelAddWishlistBook}>Wishlist</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default BookDetails;