import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Sidebar, Navbar } from './components';
import Overview from './pages/Overview'
import Calendar from './pages/Calendar'
import PatientList from './pages/PatientList'
import Messages from './pages/Messages'
import PaymentInfo from './pages/PaymentInfo'
import Settings from './pages/Settings'
import GlobalStyle, { MainContent } from './GlobalStyles';
import AppointmentModal from './components/Modal/AppointmentModal';



function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <AppointmentModal /> */}
      <div className="App">
        <Sidebar />
        <MainContent>
          <Navbar menuName='Calendar' />
          <Switch>
            <Route path='/' exact>
              <Overview />
            </Route>
          </Switch>
          <Switch>
            <Route path='/calendar' exact>
              <Calendar />
            </Route>
          </Switch>
          <Switch>
            <Route path='/patientlist' exact>
              <PatientList />
            </Route>
          </Switch>
          <Switch>
            <Route path='/messages' exact>
              <Messages />
            </Route>
          </Switch>
          <Switch>
            <Route path='/paymentinfo' exact>
              <PaymentInfo />
            </Route>
          </Switch>
          <Switch>
            <Route path='/settings' exact>
              <Settings />
            </Route>
          </Switch>
        </MainContent>

      </div>
    </Router>
  );
}

export default App;
