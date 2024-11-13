import React, { useEffect, useState } from 'react';

const Cards = ({ title, author, publication_year }) => {
  return (
    <div style={{ height: 'fit-content', width: 'fit-content', padding: 10, margin: 20, border: '1px solid #ddd', borderRadius: 5 }}>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Publication Year:</strong> {publication_year}</p>
    </div>
  );
};

const Day7ce1 = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/books?limit=15')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  return (
    <section style={{ height: '100vh', width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'row' }}>
      {loading ? <p>Loading...</p> : books.map((val, i) => (
        <Cards
          key={i}
          title={val.title}
          author={val.author}
          publication_year={val.publication_year}
        />
      ))}
    </section>
  );
};

export default Day7ce1;
