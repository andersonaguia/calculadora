import { useContext } from "react";
import { CalculatorContext } from "./calculatorContext";

export const useCalculator = () => {
    const context = useContext(CalculatorContext);
    return context;
}