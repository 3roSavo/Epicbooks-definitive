import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYmNiNmIzOTczNDAwMTRkNWU4NmMiLCJpYXQiOjE2OTg2NzU4OTQsImV4cCI6MTY5OTg4NTQ5NH0.kW6L_XcK2zdnR5RHli3H2b0nveuREQfImQV6UpF--hk",
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  useEffect(() => {
    if (asin !== null) {
      // oppure   if(asin)
      const boooh = async () => {
        setIsLoading(true);

        try {
          let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/" + asin,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI1OGUzY2Y2MTAwMzAwMTljYjk5OTQiLCJpYXQiOjE3MTA3NzIxNDYsImV4cCI6MTcxMTk4MTc0Nn0.LyZS7K4Q2SIg5FhBzqt_NuQyvLQwdqLpohtjh-BB0Z0",
              },
            }
          );
          console.log(response);
          if (response.ok) {
            let comments = await response.json();
            setComments(comments);
            setIsLoading(false);
            setIsError(false);
            // this.setState({
            //   comments: comments,
            //   isLoading: false,
            //   isError: false,
            // });
          } else {
            // this.setState({ isLoading: false, isError: true });
            setIsLoading(false);
            setIsError(true);
          }
        } catch (error) {
          console.log(error);
          // this.setState({ isLoading: false, isError: true });
          setIsLoading(false);
          setIsError(true);
        }
      };
      boooh();
    }
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
