import { useEffect } from "react";
import Item from "./Item";
import Header from "./NavBar";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
function Products() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  function addItem(i) {
    const arr = [...item];
    arr.push(i);
    setItem(arr);
  }

  console.log(data);
  return (
    <>
      <div id="header"></div>
      <Header item={item}></Header>

      <Heading ml={59} mt={5}>
        {" "}
        Our Products
      </Heading>
      <div id="body">
        {data.map((item, index) => {
          return (
            <Item
              addItem={addItem}
              title={item.title}
              description={item.description}
              id={item.id}
              price={item.price}
              img={item.image}
              key={item.id}
            ></Item>
          );
        })}
      </div>
    </>
  );
}

export default Products;
