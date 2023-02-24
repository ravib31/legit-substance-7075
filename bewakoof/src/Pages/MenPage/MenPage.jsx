import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProduct } from '../../Redux/Product/action';
import "./MenPage.css";
import MenPageCard from './MenPageCard';
import Sidebar from './Sidebar';

const MenPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const menproduct = useSelector((store) => {
    return store.menReducer.menproduct;
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
    dispatch(getProduct(obj))
  },[location.search]);

  return (
    <div className='product-div'>
      <div className='sidebar' >
   <Sidebar />
      </div>
      <div className='product-list'>

    {menproduct.length > 0 && menproduct.map((el) => {
      return <MenPageCard key={el.id} menproduct={el} />
    })}
    </div>

    </div>
  )
}

export default MenPage;