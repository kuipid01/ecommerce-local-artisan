/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./product.scss";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
// import { sampleEcommerceProducts } from "../../constants";
import Card from "../../components/ProductCard/ProductCard";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// import { useQuery } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";
import { Link, useParams } from "react-router-dom";
// import Loader from "../../components/Loader/Loader";
// import { CartContext } from "../../contexts/CartContext"
import { motion } from "framer-motion";
import { Products } from "../../utils/constants";
const ProductPage = () => {
 
      
  const { id } = useParams();
//   const [toBedisplayed, setToBedisplayed] = useState(0);
//   const [newqty, setQty] = useState(1);
//   // Fetch the main product data
//   const {  isLoading, error,data: mainProductData } = useQuery({
//     queryKey: ["product", id],
//     queryFn: () =>
//       newRequest.get(`/products/single/${id}`).then((res) => res.data),
//   });
//   const handleIncreaseCartQty = (product) => {
   
//     setQty(p => p+1)
//     setCart((prevState) =>
//       prevState.map((item) =>
//         item._id === product._id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };
//   const handleDecreaseCartQty = (product) => {
//     setQty(p => p===1 ? 1: p-1)
//     setCart((prevState) =>
//       prevState.map((item) =>
//         item._id === product._id
//           ? { ...item, qty: item.qty === 1 ? item.qty : item.qty - 1 }
//           : item
//       )
//     );
//   };
//   // Fetch related products with the same category as the main product
//   const { data: relatedProductsData } = useQuery({
//     queryKey: ["relatedProducts", mainProductData?.category], // Use category as part of the query key
//     queryFn: () =>
//       newRequest
//         .get(`/products?category=${mainProductData?.category}`)
//         .then((res) => res.data),
//   });
//   const {cart,setCart} = useContext(CartContext)
 
// const handleCartAdd  = (product) => {
 
// const existingItem = cart.find((item) => item._id === product._id)
// if (existingItem) {
//   setCart(prevState => prevState.map((item) =>
//   item._id===product._id ? {...item, qty : item.qty+1} : item
//   ))
//  toast.success('Cart Item Increased Visit Cart to Checkout!', {
//       position: toast.POSITION.BOTTOM_LEFT,
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//       });
//   const ProductHere = cart.filter((item) => item._id === product._id);
// setQty(ProductHere[0].qty)
// }

// else{
//   setCart([{...product,qty:newqty}, ...cart])
//     toast.success('Added to cart Succesfully!', {
//       position: toast.POSITION.BOTTOM_LEFT,
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//       });
// }
// }
//   const thistProductQty = cart.map(item => {
//     if (item._id===mainProductData._id) {
//       if (item.qty) {
//         return item.qty
//       }
//       else return null 
//     }
//    else return null
//   })
//  console.log(thistProductQty)
//   if (isLoading || !id)  return <Loader/>
  return (
    <div className="singleProductContainer">
        {/* <ToastContainer /> */}
      <div className="containerdisplay">
        <div className="leftcontainer">
        <motion.div
            className="mainImage"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            // key={mainProductData?.images[toBedisplayed]}
          >
          
            <img src={Products[0].img} alt="img" />
          </motion.div>
        </div>
        <div className="rightContainer">
          <h1 className="title">{Products[0].name}</h1>
          <span className="price">#{Products[0].price}</span>
         
          <hr />
          <p className="description">
            Check out font air malenum
          </p>
          <div className="cart">
            <span className="productspan">  
            <p className="qty"
            >
            - </p>
            <p> 1 </p>
             
         
         
          <p
            className="qty"
          
          >
          +
          </p>
            </span> 
  
            <div className="addtocartproduct">Add to CArt</div>
          </div>
          <Link to='/newprofile/123'>
          <small style={{fontWeight:'bold',fontStyle:'italic',color:'red'}}>{Products[0].sellerName}</small>
          </Link>
        
          <div className="share">
            <AiOutlineFacebook />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </div>
        </div>
      </div>
      {/* <div className="imags">
        {mainProductData?.images?.map((image,index) => (
          <div  onClick={() => setToBedisplayed(index)} className="imageContainer" key={image}>
            <img src={image} alt="" />
          </div>
        ))}
      </div> */}
      <div className="description">
        <h1 className="title">Description</h1>
        <hr />
        <p> {Products[0]?.desc} </p>
      </div>

      <div className="relatedProducts">
        <h1 className="title">Related Products</h1>
        <hr />
        <div className="containe">
          {Products?.slice(0,10).map((product) => (
            <Card item={product} key={product.id} />
          ))}
        </div> 
      </div>
    </div>
  );
};

export default ProductPage;
