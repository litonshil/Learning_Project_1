import { Component } from "react";
import "./App.css";
import Book from "./components/Book";
class App extends Component {
    state = {
        books: [
            { id: 1, bookName: "C Programming", author: "Subin" },
            { id: 2, bookName: "Java Programming", author: "Subin" },
            { id: 3, bookName: "Python Programming", author: "Subin" },
        ],
        showBooks: true,
    };

    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index],
        };
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({
            books: books,
        });
    };

    deleteBookState = (index) => {
        //const books = this.state.books.slice();
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books,
        });
    };

    toggleBooks = () => {
        this.setState({
            showBooks: !this.state.showBooks,
        });
    };

    render() {
        let books = null;
        if (this.state.showBooks) {
            const booksState = this.state.books;
            books = booksState.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        author={book.author}
                        delete={() => this.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) =>
                            this.changeWithInputState(event, index)
                        }
                    />
                );
            });
        }

        return (
            <div className="App">
                <h1>Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button>
                {books}
            </div>
        );
    }
}
export default App;
