import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  // state = {
  //   selected: false,
  // }

  return (
    <>
      <Card
        className="shadow"
        // onClick={() => this.setState({ selected: !this.state.selected })}
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img className="" src={book.img} />
        <Card.Body>
          <h6>{book.title}</h6>
          <div>Price: {book.price} €</div>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
