import React from "react";

export class NewBook extends React.Component{
  
    constructor(props) {
      super(props);
  
      this.state = {
        bookName:"",
        bookYear:0
      };

      this.onChangeBookName = this.onChangeBookName.bind(this);
      this.onChangeBookYear = this.onChangeBookYear.bind(this);
      this.submitBook = this.submitBook.bind(this);
    }

    onChangeBookName(event){
        this.setState({
            bookName:event.target.value
        });
    }

    onChangeBookYear(event){
        this.setState({
            bookYear:event.target.value
        });
    }

    clearBook()
    {
        this.setState({
            bookName:'',
            bookYear:0
        })
    }

    submitBook()
    {
        const book = {
            bookName : this.state.bookName,
            bookYear : this.state.bookYear
        };

        this.props.onAddBook(book);

        this.clearBook();
    }

    render(){
        const {bookName, bookYear} = this.state;
        return(
            <div className="card mb-3">
                <div className="card-header">
                    New Book
                </div>
                <div className="card-body">
                    <form>
                        <div class="form-group row mb-3">
                            <label class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" className={`form-control ${!bookName ? "is-invalid":""}`} name="bookName" required value={bookName} onChange={this.onChangeBookName} />
                                { !bookName ? (

                                    <div class="invalid-feedback">
                                    Required
                                    </div>
                                ) : null }
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <label class="col-sm-2 col-form-label">Year</label>
                            <div class="col-sm-10">
                                <input type="number" className={`form-control ${!bookYear ? "is-invalid":""}`} name="bookYear" required value={bookYear} onChange={this.onChangeBookYear} />
                                { !bookYear ? (

                                    <div class="invalid-feedback">
                                    Required
                                    </div>
                                ) : null }
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-10">
                                <button class="btn btn-primary" type="submit" disabled={!bookName || !bookYear} onClick={this.submitBook}>Submit Book</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}