import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM"}
      <MovieCard title={title} genres={genresArr} />
    </div>
  );
}

export default App;
