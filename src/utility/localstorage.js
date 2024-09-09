const getReadBookLists = () =>{
    const ReadBooks = localStorage.getItem('read-books-id');
    if (ReadBooks) {
        return JSON.parse(ReadBooks)
    }
    return []
}

const postReadBookLists = (id) =>{
    const ReadBooks = getReadBookLists();
    const exeist = ReadBooks.find(book => book === id);
    console.log(exeist);
    console.log(id);
    if (!exeist) {
        ReadBooks.push(id);
        localStorage.setItem('read-books-id',JSON.stringify(ReadBooks));
        return true;
    }
    return false;
}


const getWishlistBookLists = () =>{
    const WishlistBooks = localStorage.getItem('wishlist-books-id');
    if (WishlistBooks) {
        return JSON.parse(WishlistBooks)
    }
    return []
}

const postWishlistBookLists = (id) =>{
    const WishlistBooks = getWishlistBookLists();
    const exeist = WishlistBooks.find(book => book === id);
    console.log(exeist);
    console.log(id);
    if (!exeist) {
        WishlistBooks.push(id);
        localStorage.setItem('wishlist-books-id',JSON.stringify(WishlistBooks));
        return true;
    }
    return false;
}

export {getReadBookLists , postReadBookLists , getWishlistBookLists , postWishlistBookLists}