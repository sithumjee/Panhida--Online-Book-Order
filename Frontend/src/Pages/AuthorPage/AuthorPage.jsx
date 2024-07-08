import React, { useState } from "react";
import FindAuthor from "../../Components/FindAuthor/FindAuthor";
import AuthorDisplay from "../../Components/AuthorDisplay/AuthorDisplay";

const AuthorPage = () => {
  const [authorName, setAuthorName] = useState("All");
  return (
    <div>
      <FindAuthor authorName={authorName} setAuthorName={setAuthorName} />
      <AuthorDisplay authorName={authorName} />
    </div>
  );
};

export default AuthorPage;
