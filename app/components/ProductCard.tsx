 import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css'
 const ProductCard = () => {
   return (
    <>
     <div className={styles.card}>
       <AddToCart />
     </div>
     <div className='p-5 m-8 bg-sky-300 text-white-300 hover:bg-sky-500 ' >
        Tailwind CSS
     </div>
    </>
   )
}
 
 export default ProductCard
