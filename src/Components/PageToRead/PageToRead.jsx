import React, { useState } from 'react';
import { BarChart, XAxis, YAxis , Bar , Label, CartesianGrid, LabelList} from 'recharts';
import { getReadBookLists } from '../../utility/localstorage';
import { useLoaderData } from 'react-router-dom';

const PageToRead = () => {
    // read
    const allBooks = useLoaderData();
    const readListBooksId = getReadBookLists();
    let arr = [];
    for (let ddd of readListBooksId) {
        let boks = allBooks.find(({bookId}) => bookId === ddd);
        arr.push(boks);
    }
    const [readList , setReadList] = useState(arr);
    console.log(readList);
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = readList;
    return (
        <div className='flex justify-center'>
            <div className='my-9'>
            <BarChart 
            width={780} 
            height={300} 
            data={readList} 
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName">
                <Label value="Pages of my website" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'Pages of books', angle: -90, position: 'insideLeft' }} />
            <Bar dataKey="totalPages" fill="#8884d8">
                <LabelList dataKey="totalPages" position="top" />
            </Bar>
            </BarChart>
            
        </div>
        </div>
        
    );
};

export default PageToRead;