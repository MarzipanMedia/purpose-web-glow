
import React from 'react';
import BookGrid from '../books/BookGrid';

const BookSection = () => {
  // Sample books (replace these with your Amazon affiliate links + preferred books later)
  const books = [
    {
      title: "How Bad Are Bananas?",
      author: "Mike Berners-Lee",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://www.amazon.co.uk/How-Bad-Are-Bananas-Carbon/dp/1788163816?tag=youraffiliatetag-21",
      blurb: "A practical, witty guide to the real carbon footprints of everything from emails to bananas—essential reading for the eco-conscious.",
    },
    {
      title: "The Future We Choose",
      author: "Christiana Figueres & Tom Rivett-Carnac",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://www.amazon.co.uk/Future-We-Choose-Surviving-Crisis/dp/1786580364?tag=youraffiliatetag-21",
      blurb: "Optimism and real-world solutions from the architects of the Paris Agreement—how to tackle climate change together.",
    },
    {
      title: "Net Zero: How We Stop Causing Climate Change",
      author: "Dieter Helm",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "https://www.amazon.co.uk/Net-Zero-Stop-Causing-Climate/dp/000840449X?tag=youraffiliatetag-21",
      blurb: "Helm's straight-talking, expert vision for cutting carbon emissions in Britain and beyond.",
    },
    {
      title: "Digital Minimalism",
      author: "Cal Newport",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      link: "https://www.amazon.co.uk/Digital-Minimalism-Choosing-Focused-Noisy/dp/024145357X?tag=youraffiliatetag-21",
      blurb: "How to reclaim your attention and create a more intentional, sustainable relationship with technology.",
    },
    {
      title: "Designing for Sustainability",
      author: "Tim Frick",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "https://www.amazon.co.uk/Designing-Sustainability-Intentional-Technology-Ecology/dp/1491920172?tag=youraffiliatetag-21",
      blurb: "The definitive book for sustainable web practitioners—eco-friendly design and digital best practices.",
    },
    {
      title: "The Day the World Stops Shopping",
      author: "JB MacKinnon",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://www.amazon.co.uk/Day-World-Stops-Shopping-Possibilities/dp/178816510X?tag=youraffiliatetag-21",
      blurb: "A thought experiment on conscious consumption—what would really happen if we all bought less?",
    },
  ];

  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(90deg, #fdfcfb 0%, #e2d1c3 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: "linear-gradient(0deg, rgba(186,230,253,0.15) 50%, rgba(203,213,225,0.25) 100%)",
          opacity: 0.85,
          transition: "opacity 0.4s",
        }}
      ></div>
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-8 text-center gradient-text">Books I'm Currently Reading</h2>
          <BookGrid books={books} />
        </div>
      </div>
    </section>
  );
};

export default BookSection;
