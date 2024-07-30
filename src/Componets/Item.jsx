import { useState } from "react";
import {
  Card,
  Heading,
  Box,
  Text,
  Stack,
  StackDivider,
  Divider,
  ButtonGroup,
  Button,
  Image,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

function Item({ addItem, description, title, price, id, img }) {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            h={300}
            src={img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button
              onClick={() =>
                addItem({ id: id, price: price, title: title, image: img })
              }
              variant="ghost"
              colorScheme="blue"
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default Item;
