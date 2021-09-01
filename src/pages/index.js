import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  //returned props gets passed in here as same as react componenets
  //Destructuring the props and pull out the products inside.
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto ">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //getServerSideProps() :- It will tell the Next.js that corresponding page page is not a static page and it has to do some calculations on the server side.

  //using server side rendering will benefit in pre loaded page meaning, the products are loaded already.

  //---whenever asynchronous call use await
  //---fetch is built in funtion.

  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  //whenever we get a response we need to get it back as .json :: res.jason()

  //--passing the data from the api to the component--
  //data comes from server to the borwser as something like a prop.

  return {
    props: {
      products,
      //this can be a key:value parir also(es6).
    },
  };
}

//GET >>>> https://fakestoreapi.com/products
