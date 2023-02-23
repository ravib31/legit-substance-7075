import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../Redux/Product/action';
import { store } from '../../Redux/store';
import MenPageCard from './MenPageCard';

const MenPage = () => {
  const dispatch = useDispatch();
  const menproduct = useSelector((store) => {
    return store.menReducer.menproduct;
  });

  console.log(menproduct);
  useEffect(() => {
    dispatch(getProduct)
  },[]);

  return (
    <div className='product-list'>
    {menproduct.length > 0 && menproduct.map((el) => {
      return <MenPageCard key={el.id} menproduct={el} />
    })}

    </div>
  )
}

export default MenPage;