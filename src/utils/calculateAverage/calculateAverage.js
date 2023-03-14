export const calculateAverageConsumption = (data) => {
    const { averageConsumption, maximumWeight, travelledDistance } = data;
    const averageWeight = maximumWeight / (travelledDistance * 0.001);
    
    return ((averageConsumption * 1000) / (averageWeight * 1000));
}