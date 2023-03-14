import { Route, Routes } from "react-router-dom"
import { Calculator } from "../pages/Calculator/Calculator"
import { History } from "../pages/History/History"

export const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<Calculator />} />
            <Route path="/" element={<Calculator />} />
            <Route path="/calculadora" element={<Calculator />} />
            <Route path="/historico" element={<History />} />
        </Routes>
    )
}