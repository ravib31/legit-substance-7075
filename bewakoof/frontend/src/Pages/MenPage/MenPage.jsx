import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMenProduct } from "../../Redux/Product/action";
import "./MenPage.css";
import MenPageCard from "./MenPageCard";
import Sidebar from "./Sidebar";
import Loader from "../../Layout/Loader";
import InitialLoader from "../../Layout/InitialLoader";
import { border } from "@chakra-ui/react";

const MenPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
 
  const location = useLocation();
  const { menproduct, isLoading } = useSelector((store) => store.menReducer);
  let obj = {
    params: {
      category: searchParams.getAll("category"),
      // fit: searchParams.getAll("fit"),
      sort: searchParams.get("sort"),
    },
  };

  useEffect(() => {
    dispatch(getMenProduct(obj.params));
  }, [dispatch, location.search, searchParams]);

  // if (initialLoading) {
  //   return <InitialLoader />;
  // }

  return (
    <div className="mne-section">
      <div className="men-Clothing">
        <h1>Men Clothing</h1>
      </div>
      <div>
        <div className="product-div">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="product-list" >
            {menproduct.length > 0 ? (
              menproduct.map((el) => (
                <React.Fragment key={el.id}>
                  {isLoading ? <Loader /> : <MenPageCard menproduct={el} />}
                </React.Fragment>
              ))
            ) : (
             
              <div  style={{width:"300%"}}>
                {<InitialLoader/>}
              </div>
             
            )} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenPage;
