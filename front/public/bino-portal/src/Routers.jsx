import { BrowserRouter, Switch, Route } from "react-router-dom";
import Display from "./components/Display";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import Admin from "./pages/Admin";
import Notify from "./pages/Notify";
import Travel from "./pages/Travel";

function Routes() {
    return (
        <BrowserRouter>
            <Menu />
            <Display />
            <Switch>

                <Route path="/new-collaborator">

                </Route>

                <Route path="/new-travel">
                    <Travel />
                </Route>

                <Route path="/tracking">
                    <Tracking name="Sandra Cunha" code="polybrasilio0001sp" destination="POLYBRASIL LTDA - AV SABUGUEIRO DE MILHO 1029 GALPÃO 3 - 01203455, CENTRO - SÃO PAULO/SP" dateLastNotify="13:50" messageLastNotify="O MOTORISTA SEGUIU A VIAGEM" datePenultimateNotify="13:26" messagePenultimateNotify="O MOTORISTA REALIZOU UMA PARADA" value="120,00" trucker="WALDESIO DA SILVA P." truck="BAÚ HIUNDAY BRANCO 01" travelDetails="POLYBRASILIO0001SP" details="12 Chapas pvc" detailsDate="02/03" detailsLastLog="13:50" />
                </Route>
                <Route path="/new-analyst">
                    <Admin name="Admin" />
                </Route>

                <Route path="/notify">
                    <Notify name="Sandra Cunha" />
                </Route>

                <Route path="/">
                    <Home name="Sandra Cunha" number_trucks="10" number_drivers="25" />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;