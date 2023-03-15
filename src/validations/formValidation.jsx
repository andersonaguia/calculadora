import * as yup from 'yup';

export const validationSchema = yup.object({
    licensePlate: yup
        .string('Digite a placa do veículo')
        .matches(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/, 'Digite uma placa válida. Ex: BRA2E19 ou MNW0001')
        .required('Obrigatório informar a placa do veículo'),

    vehicleModel: yup
        .string('Digite o modelo do veículo')
        .min(4, 'Modelo deve possuir no mínimo 4 caracteres')
        .required('Obrigatório informar o modelo do veículo'),

    fuelTankCapacity: yup
        .number('Digite a capacidade em litros do tanque de combustível')
        .positive('Número deve ser maior que zero')
        .required('Obrigatório informar a capacidade do tanque de combustível'),

    maximumWeight: yup
        .number('Digite a carga máxima do caminhão em toneladas')
        .positive('Número deve ser maior que zero')
        .required('Obrigatório informar a carga máxima do caminhão em toneladas'),

    averageConsumption: yup
        .number('Digite o consumo médio de combustível do caminhão em litros por 100 km')
        .positive('Número deve ser maior que zero')
        .required('Obrigatório informar o consumo médio do caminhão'),

    travelledDistance: yup
        .number('Digite a distância média percorrida pelo veículo em km')
        .positive('Número deve ser maior que zero')
        .required('Obrigatório informar a distância média percorrida pelo veículo')
});