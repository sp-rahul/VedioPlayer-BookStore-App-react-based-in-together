import React from "react";
import AuthorCard from "./AuthorCard";

export default function Author({ data, selectedAuthor, setSelectedAuthor }) {
  const authors = {};
  data.forEach((element) => {
    element.authors.forEach((author) => {
      authors[author.name] = authors[author.name]
        ? authors[author.name] + 1
        : 1;
    });
  });
  let authorList = [];
  for (let author in authors) {
    authorList.push({
      name: author,
      total: authors[author],
    });
  }
  return (
    <div>
      {authorList.map((author) => (
        <AuthorCard
          data={author}
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
        />
      ))}
    </div>
  );
}
