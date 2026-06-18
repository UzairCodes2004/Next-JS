import Image from "next/image";
import Link from "next/link"
import ProductCard from "./components/ProductCard";
import AddToCart from "./components/AddToCart";
import HomePage from "./home/page";
import ButtonReference from "./blog/Button";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <div>
        
       {/* Nav & Routers  
       <h1>Hello World</h1>
      <ProductCard />
       <Link href="/home">Home</Link>
       <Link href="/blog">Blog</Link> */}

       {/* Post fetching and like button
        <Link href="blog">Blog </Link> */}
       
        <Link href="/users">Users</Link>

       {/* <Link href="/products">Products</Link> */}
       </div>
      </main>
    </div>
  );
}
