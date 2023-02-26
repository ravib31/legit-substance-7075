import {
  Button,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct, } from "../../../Redux/Product/action";
import AdminProductShowCard from "./AdminProductShowCard";


// const product =[
//   {
//     "id": 1,
//     "image": "https://images.bewakoof.com/t640/men-s-black-the-panda-way-oversize-fit-full-sleeve-t-shirt-580633-1676876417-1.jpg",
//     "title": "Men's Black The Panda Way Graphic Printed Oversized T-shirt",
//     "discountedPrice": 699,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹639",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 2,
//     "image": "https://images.bewakoof.com/t640/men-s-purple-justice-league-society-graphic-printed-oversized-t-shirt-581274-1676971303-1.jpg",
//     "title": "Men's Purple Justice League Society Graphic Printed Oversized T-shirt",
//     "discountedPrice": 499,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹459",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 3,
//     "image": "https://images.bewakoof.com/t640/men-s-maroon-chainsaw-man-graphic-printed-oversized-t-shirt-581386-1677044901-1.jpg",
//     "title": "Men's Maroon Chainsaw Man Graphic Printed Oversized T-shirt",
//     "discountedPrice": 499,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹459",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.5
//   },
//   {
//     "id": 4,
//     "image": "https://images.bewakoof.com/t640/men-s-black-chainsaw-man-graphic-printed-oversized-t-shirt-580774-1677064596-1.jpg",
//     "title": "Men's Black Chainsaw Man Graphic Printed Oversized T-shirt",
//     "discountedPrice": 699,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹639",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.3
//   },
//   {
//     "id": 5,
//     "image": "https://images.bewakoof.com/t640/men-s-black-chainsaw-man-graphic-printed-t-shirt-581232-1676898338-1.jpg",
//     "title": "Men's Black Chainsaw Man Graphic Printed T-shirt",
//     "discountedPrice": 399,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹369",
//     "fit": "DESIGN OF THE WEEK",
//     "rating": 4.3
//   },
//   {
//     "id": 6,
//     "image": "https://images.bewakoof.com/t640/men-s-blue-justice-league-society-sleeve-t-shirt-580630-1676869549-1.jpg",
//     "title": "Men's Blue Justice League Society Graphic Printed Oversized T-shirt",
//     "discountedPrice": 699,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹639",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 7,
//     "image": "https://images.bewakoof.com/t640/men-s-brown-justice-league-society-sleeve-t-shirt-580619-1676869337-1.jpg",
//     "title": "Men's Brown Justice League Society Graphic Printed Oversized T-shirt",
//     "discountedPrice": 699,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹639",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.4
//   },
//   {
//     "id": 8,
//     "image": "https://images.bewakoof.com/t640/men-s-grey-old-school-t-shirt-580993-1676885189-1.jpg",
//     "title": "Men's Grey Old School Graphic Printed T-shirt",
//     "discountedPrice": 399,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹369",
//     "fit": "DESIGN OF THE WEEK",
//     "rating": 4.5
//   },
//   {
//     "id": 9,
//     "image": "https://images.bewakoof.com/t640/men-s-blue-the-panda-way-oversized-t-shirt-580637-1676876264-1.jpg",
//     "title": "Men's Blue The Panda Way Graphic Printed Oversized T-shirt",
//     "discountedPrice": 499,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹459",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.4
//   },
//   {
//     "id": 10,
//     "image": "https://images.bewakoof.com/t640/men-s-red-old-school-graphic-printed-oversized-plus-size-t-shirt-581272-1676971229-1.jpg",
//     "title": "Men's Red Old School Graphic Printed Oversized Plus Size T-shirt",
//     "discountedPrice": 599,
//     "actualPrice": "₹1399",
//     "loyaltyPrice": "₹549",
//     "fit": "PLUS SIZE",
//     "rating": 4.5
//   },
//   {
//     "id": 11,
//     "image": "https://images.bewakoof.com/t640/men-s-blue-chainsaw-man-graphic-printed-oversized-plus-size-t-shirt-581271-1676971266-1.jpg",
//     "title": "Men's Blue Chainsaw Man Graphic Printed Oversized Plus Size T-shirt",
//     "discountedPrice": 599,
//     "actualPrice": "₹1399",
//     "loyaltyPrice": "₹549",
//     "fit": "PLUS SIZE",
//     "rating": 4.6
//   },
//   {
//     "id": 12,
//     "image": "https://images.bewakoof.com/t640/men-s-blue-old-school-oversize-fit-full-sleeve-t-shirt-580991-1676885267-1.jpg",
//     "title": "Men's Blue Old School Graphic Printed Oversized T-shirt",
//     "discountedPrice": 699,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹639",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.7
//   },
//   {
//     "id": 13,
//     "image": "https://images.bewakoof.com/t640/men-s-blue-chainsaw-man-sleeve-t-shirt-580629-1676869422-1.jpg",
//     "title": "Men's Blue Chainsaw Man Graphic Printed Oversized T-shirt",
//     "discountedPrice": 699,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹639",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 14,
//     "image": "https://images.bewakoof.com/t640/men-s-grey-old-school-full-sleeve-t-shirt-580631-1676869591-1.jpg",
//     "title": "Men's Grey Old School Graphic Printed T-shirt",
//     "discountedPrice": 449,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹419",
//     "fit": "DESIGN OF THE WEEK",
//     "rating": 3.8
//   },
//   {
//     "id": 15,
//     "image": "https://images.bewakoof.com/t640/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg",
//     "title": "Men's Black Gohan Graphic Printed T-shirt",
//     "discountedPrice": 449,
//     "actualPrice": "₹999",
//     "loyaltyPrice": "₹409",
//     "fit": "",
//     "rating": 3.9
//   },
//   {
//     "id": 16,
//     "image": "https://images.bewakoof.com/t640/cream-men-s-half-sleeves-shirt-348535-1655834980-1.jpg",
//     "title": "Men's Cream Shirt",
//     "discountedPrice": 529,
//     "actualPrice": "₹1699",
//     "loyaltyPrice": "₹489",
//     "fit": "",
//     "rating": 4.3
//   },
//   {
//     "id": 17,
//     "image": "https://images.bewakoof.com/t640/aop-mandarin-collar-full-sleeve-shirt-364799-1656142394-1.jpg",
//     "title": "AOP Mandarin Collar Full Sleeve Shirt",
//     "discountedPrice": 389,
//     "actualPrice": "₹1599",
//     "loyaltyPrice": "₹359",
//     "fit": "PLUS SIZE",
//     "rating": 4.5
//   },
//   {
//     "id": 18,
//     "image": "https://images.bewakoof.com/t640/men-s-orange-tape-shirt-317831-1675057118-1.jpg",
//     "title": "Men's Orange Tape Shirt",
//     "discountedPrice": 551,
//     "actualPrice": "₹1499",
//     "loyaltyPrice": "₹509",
//     "fit": "",
//     "rating": 4.4
//   },
//   {
//     "id": 19,
//     "image": "https://images.bewakoof.com/t640/men-s-grey-roman-printed-slim-fit-shirt-567667-1672985364-1.jpg",
//     "title": "Men's Grey Roman Printed Slim Fit Shirt",
//     "discountedPrice": 1099,
//     "actualPrice": "₹2598",
//     "loyaltyPrice": "₹1039",
//     "fit": "SLIM FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 20,
//     "image": "https://images.bewakoof.com/t640/men-s-linen-color-block-half-sleeves-shirt-362763-1656176753-1.jpg",
//     "title": "Men's Blue Color Block Shirt",
//     "discountedPrice": 743,
//     "actualPrice": "₹1599",
//     "loyaltyPrice": "₹679",
//     "fit": "RELAXED FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 21,
//     "image": "https://images.bewakoof.com/t640/act-smart-men-s-black-slim-fit-shirt-580337-1676293605-1.jpg",
//     "title": "Men's Black Slim Fit Shirt",
//     "discountedPrice": 699,
//     "actualPrice": "₹1999",
//     "loyaltyPrice": "₹659",
//     "fit": "SLIM FIT",
//     "rating": 4.5
//   },
//   {
//     "id": 22,
//     "image": "https://images.bewakoof.com/t640/men-s-grey-striped-slim-fit-shirt-567468-1672748690-1.jpg",
//     "title": "Men's Grey Striped Slim Fit Shirt",
//     "discountedPrice": 699,
//     "actualPrice": "₹1999",
//     "loyaltyPrice": "₹659",
//     "fit": "SLIM FIT",
//     "rating": 4.3
//   },
//   {
//     "id": 23,
//     "image": "https://images.bewakoof.com/t640/men-s-blue-checked-oversized-plus-size-shirt-577515-1675170659-1.jpg",
//     "title": "Men's Blue Checked Plus Size Shirt",
//     "discountedPrice": 1099,
//     "actualPrice": "₹2199",
//     "loyaltyPrice": "₹1039",
//     "fit": "PLUS SIZE",
//     "rating": 4.3
//   },
//   {
//     "id": 24,
//     "image": "https://images.bewakoof.com/t640/snitch-men-s-blue-zap-geometric-printed-slim-fit-shirt-571329-1674474397-1.jpg",
//     "title": "Men's Blue Zap Geometric Printed Slim Fit Shirt",
//     "discountedPrice": 999,
//     "actualPrice": "₹1998",
//     "loyaltyPrice": "₹949",
//     "fit": "SLIM FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 25,
//     "image": "https://images.bewakoof.com/t640/snitch-men-s-black-sequence-tuxe-embellished-slim-fit-shirt-571317-1674473654-1.jpg",
//     "title": "Men's Black Sequence Tuxedo Embellished Slim Fit Shirt",
//     "discountedPrice": 1199,
//     "actualPrice": "₹2998",
//     "loyaltyPrice": "₹1139",
//     "fit": "SLIM FIT",
//     "rating": 4.4
//   },
//   {
//     "id": 26,
//     "image": "https://images.bewakoof.com/t640/manaca-men-s-blue-shirt-580545-1676463826-1.jpg",
//     "title": "Men's Blue Shirt",
//     "discountedPrice": 899,
//     "actualPrice": "₹1899",
//     "loyaltyPrice": "₹849",
//     "fit": "",
//     "rating": 4.5
//   },
//   {
//     "id": 27,
//     "image": "https://images.bewakoof.com/t640/light-grey-zipper-jogger-321136-1655751312-1.jpg",
//     "title": "Men's Grey Joggers",
//     "discountedPrice": 749,
//     "actualPrice": "₹1299",
//     "loyaltyPrice": "₹689",
//     "fit": "",
//     "rating": 4.4
//   },
//   {
//     "id": 28,
//     "image": "https://images.bewakoof.com/t640/black-solid-joggers-aw-21-364890-1656188913-1.jpg",
//     "title": "Men's Black Joggers",
//     "discountedPrice": 897,
//     "actualPrice": "₹1899",
//     "loyaltyPrice": "₹829",
//     "fit": "",
//     "rating": 4.5
//   },
//   {
//     "id": 29,
//     "image": "https://images.bewakoof.com/t640/men-s-black-oversized-jogger-516604-1669351564-1.jpg",
//     "title": "Men's Black Oversized Jogger",
//     "discountedPrice": 1341,
//     "actualPrice": "₹2299",
//     "loyaltyPrice": "₹1229",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 30,
//     "image": "https://images.bewakoof.com/t640/jet-black-casual-jogger-pant-293063-1660652156-1.jpg",
//     "title": "Men's Black Casual Joggers",
//     "discountedPrice": 899,
//     "actualPrice": "₹999",
//     "loyaltyPrice": "₹819",
//     "fit": "",
//     "rating": 4.7
//   },
//   {
//     "id": 31,
//     "image": "https://images.bewakoof.com/t640/mens-solid-joggers-516482-1663668170-1.jpg",
//     "title": "Men's Purple Joggers",
//     "discountedPrice": 866,
//     "actualPrice": "₹2149",
//     "loyaltyPrice": "₹799",
//     "fit": "",
//     "rating": 4.6
//   },
//   {
//     "id": 32,
//     "image": "https://images.bewakoof.com/t640/charcoal-grey-jogger-pants-with-zipper-321137-1656184057-1.jpg",
//     "title": "Men's Charcoal Grey Joggers",
//     "discountedPrice": 899,
//     "actualPrice": "₹1299",
//     "loyaltyPrice": "₹829",
//     "fit": "",
//     "rating": 3.8
//   },
//   {
//     "id": 33,
//     "image": "https://images.bewakoof.com/t640/men-s-blue-joggers-451622-1660651715-1.jpg",
//     "title": "Men's Teal Blue Joggers",
//     "discountedPrice": 897,
//     "actualPrice": "₹1599",
//     "loyaltyPrice": "₹829",
//     "fit": "",
//     "rating": 3.9
//   },
//   {
//     "id": 34,
//     "image": "https://images.bewakoof.com/t640/navy-blue-zipper-jogger-321139-1655747796-1.jpg",
//     "title": "Men's Blue Joggers",
//     "discountedPrice": 899,
//     "actualPrice": "₹1299",
//     "loyaltyPrice": "₹829",
//     "fit": "",
//     "rating": 4.3
//   },
//   {
//     "id": 35,
//     "image": "https://images.bewakoof.com/t640/men-s-rose-pink-solid-oversized-fit-cargo-jogger-552879-1672295701-1.jpg",
//     "title": "Men's Pink Oversized Cargo Joggers",
//     "discountedPrice": 986,
//     "actualPrice": "₹2199",
//     "loyaltyPrice": "₹909",
//     "fit": "",
//     "rating": 4.5
//   },
//   {
//     "id": 36,
//     "image": "https://images.bewakoof.com/t640/navy-blue-casual-jogger-pant-293071-1655748181-1.jpg",
//     "title": "Men's Blue Casual Joggers",
//     "discountedPrice": 899,
//     "actualPrice": "₹999",
//     "loyaltyPrice": "₹819",
//     "fit": "",
//     "rating": 4.4
//   },
//   {
//     "id": 37,
//     "image": "https://images.bewakoof.com/t640/men-s-aop-side-panel-binding-joggger-516606-1667398428-1.jpg",
//     "title": "Men's Black AOP Side Panel Oversized Binding Joggger",
//     "discountedPrice": 863,
//     "actualPrice": "₹2449",
//     "loyaltyPrice": "₹799",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.6
//   },
//   {
//     "id": 38,
//     "image": "https://images.bewakoof.com/t640/jet-black-plus-size-casual-jogger-pants-324701-1655751335-1.jpg",
//     "title": "Men's Black Plus Size Casual Joggers",
//     "discountedPrice": 799,
//     "actualPrice": "₹1299",
//     "loyaltyPrice": "₹739",
//     "fit": "PLUS SIZE",
//     "rating": 4.6
//   },
//   {
//     "id": 39,
//     "image": "https://images.bewakoof.com/t640/men-s-black-logo-b-boy-printed-oversize-fit-joggers-554330-1670480234-1.jpg",
//     "title": "Men's Black Logo B-Boy Typography Oversized Joggers",
//     "discountedPrice": 855,
//     "actualPrice": "₹2449",
//     "loyaltyPrice": "₹799",
//     "fit": "OVERSIZED FIT",
//     "rating": 4.5
//   },
//   {
//     "id": 40,
//     "image": "https://images.bewakoof.com/t640/jet-black-casual-jogger-pants-with-zipper-321141-1655750994-1.jpg",
//     "title": "Men's Black Zipper Casual Joggers",
//     "discountedPrice": 1247,
//     "actualPrice": "₹1299",
//     "loyaltyPrice": "₹1129",
//     "fit": "",
//     "rating": 4.3
//   },
//   {
//     "id": 41,
//     "image": "https://images.bewakoof.com/t640/men-s-sky-blue-cotton-jogger-pants-330846-1664197182-1.jpg",
//     "title": "Men's Sky Blue Joggers",
//     "discountedPrice": 719,
//     "actualPrice": "₹1699",
//     "loyaltyPrice": "₹659",
//     "fit": "",
//     "rating": 4.3
//   },
//   {
//     "id": 42,
//     "image": "https://images.bewakoof.com/t640/dark-grey-casual-jogger-pant-293066-1660652872-1.jpg",
//     "title": "Men's Grey Casual Joggers",
//     "discountedPrice": 749,
//     "actualPrice": "₹999",
//     "loyaltyPrice": "₹689",
//     "fit": "",
//     "rating": 4.6
//   },
//   {
//     "id": 43,
//     "image": "https://images.bewakoof.com/t640/feel-good-lilac-solid-joggers-454663-1655751717-1.jpg",
//     "title": "Men's Purple Feel Good Joggers",
//     "discountedPrice": 850,
//     "actualPrice": "₹1599",
//     "loyaltyPrice": "₹779",
//     "fit": "",
//     "rating": 4.3
//   },
//   {
//     "id": 44,
//     "image": "https://images.bewakoof.com/t640/navy-blue-plus-size-casual-jogger-pants-324702-1655752010-1.jpg",
//     "title": "Men's Blue Plus Size Casual Joggers",
//     "discountedPrice": 1020,
//     "actualPrice": "₹1299",
//     "loyaltyPrice": "₹939",
//     "fit": "PLUS SIZE",
//     "rating": 4.4
//   },
//   {
//     "id": 45,
//     "image": "https://images.bewakoof.com/t640/men-s-purple-joggers-451591-1656156783-1.jpg",
//     "title": "Men's Purple Joggers",
//     "discountedPrice": 680,
//     "actualPrice": "₹1599",
//     "loyaltyPrice": "₹629",
//     "fit": "",
//     "rating": 4.3
//   },
//   {
//     "id": 46,
//     "image": "https://images.bewakoof.com/t640/men-s-green-camouflage-printed-training-joggers-455133-1664197575-1.jpg",
//     "title": "Men's Green Camouflage Printed Training Joggers",
//     "discountedPrice": 868,
//     "actualPrice": "₹2099",
//     "loyaltyPrice": "₹799",
//     "fit": "",
//     "rating": 4.1
//   },
//   {
//     "id": 47,
//     "image": "https://images.bewakoof.com/t640/moss-green-casual-jogger-pant-293068-1656193408-1.jpg",
//     "title": "Men's Charcoal Grey Casual Joggers",
//     "discountedPrice": 899,
//     "actualPrice": "₹999",
//     "loyaltyPrice": "₹819",
//     "fit": "",
//     "rating": 4.4
//   }
//  ]

const AdminGetProduct = () => {
  const { product } = useSelector(
    (store) => store.menReducer
  );

  console.log(product)

  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  // let total = Math.ceil(680 / 20);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div>
      <Heading textAlign={"center"}>Product</Heading>
      <Flex justifyContent={"flex-end"}>
        <Button
          variant={"solid"}
          bg={"green.700"}
          color={"white"}
          _hover={{
            bg: "#02B862",
          }}
          mb={"20px"}
          leftIcon={<MdAddCircleOutline />}
        >
          <Link to={"/admin/addProduct"}>Add Product</Link>
        </Button>
      </Flex>
      <TableContainer
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        bg={"white"}
        mt={"25px"}
        textAlign="center"
      >
        <Table variant={"simple"}>
          <Thead bg={"cyan.300"} fontWeight={"bold"}>
            <Tr>
              <Th>Image</Th>
              <Th>Product Name</Th>
              <Th>Product Price</Th>
              {/* <Th>Stocks</Th> */}
              <Th>Status</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product.map((item) => (
              <AdminProductShowCard
                key={item.id}
                id={item.id}
                img={item.image[0]}
                title={item.title}
                price={item.discountedPrice}
                stocks={10}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <Flex display={"flex"} overflowY={"scroll"} align={"center"} justifyContent={"center"} p={"25px"}>
        <Pagination
          totalPage={total}
          handlePageChange={(page) => setPage(page)}
          currentPage={page}
        />
      </Flex> */}
    </div>
  );
};

export default AdminGetProduct;
