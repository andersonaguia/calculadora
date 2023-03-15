import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { validationSchema } from '../../validations/formValidation';
import { useCalculator } from '../../contexts/calculator/useCalculator';
import { FormStyled } from './calculator.styles';
import { useState } from 'react';

export const Calculator = () => {
    const { historyData, handleHistoryData, result, handleClearResult, handlePage } = useCalculator();

    const formik = useFormik({
        initialValues: {
            licensePlate: "",
            vehicleModel: "",
            fuelTankCapacity: "",
            maximumWeight: "",
            averageConsumption: "",
            travelledDistance: ""
        },
        validationSchema,
        onReset: () => {
            handleClearResult();
        },
        onSubmit: (values) => {
            handleHistoryData(values);
        }
    });

    return (
        <Box sx={{
            padding: 3,
            width: 400,
            backgroundColor: "background.paper"
        }} >
            <FormStyled onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="licensePlate"
                    name="licensePlate"
                    label="Placa do Veículo"
                    type="text"
                    value={formik.values.licensePlate}
                    onChange={formik.handleChange}
                    error={formik.touched.licensePlate && Boolean(formik.errors.licensePlate)}
                    helperText={formik.touched.licensePlate && formik.errors.licensePlate}
                />
                <TextField
                    sx={
                        {
                            backgroundColor: "text.secondary"
                        }
                    }
                    fullWidth
                    id="vehicleModel"
                    name="vehicleModel"
                    label="Modelo do Veículo"
                    type="text"
                    value={formik.values.vehicleModel}
                    onChange={formik.handleChange}
                    error={formik.touched.vehicleModel && Boolean(formik.errors.vehicleModel)}
                    helperText={formik.touched.vehicleModel && formik.errors.vehicleModel}
                />
                <TextField
                    fullWidth
                    id="fuelTankCapacity"
                    name="fuelTankCapacity"
                    label="Capacidade do Tanque de Combustível (l)"
                    type="number"
                    value={formik.values.fuelTankCapacity}
                    onChange={formik.handleChange}
                    error={formik.touched.fuelTankCapacity && Boolean(formik.errors.fuelTankCapacity)}
                    helperText={formik.touched.fuelTankCapacity && formik.errors.fuelTankCapacity}
                />
                <TextField
                    fullWidth
                    id="maximumWeight"
                    name="maximumWeight"
                    label="Carga Máxima (TON)"
                    type="number"
                    value={formik.values.maximumWeight}
                    onChange={formik.handleChange}
                    error={formik.touched.maximumWeight && Boolean(formik.errors.maximumWeight)}
                    helperText={formik.touched.maximumWeight && formik.errors.maximumWeight}
                />
                <TextField
                    fullWidth
                    id="averageConsumption"
                    name="averageConsumption"
                    label="Consumo Médio (100Km)"
                    type="number"
                    value={formik.values.averageConsumption}
                    onChange={formik.handleChange}
                    error={formik.touched.averageConsumption && Boolean(formik.errors.averageConsumption)}
                    helperText={formik.touched.averageConsumption && formik.errors.averageConsumption}
                />
                <TextField
                    fullWidth
                    id="travelledDistance"
                    name="travelledDistance"
                    label="Distância Percorrida (Km)"
                    type="number"
                    value={formik.values.travelledDistance}
                    onChange={formik.handleChange}
                    error={formik.touched.travelledDistance && Boolean(formik.errors.travelledDistance)}
                    helperText={formik.touched.travelledDistance && formik.errors.travelledDistance}
                />
                <Button onClick={() => formik.resetForm({ values: "" })} color="primary" variant="contained" type='reset'>
                    Limpar
                </Button>
                <Button color="secondary" variant="contained" type="submit">
                    Calcular
                </Button>
            </FormStyled>
            {
                historyData.length > 0 ?
                 <Button fullWidth color="secondary" variant="contained" onClick={() => handlePage("/historico")}>Histórico</Button> : ""
            }
            {
                result ? <p>Resultado <strong>{result}</strong> l/TON/Km</p> : ""
            }            
        </Box>
    );
};