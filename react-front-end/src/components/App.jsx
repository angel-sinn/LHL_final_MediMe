import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useContext } from "react";
import { dataContext } from "./hooks/DataProvider";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ClinicsList from "./Clinics/ClinicsList";
import LabsList from "./Labs/LabsList";
import LabDetail from "./Labs/LabDetail";
import Header from "./Header";
import NewVisit from "./Clinics/NewVisit";
import EditVisit from "./Clinics/EditVisit";
import NewRecord from "./Labs/NewRecord";
import ClinicDetail from "./Clinics/ClinicDetail";
import Dashboard from "./Dashboard";

import "./App.scss";


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
  // const { data } = useContext(dataContext);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/clinics/edit" component={EditVisit} />
            <Route exact path="/clinics/new" component={NewVisit} />
            <Route exact path="/clinics/view" component={ClinicDetail} />
            <Route exact path="/clinics" component={ClinicsList} />


            <Route exact path="/labs/new" component={NewRecord} />
            <Route exact path="/labs/view" component={LabDetail} />
            <Route exact path="/labs" component={LabsList} />

            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
