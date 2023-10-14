/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data  , setData}) => {
  return (
    <>
      <SliderComponent
        label={"Home Value"}
        min={1000}
        max={10000}
        defaultValue={data.homeValue}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.4,
            loanAmount: value * 0.6,
            homeValue: value,
          })
        }
        value={data.homeValue}
        amount={data.homeValue}
        step={100}
        unit="$"
      />

      <SliderComponent
        label={"Down Payment"}
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: (data.homeValue - value),
            downPayment: value,
          })
        }
        value={data.downPayment}
        amount={data.downPayment}
        step={100}
        unit="$"
      />
      <SliderComponent
        label={"Loan Amount"}
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: (data.homeValue - value),
            loanAmount: value,
          })
        }
        value={data.loanAmount}
        amount={data.loanAmount}
        step={100}
        unit="$"
      />
      <SliderComponent
        label={"Loan Term"}
        min={2}
        max={18}
        defaultValue={data.interestRate}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        value={data.interestRate}
        amount={data.interestRate}
        unit="%"
        step={0.5}
      />
    </>
  );
};
export default SliderSelect;
