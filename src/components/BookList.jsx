// import { Component } from 'react'
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = ({ books }) => {
  // state = {
  //   searchQuery: '',
  //   selectedBook: null,
  // }

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };

  // render()

  return (
    <>
      <Row>
        <Col xs={12} sm={5} md={7} lg={8} xl={9}>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={4} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="g-2 mt-3">
            {books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={12} md={6} lg={4} xl={3} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={selectedBook}
                    changeSelectedBook={changeSelectedBook}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={8} sm={7} md={5} lg={4} xl={3}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
