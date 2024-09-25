import PropTypes from 'prop-types';

const BookList = ({books, onView, onEdit, onDelete, onCreate}) => {
    return(
        <div className='book-list-container'>
            <h1 className='center'>Books</h1>
            <table className='book-table'>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) =>(
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td className='action-buttons'>
                                <button onClick={() => onView(book.id)}>View</button>
                                <button onClick={() => onEdit(book.id)}>Edit</button>
                                <button onClick={() => onDelete(book.id)}>Delete</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='button-container'>
                <button className='create-button' onClick={onCreate}>Create New Book</button>
            </div>
        </div>
    );
};

BookList.propTypes ={
    books: PropTypes.array.isRequired,
    onView: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
};

export default BookList;