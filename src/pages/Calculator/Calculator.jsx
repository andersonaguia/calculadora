import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { validationSchema } from '../../validations/formValidation';
import { useCalculator } from '../../contexts/calculator/useCalculator';
import { FormStyled } from './calculator.styles';

export const Calculator = () => {
    const { handleHistoryData } = useCalculator();

    const formik = useFormik({
        initialValues: {},
        validationSchema,
        onSubmit: (values) => {

            handleHistoryData(values);
        },
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
                    label="Placa"
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
                    label="Capacidade do Tanque de Combustível"
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
                    label="Peso Máximo"
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
                    label="Consumo Médio"
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
                    label="Distância Percorrida"
                    type="number"
                    value={formik.values.travelledDistance}
                    onChange={formik.handleChange}
                    error={formik.touched.travelledDistance && Boolean(formik.errors.travelledDistance)}
                    helperText={formik.touched.travelledDistance && formik.errors.travelledDistance}
                />
                <Button color="primary" variant="contained" type="submit">
                    Calcular
                </Button>
            </FormStyled>
        </Box>
    );
};