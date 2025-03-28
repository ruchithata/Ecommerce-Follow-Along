import React, { useEffect, useState } from 'react';
import { Productcard } from '../Components/Product';


// const productdetails = [
//     {
//         image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
//         name: 'Product 1',
//         price: "100",
//         description: "new product",
//     },
//     {
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOrIHIncvVwcn86Yj1lG2no3rymRPhF1AQ&s',
//         name: 'Product 2',
//         price: "100",
//         description: "new product",
//     },
//     {
//         image: 'data:image/jpeg;base64,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',
//         name: 'Product 3',
//         price: "100",
//         description: "new product",
//     }
// ];


export const Home = () => {

  const [productdetails, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/product/get-products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data.products);
        setloading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        seterror(err.message);
        setloading(false);
      });
  }, []);


  return (
    <div className='w-full min-h-screen bg-neutral-800'>
    <div className='grid grid-cols-5 gap-4'>{
      productdetails.map((product,index) => {
        return (
            <>
            <Productcard key={index} {...product}/></>
        )
      })}</div></div>
    )
}

