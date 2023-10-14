/* eslint-disable no-unused-vars */
import NavBar from "./components/NavBar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    homeValue: 6000,
    downPayment: 6000 * 0.4,
    loanAmount: 6000 *0.6,
    loanTerm: 5,
    interestRate: 5,
  });


  return (
    <>
      <NavBar/>
      <Container  sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default App;
