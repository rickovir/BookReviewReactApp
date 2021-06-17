import './App.css';
import { NewBook } from './new-book/NewBook';
import { BookList } from './book-list/BookList';
import { BookReview } from './book-review/BookReview';
import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      books:[]
    };

    this.submitBookHandler = this.submitBookHandler.bind(this);
  }

  submitBookHandler(book)
  {
    this.state.books.push(book);

    console.log(this.state.books);
  }

  render(){
    return (
      <div className="container mt-3">
        <h3>BookReviewApp</h3>
        <NewBook onAddBook={this.submitBookHandler} />
        <BookList />
        <BookReview />
      </div>
    );
  }
}

export default App;
