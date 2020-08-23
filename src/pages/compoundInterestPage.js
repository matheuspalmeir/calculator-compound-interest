import React, { useState, useEffect } from "react";
import Card from "../components/card/card";
import { TextInput } from "react-materialize";
import { calculateCompoundInterest } from "../helpers/compoundInterestCalculator";
import "./style.css";

const CompoundInterestPage = (props) => {
  const [capital, setCapital] = useState(0);
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [months, setMonths] = useState(1);
  const [compoundInterestByMonth, setCompoundInterestByMonth] = useState([]);

  const handleChangeCapital = (event) => {
    const value = event.target.value;
    value === "" ? setCapital(0) : setCapital(parseFloat(value));
  };

  const handleChangeInterest = (event) => {
    const value = event.target.value;
    value === ""
      ? setMonthlyInterest(0)
      : setMonthlyInterest(parseFloat(value));
  };

  const handleChangeMonths = (event) => {
    const value = event.target.value;
    value === "" ? setMonths(1) : setMonths(parseInt(value));
  };

  useEffect(() => {
    if (capital !== 0) {
      const value = calculateCompoundInterest(capital, months, monthlyInterest);
      setCompoundInterestByMonth(value);
    }
  }, [capital, months, monthlyInterest]);

  return (
    <div className="salaryContainer">
      <div className="titleWrapper">Calculadora de Juros Compostos</div>
      <div className="readOnlyInputsWrapper">
        <TextInput
          style={{ color: "#28a745", fontWeight: "bold" }}
          id="capital"
          label="Capital Inicial"
          type="number"
          value={`${capital}`}
          onChange={handleChangeCapital}
        />
        <TextInput
          style={{ color: "#2da4b7", fontWeight: "bold" }}
          id="taxaJuros"
          label="Taxa de Juros (Mensal)"
          type="number"
          value={`${monthlyInterest}`}
          onChange={handleChangeInterest}
        />
        <TextInput
          style={{ color: "#ffc107", fontWeight: "bold" }}
          id="timeInMonths"
          label="Tempo (Meses)"
          type="number"
          value={`${months}`}
          onChange={handleChangeMonths}
        />
      </div>
      <div className="containerCard">
        {compoundInterestByMonth.length !== 0 &&
          compoundInterestByMonth.map((item, index) => (
            <Card
              key={index}
              month={item.month}
              totalValue={item.totalValue}
              dividends={item.dividends}
              percentage={item.percentage}
            />
          ))}
      </div>
    </div>
  );
};

export default CompoundInterestPage;
