import React from "react";

const BookItem = (props) =>{
    const { book, index, activeIndex, onSelected} = props;

    const activeCard = activeIndex === index ? 'border-primary shadow-lg':null;
    const activeName = activeIndex === index ? 'text-primary font-weight-bold':'text-secondary';
    const activeCardBody = activeIndex === index ? 'bg-primary':'bg-secondary';

    return (
        <div key={index} className="col-3 mb-3" onClick={()=>onSelected(index)}>
            <div className={`card rounded ${activeCard}`} style={{cursor:'pointer'}}>
                <div className="d-flex justify-content-center align-items-center overflow-auto" style={{height:100+'px'}}>
                    <p className={`text-center ${activeName}`}>{ book?.bookName }</p>
                </div>
                <div className={`card-body p-2 rounded-bottom ${activeCardBody}`}>
                    <p className="card-text text-white text-center">{ book?.bookYear }</p>
                </div>
            </div>
        </div>
    );
}

export default BookItem;