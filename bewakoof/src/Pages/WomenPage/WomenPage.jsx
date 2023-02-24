import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import {  getWomenProduct } from '../../Redux/Product/action';
import "./WomenPage.css";
import WomenPageCard from './WomenPageCard';
import WomenSidebar from './WomenSidebar';

const WomenPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const womenproduct = useSelector((store) => {
    return store.womenReducer.womenproduct;
  });


let obj = {
  params:{
    category: searchParams.getAll("category"),
    fit: searchParams.getAll("fit"),
    _sort: searchParams.get("order") && "discountedPrice",
    _order:searchParams.get("order")
  }
};

  useEffect(() => {
    dispatch(getWomenProduct(obj))
  },[location.search]);



  return (
    <div className='product-div'>
      <div className='sidebar' >
   <WomenSidebar />
      </div>
      <div className='product-list'>

    {womenproduct.length > 0 && womenproduct.map((el) => {
      return <WomenPageCard key={el.id} womenproduct={el} />
    })}
    </div>

    </div>
  )
}

export default WomenPage;