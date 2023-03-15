export const calculateAverageConsumption = (data) => {
    const { averageConsumption, maximumWeight, travelledDistance } = data;
    const averageWeight = maximumWeight / (travelledDistance * 0.001);
    const averageConsumptionPerKilometer = averageConsumption / 100;
    const fuelConsumptionPerTon = (averageConsumptionPerKilometer * 1000) / (averageWeight * 1000);

    return (fuelConsumptionPerTon);
}