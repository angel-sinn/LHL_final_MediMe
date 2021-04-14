// Libraries import
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components import
import ClinicsList from "./Clinics/ClinicsList";
import LabsList from "./Labs/LabsList";
import LabDetail from "./Labs/LabDetail";
import Header from "./Header";
import NewVisit from "./Clinics/NewVisit";
import EditVisit from "./Clinics/EditVisit";
import NewRecord from "./Labs/NewRecord";
import EditRecord from "./Labs/EditRecord";
import ClinicDetail from "./Clinics/ClinicDetail";
import Dashboard from "./Dashboard";
import VaccineNew from "./Vaccinations/NewVaccine";
import DoseNew from "./Vaccinations/Doses/NewDose";
import DoseEdit from "./Vaccinations/Doses/EditDose";
import DoseDetail from "./Vaccinations/Doses/DoseDetail";
import Success from "./Vaccinations/Success";

// Stylesheet import
import "./App.scss";
import VaccinationsList from "./Vaccinations/VaccinationsList";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    common: {
      black: "#2A2D34",
    },
    primary: {
      light: "#D3F5A3",
      main: "#AED6B5",
    },
    secondary: {
      main: "#6F8695",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/clinics/edit" component={EditVisit} />
            <Route path="/clinics/new" component={NewVisit} />
            <Route path="/clinics/view" component={ClinicDetail} />

            <Route exact path="/clinics" component={ClinicsList} />

            <Route exact path="/labs/edit" component={EditRecord} />
            <Route exact path="/labs/new" component={NewRecord} />
            <Route exact path="/labs/view" component={LabDetail} />
            <Route exact path="/labs" component={LabsList} />

            <Route exact path="/vaccinations/new" component={VaccineNew} />
            <Route exact path="/vaccinations/dose/new" component={DoseNew} />
            <Route exact path="/vaccinations/dose/edit" component={DoseEdit} />
            <Route
              exact
              path="/vaccinations/dose/view"
              component={DoseDetail}
            />

            <Route exact path="/vaccinations" component={VaccinationsList} />
            <Route exact path="/vaccinations/success" component={Success} />

            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
