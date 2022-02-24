import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import dummy from "./dummy.json";
import { Filter } from "./filter";
import { useForm } from "react-hook-form";

function App() {
  //list of all users. It will never change.
  const [dummyData, setDummyData] = useState([]);
  //list of users filtered, will change every time we press the "ok" button on the filter component
  const [filteredData, setFilteredData] = useState([]);

  //register => creates an objects with the things you will pass in the inputs. (see filter component)
  // ===> you can set default values to the register.
  // it will work this way :
  //_____________________
  // const { register } = useForm({
  //   defaultValues: {
  //     firstName: "bill",
  //     lastName: "luo",
  //     email: "bluebill1049@hotmail.com",
  //     isDeveloper: true
  //   }
  // })

  // <input name="firstName" ref={register} /> // ✅ working version
  //_________________________
  // handleSubmit => the name speak for itself
  // reset => reset the form by clearing the register.
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // fetch datas and put them into variables (useState)
    setDummyData(dummy);
    setFilteredData(dummy);
  }, []);

  const clearForm = () => {
    // reset form + re-build the filteredData with original datas.
    setFilteredData(dummyData);
    reset();
  };

  const onSubmit = (data) => {
    //filter system. called on "OK" button when you submit the filter.
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
