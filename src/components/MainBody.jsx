import React, { useState } from "react";

const MainBody = () => {
  const [books, setBooks] = useState([]);
  let [isAllowed, setIsAllowed] = useState(true);

  const fetchBooks = async () => {
    const response = await fetch(
      `https://book-store-backend-strive.herokuapp.com/`
    );
    const data = await response.json();
  };

  return <div></div>;
};

export default MainBody;
