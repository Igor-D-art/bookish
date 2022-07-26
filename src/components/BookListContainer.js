import React from "react";
import useRemoteService from "./hook";
import BookList from "./BookList";

function BookListContainer(){
  
    const { data, loading, error } = useRemoteService([]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error</p>
    }

    return (
        <BookList books={data}/>
    )
}


export default BookListContainer;