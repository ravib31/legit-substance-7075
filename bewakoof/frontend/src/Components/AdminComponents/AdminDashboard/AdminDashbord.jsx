import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContectChart from "../chart/ContectChart";
import ContectChartBar from "../chart/ContectChartBar";
import ContectChartMultiaxis from "../chart/ContectChartMultiaxis";
// import { adminProduct } from "../../../Redux/AdminShowProduct/adminShowProduct.action";
import { Navigate } from "react-router-dom";

const AdminDashbord = () => {
 
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(adminProduct());
  // }, []);
  let category = ["Men","Women"];
  // let subCategory = [];
  // let stokes = [];
  
  

  function ContectData(data) {
    let obj = {};
    let objkey = [];
    let objvalue = [];

    for (let i = 0; i < data.length; i++) {
      if (obj[data[i]] === undefined) {
        obj[data[i]] = 1;
      } else {
        obj[data[i]]++;
      }
    }
    for (let key in obj) {
      objvalue.push(obj[key]);
      objkey.push(key);
    }
    return [objvalue, objkey];
  }
  
  let ContectNum = ContectData(category);
  // let subContectNum = ContectData(subCategory);
  // let stokesNum = ContectData(stokes);

  console.log(ContectNum)

  // console.log(ContectNum);
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Dashboard
      </Heading>
      <SimpleGrid
        columns={[1]}
        alignItems={"center"}
        justifyContent={"center"}
        spacing="60px"
        bg={"white"}
        mt={6}
      >
        <Box width={"40%"} margin={"auto"} p={0}>
          <ContectChartMultiaxis
            name={"Total MainCategory"}
            label={"MainCategory"}
            color={["#10B981", "#EF4444"]}
            labels={ContectNum[1]}
            dataNum={ContectNum[0]}
          />
        </Box>
        
        <Box p={6} width={"100%"} alignContent={"center"}>
          <ContectChartBar
            name={"Total SubCategory"}
            label={"SubCategory"}
            color={["#10B981", "#F59E0B", "#4F46E5", "#3B82F6", "#EF4444"]}
            labels={ContectNum[1]}
            dataNum={ContectNum[0]}
          />
        </Box>
        
        {/* <Box p={6}>
          <ContectChart
            name={"Total Stocks"}
            label={"stoke"}
            color={"#3B82F6"}
            labels={stokesNum[1]}
            dataNum={stokesNum[0]}
          />
        </Box> */}
      </SimpleGrid>
    </div>
  );
};

export default AdminDashbord;
