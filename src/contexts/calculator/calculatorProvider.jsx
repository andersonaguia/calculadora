import PropTypes from "prop-types";
import { CalculatorContext } from "./calculatorContext";
import { useEffect, useState } from "react";
import { getData, setData } from "../../utils/localStorage/localStorage";
import { calculateAverageConsumption } from "../../utils/calculateAverage/calculateAverage";
import { useNavigate } from "react-router-dom";

export const CalculatorProvider = ({ children }) => {
    const navigate = useNavigate();
    const [historyData, setHistoryData] = useState([]);
    const [result, setResult] = useState(null);

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
        vehicleData.id = historyData.length + 1;
        vehicleData.fuelConsumptionPerTon = calculateAverageConsumption(data);

        setResult(vehicleData.fuelConsumptionPerTon);

        const updateData = [
            ...historyData,
            vehicleData
        ]
        setHistoryData(updateData);
    }

    const handleClearResult = () => {
        setResult(null);
    }
   
    const handlePage = (path) => {
        navigate(path)
    }

    return (
        <CalculatorContext.Provider value={
            {
                historyData,
                handleHistoryData,
                result,
                handleClearResult,
                handlePage
            }
        }>
            {children}
        </CalculatorContext.Provider>
    )
}

CalculatorProvider.propTypes = {
    children: PropTypes.node,
}