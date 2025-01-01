import React, {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import BookList from "./BookList";

import axios from "axios";

function App() {
  const [books,setBooks] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books} />
    </>
  );
}

export default App;
