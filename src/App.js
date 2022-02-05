// import React, { useState, useEffect } from "react";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { FaChevronRight, FaQuoteRight } from "react-icons/fa";
// import data from "./data";
// function App() {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   // useEffect to slide small and greater values from indexes
//   useEffect(() => {
//     let lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, people]);
//   // useEffect and cleanup function compulsory here for autoslide perefct functionality
//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 4000);
//     return () => {
//       clearInterval(slider);
//     };
//   }, [index]);

//   return (
//     <section className="section">
//       <div className="title">
//         <h2>
//           <span>/</span> reviews
//         </h2>
//       </div>
//       <div className="section-center">
//         {people.map((person, personIndex) => {
//           const { id, name, title, quote, image } = person;
//           // more stuff coming for nextSlide, activeSlide, lastSlide
//           //here position have clasname which is used in article
//           let position = "nextSlide";
//           if (personIndex === index) {
//             position = "activeSlide";
//           }
//           if (
//             personIndex === index - 1 ||
//             (index === 0 && personIndex === people.length - 1)
//           ) {
//             position = "lastSlide";
//           }
//           return (
//             <article className={position} key={id}>
//               <img src={image} alt={name} className="person-img" />
//               <h4>{name}</h4>
//               <p>{title}</p>
//               <p className="text">{quote}</p>
//               <FaQuoteRight className="icon"></FaQuoteRight>
//             </article>
//           );
//         })}
//         <button className="prev" onClick={() => setIndex(index - 1)}>
//           <FiChevronLeft></FiChevronLeft>
//         </button>
//         <button className="next" onClick={() => setIndex(index + 1)}>
//           <FiChevronRight></FiChevronRight>
//         </button>
//       </div>
//     </section>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }
    if (index > people.length - 1) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, title, quote, name } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h3>{name}</h3>
              <h4>{title}</h4>
              <p className="quote">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  );
};
export default App;
