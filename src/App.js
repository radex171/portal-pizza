import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingId from './components/views/Tables/TablesBookingId';
import TablesBookingNew from './components/views/Tables/TablesBookingNew';
import TablesEventsId from './components/views/Tables/TablesEventsId';
import TablesEventsNew from './components/views/Tables/TablesEventsNew';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrderNew from './components/views/Waiter/WaiterOrderNewContainer';
import WaiterOrderId from './components/views/Waiter/WaiterOrderId';
import Kitchen from './components/views/Kitchen/Kitchen';
import {StylesProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#2b4c6f'}, 
    //secondary: { main: '#11cb5f'}, 
  },
});
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <MainLayout>
                <Switch>
        
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />

                  <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

                  <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventsId} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />

                  <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                  <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
                  <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderId} />

                  <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />

                </Switch>
              </MainLayout>
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
