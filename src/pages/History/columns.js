export const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
        field: 'licensePlate',
        headerName: 'Placa',
        width: 120,
        editable: false,
    },
    {
        field: 'vehicleModel',
        headerName: 'Modelo',
        width: 120,
        editable: false,
    },
    {
        field: 'fuelTankCapacity',
        headerName: 'Capacidade do Tanque (l)',
        type: 'number',
        width: 180,
        editable: false,
    },
    {
        field: 'averageConsumption',
        headerName: 'Consumo Médio (l/100Km)',
        type: 'number',
        width: 200,
        editable: false,
    },
    {
        field: 'maximumWeight',
        headerName: 'Carga Máxima (TON)',
        type: 'number',
        width: 160,
        editable: false,
    },
    {
        field: 'travelledDistance',
        headerName: 'Distância Percorrida (Km)',
        type: 'number',
        width: 200,
        editable: false,
    },
    {
        field: 'fuelConsumptionPerTon',
        headerName: 'Consumo Médio (l/TON/Km)',
        type: 'number',
        width: 210,
        editable: false,
    }
];