import React from "react";
import BookItem from "./book-item/BookItem";

export class BookList extends React.Component{
    constructor(props) {
      super(props);
  
      this.state = {
        book:[],
      };

      this.onSelectIndex = this.onSelectIndex.bind(this);
      this.renderBookList = this.renderBookList.bind(this);
    }

    onSelectIndex(index)
    {
        this.props.onSelectIndex(index);
    }

    renderBookList()
    {
        let index = 0;
        const {books, activeIndex } = this.props;
        const resultList =  books.map(item => {
            const resultItem = (
                <BookItem book={item} index={index} activeIndex={activeIndex} onSelected={this.onSelectIndex} />
            );
            index++;

            return resultItem;
        });

        return resultList;
    }

    render(){
        return(
            <div className="card mb-3">
                <div className="card-header">
                    Book List
                </div>
                <div className="card-body row">
                    {this.renderBookList()}
                </div>
            </div>
        );
    }
}