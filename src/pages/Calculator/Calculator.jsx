import { useFormik } from 'formik';
import { Box, Button, TextField, Tooltip, Typography } from '@mui/material';
import { validationSchema } from '../../validations/formValidation';
import { useCalculator } from '../../contexts/calculator/useCalculator';
import HistoryIcon from '@mui/icons-material/History';
import ClearIcon from '@mui/icons-material/Clear';
import { buttonStyle } from '../../GlobalStyles/button.styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
            backgroundColor: "background.paper",
            borderRadius: "12px",

            div: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            label: {
                fontSize: "0.8rem"
            },
            input: {
                height: "5px",
                marginBottom: "0",
            },
            fieldset: {
                borderColor: "text.secondary",
                backgroundColor:"text.default"
            }
        }} >
            <form onSubmit={formik.handleSubmit}>
                <Typography sx={{ 
                    fontSize: "1.5rem",
                    marginBottom: "16px" 
                    }}variant="h2" component="div" >
                    Dados da Frota
                </Typography>
                <TextField
                    sx={{
                        marginBottom: "15px",
                        borderColor: "text.default",
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
                    sx={{
                        marginBottom: "15px"
                    }}
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
                    sx={{
                        marginBottom: "15px"
                    }}
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
                    sx={{
                        marginBottom: "15px"
                    }}
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
                    sx={{
                        marginBottom: "15px"
                    }}
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
                    sx={{
                        marginBottom: "15px"
                    }}
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
                    result ? <TextField sx={{
                        width: "100%",
                        height: "40px",
                        borderRadius: "3px",
                        backgroundColor: "background.default",
                        marginBottom: "15px",

                        input: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }}
                        fullWidth
                        id="maximumWeight"
                        name="maximumWeight"
                        label="Consumo (l/Ton/Km)"
                        defaultChecked
                        value={result}
                    >
                        <p><strong>{ }</strong> l/Ton/Km</p>
                    </TextField> : ""
                }
                <Button
                    sx={
                        buttonStyle("primary.main", "primary.light")
                    }
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
                            sx={
                                buttonStyle("primary.error", "secondary.error", "180px")
                            }
                            onClick={() => formik.resetForm({ values: "" })} variant="contained"
                            type='reset'>
                            <DeleteForeverIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Histórico" arrow>
                        <Button
                            sx={
                                buttonStyle("secondary.dark", "secondary.light", "180px")
                            }
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