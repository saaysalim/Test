import React, { useState } from 'react';
import './CMS.css'
interface Book {
  id: number;
  title: string;
  author: string;
  summary: string;
}
interface BookFormProps {
  onAddBook: (book: Book) => void;
}
const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
  // Local state for form fields
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddBook({ id, title, author, summary });
    // Reset form fields
    setId(0);
    setTitle('');
    setAuthor('');
    setSummary('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>

      <label>
        ID:
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          required
        />
      </label>

      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>

      <label>
        Summary:
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add Book</button>
    </form>
  );
};

const LibraryManager: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddBook = (newBook: Book) => {
    setBooks(prevBooks => [...prevBooks, newBook]);
  };
  return (
    <div>
      <h1>Library Management System</h1>
      <BookForm onAddBook={handleAddBook} />
      {/* Other components will be here, such as BookList */}
    </div>
  );
};

export default LibraryManager;
