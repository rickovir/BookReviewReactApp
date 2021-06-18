import './App.css';
import { NewBook } from './new-book/NewBook';
import { BookList } from './book-list/BookList';
import { BookReview } from './book-review/BookReview';
import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      books:[],
      activeIndex:0
    };

    this.submitBookHandler = this.submitBookHandler.bind(this);
    this.selectedIndexHandler = this.selectedIndexHandler.bind(this);
  }

  selectedIndexHandler(index)
  {
    this.setState({
      activeIndex:index
    });

    console.log(this.state.activeIndex)
  }

  submitBookHandler(newBook)
  {
    this.setState({
      books:[...this.state.books,newBook]
    })
  }

  render(){
    return (
      <div className="container mt-3">
        <h3>BookReviewApp</h3>
        <NewBook onAddBook={this.submitBookHandler} />
        <BookList books={this.state.books} onSelectIndex={this.selectedIndexHandler} activeIndex={this.state.activeIndex} />
        <BookReview />
      </div>
    );
  }
}

export default App;
