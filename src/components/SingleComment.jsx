import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI1OGUzY2Y2MTAwMzAwMTljYjk5OTQiLCJpYXQiOjE3MTA3NzIxNDYsImV4cCI6MTcxMTk4MTc0Nn0.LyZS7K4Q2SIg5FhBzqt_NuQyvLQwdqLpohtjh-BB0Z0",
          },
        }
      );
      if (response.ok) {
        alert("La recensione è stata elimata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      valutazione: <strong>{comment.rate}</strong>
      <br></br>
      Commento: <strong>{comment.comment}</strong>
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
