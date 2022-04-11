import './App.css';

import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";

import Navbar from './components/Navbar';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from './pages/Profile';
import Charity from './pages/Charity';
import CharityPage from './pages/CharityPage';
import AccountSearch from './pages/AccountSearch'; 
import { createBrowserHistory } from "history";
import { useEffect, useState } from "react"
import AccountDetailsView from './pages/AccountDetailsView';

function App() {
    const history = createBrowserHistory();

    const [selectedPage, setSelectedPage ] = useState('');

    const triggerPageChange = (pageName) => {
        setSelectedPage(pageName)
    }

    const logout = () => {
        localStorage.removeItem('accessToken');
        history.push("/");
        window.location.reload();
    }

    return (
        <div className="App">
            <Router>
                {localStorage.getItem('accessToken') ?
                    <>
                        <Navbar logout={logout}/>

                    </>
                    :
                    <>
                    </>
                }
                <div className="spacer" id="home"></div>

                <Switch>

                    {
                        localStorage.getItem('accessToken') ?
                            <>
                            <Route exact path="/" exact component={Profile}><Profile triggerPageChange = {triggerPageChange}/></Route>
                                <Route exact path='/account' exact component={AccountDetailsView} />
                                <Route exact path = '/charities'> <CharityPage triggerPageChange = {triggerPageChange}/></Route>
                                {/* <Route exact path='/charities' exact component={CharityPage} triggerPageChange = {triggerPageChange}/> */}
                                <Route exact path='/charity/:id' exact component={Charity} />
                                <Route exact path="/profile-search/" exact component={AccountSearch}> <AccountSearch triggerPageChange={triggerPageChange} /> </Route>
                                {/* <Route exact path="/profile-settings" exact component={EditProfile}/> */}
                            </>
                            :
                            <>
                                <Route exact path="/register" exact component={Register}/>
                                <Route exact path="/" exact component={Login} />
                            </>
                    }
                </Switch>
            </Router>
        </div>
    )

}

export default App;
