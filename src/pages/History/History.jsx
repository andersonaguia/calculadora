import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useCalculator } from '../../contexts/calculator/useCalculator';
import Box from '@mui/material/Box';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'licensePlate',
        headerName: 'Placa',
        width: 150,
        editable: true,
    },
    {
        field: 'vehicleModel',
        headerName: 'Modelo',
        width: 150,
        editable: true,
    },
    {
        field: 'fuelTankCapacity',
        headerName: 'Capacidade do Tanque',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'averageConsumption',
        headerName: 'Consumo Médio (100Km)',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'maximumWeight',
        headerName: 'Peso Máximo (TON)',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'travelledDistance',
        headerName: 'Distância Percorrida',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fuelConsumptionPerTon',
        headerName: 'Consumo Médio por Tonelada',
        type: 'number',
        width: 110,
        editable: true,
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

export const History = () => {
    const { historyData } = useCalculator();

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={historyData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}