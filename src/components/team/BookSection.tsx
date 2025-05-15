
import React from 'react';
import BookGrid from '../books/BookGrid';

const BookSection = () => {
  // Sample books (replace these with your Amazon affiliate links + preferred books later)
  const books = [
    {
      title: "How Bad Are Bananas?",
      author: "Mike Berners-Lee",
      image: "https://m.media-amazon.com/images/I/51RedUjuGcL._SY466_.jpg",
      link: "https://amzn.to/44F0Gmz",
      blurb: "A practical, witty guide to the real carbon footprints of everything from emails to bananas—essential reading for the eco-conscious.",
    },
    {
      title: "scary Smart",
      author: "Mo Gawdat",
      image: "https://m.media-amazon.com/images/I/6113CPPU2FL._SL1500_.jpg",
      link: "https://amzn.to/3F67SO8",
      blurb: "Mo Gawdat shows what we can all do now to teach ourselves and our machines how to live better.",
    },
    {
      title: "Net Zero: How We Stop Causing Climate Change",
      author: "Dieter Helm",
      image: "https://m.media-amazon.com/images/I/71dSaFSt0EL._SY466_.jpg",
      link: "https://amzn.to/4dhrUSh",
      blurb: "Helm's straight-talking, expert vision for cutting carbon emissions in Britain and beyond.",
    },
    {
      title: "Sustainable Web Design",
      author: "Tom Greenwood",
      image: "https://m.media-amazon.com/images/I/51X4fstQ4XL._SY522_.jpg",
      link: "https://amzn.to/43kdGM8",
      blurb: "A practical path to faster, more carbon-efficient websites that are not only better for the planet, but better for our users.",
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
          <h2 className="text-3xl font-display font-semibold mb-8 text-center gradient-text">Books Every Digital Agency Should Be Reading</h2>
          <h4 className="text-3xl font-display font-semibold mb-8 text-center gradient-text">But probably isn't ...and books we just love</h4>
          <BookGrid books={books} />
        </div>
      </div>
    </section>
  );
};

export default BookSection;
