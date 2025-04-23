
import React from "react";

interface Book {
  title: string;
  author: string;
  image: string;
  link: string;
  blurb: string;
}
interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book, i) => (
        <a
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          className="group rounded-xl overflow-hidden shadow transition-transform duration-300 bg-white/80 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 hover:scale-105 animate-fade-in"
          style={{ animationDelay: `${0.1 + (i % 3) * 0.1}s` }}
        >
          <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-lg mb-1 text-brandBlue dark:text-marzipan min-h-[2.3em]">{book.title}</h4>
            <p className="text-sm text-brandBlue/80 dark:text-marzipan mb-2">{book.author}</p>
            <p className="text-foreground/80 text-sm leading-relaxed">{book.blurb}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BookGrid;
