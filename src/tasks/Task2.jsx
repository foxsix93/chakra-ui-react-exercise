import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Task1 from "./Task1"; 

const Task2 = ({ properties }) => {
  return (
    <SimpleGrid columns={[1, 2, 4]} gap={14}>
      {properties.map((property, index) => (
        <Task1 key={index} property={property} />
      ))}
    </SimpleGrid>
  );
};

export default Task2;
