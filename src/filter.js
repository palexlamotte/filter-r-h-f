import { Box, Text, Input, Button } from "@chakra-ui/react";
import React from "react";

export const Filter = ({ onSubmit, handleSubmit, register, clearForm }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Text>FirstName</Text>
        <Input {...register("firstName")} width="300px"></Input>
        <Text>LastName</Text>
        <Input {...register("lastName")} width="300px"></Input>
        <Button type="submit">Ok</Button>
        <Button onClick={clearForm}>Clear</Button>
      </Box>
    </form>
  );
};
