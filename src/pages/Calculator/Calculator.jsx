import { useFormik } from 'formik';
import { Box, Button, TextField, Tooltip, Typography } from '@mui/material';
import { validationSchema } from '../../validations/formValidation';
import { useCalculator } from '../../contexts/calculator/useCalculator';
import HistoryIcon from '@mui/icons-material/History';
import { buttonStyle } from '../../GlobalStyles/button.styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { boxStyled, resultTextFieldStyled, textFieldStyled, typographyStyled } from './calculator.styles';

export const Calculator = () => {
    const { handleHistoryData, result, handleClearResult, handlePage } = useCalculator();

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
        <Box sx={boxStyled} >
            <form onSubmit={formik.handleSubmit}>
                <Typography sx={typographyStyled} variant="h2" component="div" >
                    Dados da Frota
                </Typography>
                <TextField
                    sx={{
                        marginBottom: "16px"
                    }}
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
                    sx={textFieldStyled}
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
                    sx={textFieldStyled}
                    fullWidth
                    id="fuelTankCapacity"
                    name="fuelTankCapacity"
                    label="Capacidade do Tanque (l)"
                    type="number"
                    value={formik.values.fuelTankCapacity}
                    onChange={formik.handleChange}
                    error={formik.touched.fuelTankCapacity && Boolean(formik.errors.fuelTankCapacity)}
                    helperText={formik.touched.fuelTankCapacity && formik.errors.fuelTankCapacity}
                />
                <TextField
                    sx={textFieldStyled}
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
                    sx={textFieldStyled}
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
                    sx={textFieldStyled}
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
                {
                    result ? <TextField sx={resultTextFieldStyled}
                        fullWidth
                        id="maximumWeight"
                        name="maximumWeight"
                        label="Consumo (l/Ton/Km)"
                        defaultChecked
                        value={result}
                    >
                    </TextField> : ""
                }
                <Button
                    sx={buttonStyle("primary.main", "primary.light")}
                    fullWidth
                    variant="contained"
                    type="submit">
                    Calcular
                </Button>
                <Box sx={{
                    width: "100%",
                    gap: "20px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "space-around"
                }}>
                    <Tooltip title="Limpar dados" arrow>
                        <Button
                            sx={buttonStyle("primary.error", "secondary.error", "180px")}
                            onClick={() => formik.resetForm({ values: "" })} variant="contained"
                            type='reset'>
                            <DeleteForeverIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Histórico" arrow>
                        <Button
                            sx={buttonStyle("secondary.dark", "secondary.light", "180px")}
                            variant="contained"
                            onClick={() => handlePage("/historico")}>
                            <HistoryIcon />
                        </Button>
                    </Tooltip>
                </Box>
            </form>
        </Box>
    );
};