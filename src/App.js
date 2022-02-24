import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import dummy from "./dummy.json";
import { Filter } from "./filter";
import { useForm } from "react-hook-form";

function App() {
  const [dummyData, setDummyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    setDummyData(dummy);
    setFilteredData(dummy);
  }, []);

  const clearForm = () => {
    setFilteredData(dummyData);
    reset();
  };

  const onSubmit = (data) => {
    let filter = dummyData;
    if (!!data.firstName) {
      filter = dummyData.filter((x) =>
        x.firstName.toLowerCase().includes(data.firstName.toLowerCase())
      );
    }
    if (!!data.lastName) {
      filter = dummyData.filter((x) =>
        x.lastName.toLowerCase().includes(data.lastName.toLowerCase())
      );
    }
    setFilteredData(filter);
  };

  return (
    <Box>
      <Filter
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        clearForm={clearForm}
      />
      {filteredData.map((e) => (
        <Box key={e.id} backgroundColor={"gray.200"} width="300px">
          <Text>
            {e.firstName} {e.lastName}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default App;
