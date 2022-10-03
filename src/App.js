import { useState } from "react";
import { CommentForm } from "./components/comment-form";
import "./App.css";

export const App = () => {
  const [comments, setComments] = useState({
    comments: [],
  });

  const handleSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="App">
      <CommentForm handleSubmit={handleSubmit} />
    </div>
  );
};
