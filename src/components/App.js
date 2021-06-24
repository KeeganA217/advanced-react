import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

export default App;
