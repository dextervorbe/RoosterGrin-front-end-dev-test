import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, text} = people[index];

  const checkNumber = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    else if(number < 0){
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }) 
  }



  return<article className="review">
      <h3 className="author">{name}</h3>
      <div className='flex'>
      <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
      <p className="info">{text}</p>
      <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>  
      </div>
     
  </article>;
};

export default Review;