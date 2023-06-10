
import React from 'react';
import { useDispatch } from 'react-redux';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch({ type: 'SET_VALUE', payload: value });
  };

  return (
    <div>
      <input className='border border-gray-500' type="text" onChange={handleInputChange} />
    </div>
  );
};

export default ComponentB;
