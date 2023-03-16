export const columns = [
    {
        field: 'licensePlate',
        headerName: 'Placa',
        width: 130,
        editable: false,
        headerClassName: "title"
    },
    {
        field: 'vehicleModel',
        headerName: 'Modelo',
        width: 120,
        editable: false,
        headerClassName: "title"
    },
    {
        field: 'fuelTankCapacity',
        headerName: 'Cap. Tanque (l)',
        type: 'number',
        width: 120,
        editable: false,
        headerClassName: "title",
        headerAlign: "center"
    },
    {
        field: 'averageConsumption',
        headerName: 'Cons. Médio (l/100Km)',
        type: 'number',
        width: 170,
        editable: false,
        headerClassName: "title",
        headerAlign: "center"
    },
    {
        field: 'maximumWeight',
        headerName: 'Carga Máx. (TON)',
        type: 'number',
        width: 140,
        editable: false,
        headerClassName: "title"
    },
    {
        field: 'travelledDistance',
        headerName: 'Dist. Percorrida (Km)',
        type: 'number',
        width: 160,
        editable: false,
        headerClassName: "title"
    },
    {
        field: 'fuelConsumptionPerTon',
        headerName: 'Consumo (l/TON/Km)',
        type: 'number',
        width: 160,
        editable: false,
        headerClassName: "title"
    }
];