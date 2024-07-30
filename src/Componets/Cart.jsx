import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import React from "react";
import { json } from "react-router-dom";
export default function Cart({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    if (item) {
      setCartItem(item);
      console.log(item);
    } else {
      setCartItem(cartItem);
    }
  }, [item]);
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <ul>
              {cartItem.map((i, index) => {
                return (
                  <li className="cart-item" key={index}>
                    <img src={i["image"]} alt="img" />
                    <Text fontSize="xs">{i["title"]}</Text>
                    <Text fontSize="xs">1</Text>
                    <Text fontSize="xs">${i["price"]}</Text>
                  </li>
                );
              })}
            </ul>
          </DrawerBody>

          <DrawerFooter justifyContent="space-between">
            <Text>Total: </Text>
            <Text>
              $
              {cartItem.reduce((acc, i) => {
                const p = parseFloat(i["price"]);
                return acc + p;
              }, 0)}
            </Text>
            <Button colorScheme="blue">Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
