import PropTypes from "prop-types";
import { CalculatorContext } from "./calculatorContext";
import { useEffect, useState } from "react";
import { getData, setData } from "../../utils/localStorage/localStorage";
import { calculateAverageConsumption } from "../../utils/calculateAverage/calculateAverage";

export const CalculatorProvider = ({ children }) => {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        const defaultData = getData('HISTORY');

        if (defaultData) {
            setHistoryData(JSON.parse(defaultData));
        }
    }, []);

    useEffect(() => {
        setData('HISTORY', JSON.stringify(historyData));
    }, [historyData.length])

    const handleHistoryData = (data) => {
        const vehicleData = data;
        vehicleData.fuelConsumptionPerTon = calculateAverageConsumption(data);

        const updateData = [
            ...historyData,
            vehicleData
        ]
        setHistoryData(updateData);
    }

    return (
        <CalculatorContext.Provider value={
            {
                historyData,
                handleHistoryData
            }
        }>
            {children}
        </CalculatorContext.Provider>
    )
}

CalculatorProvider.propTypes = {
    children: PropTypes.node,
}