import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoad } from '../../Redux/Helper/action';

function Pokemon() {
  const dispatch = useDispatch();
  const { pokemonSuccessResponse } = useSelector(state => state)

  useEffect(() => {
    dispatch(setLoad());
  }, [dispatch]);

  useEffect(() => {
    console.log(pokemonSuccessResponse)
  }, [pokemonSuccessResponse]);

  return (
    <div>
      {
        
      }
    </div>
  )
}

export default Pokemon