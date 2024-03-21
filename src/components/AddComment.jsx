import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin }) => {
  // state = {
  //   comment: {
  //     comment: "",
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // };

  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     });
  //   }
  // }

  useEffect(() => {
    setComment({
      ...comment,
      elementId: asin,
    });
  }, [asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI1OGUzY2Y2MTAwMzAwMTljYjk5OTQiLCJpYXQiOjE3MTA3NzIxNDYsImV4cCI6MTcxMTk4MTc0Nn0.LyZS7K4Q2SIg5FhBzqt_NuQyvLQwdqLpohtjh-BB0Z0",
          },
        }
      );
      if (response.ok) {
        alert("Recensione inviata!");
        setComment({
          comment: "",
          rate: 1,
          elementId: asin,
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) => {
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     comment: e.target.value,
              //   },
              // })
              setComment({
                ...comment,
                comment: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) => {
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     rate: e.target.value,
              //   },
              // })
              setComment({
                ...comment,
                rate: e.target.value,
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
