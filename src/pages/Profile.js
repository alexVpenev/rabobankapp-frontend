import "./Profile.css";
import { Link } from "react-router-dom";
import ProfileData from "../components/ProfileData";
import TrasactionHistory from "../components/TransactionHistory";
import EditProfileContainer from "../components/EditProfileContainer";
import SubscriptionsRow from "../components/SubscriptionsRow";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import DonationHistory from "../components/DonationHistory";
import { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../authHeader";
import api from "../api";

const Profile = (props) => {
  const [user, setUser] = useState({});

  const [selectedPage, setSelectedPage ] = useState('');

  const triggerPageChange = (pageName) => {
      setSelectedPage(pageName)
  }

  useEffect(() => {
    const getData = () => {
      axios
        .get(api + "account/user", { headers: authHeader(), })
        .then((res) => {
          if (res.data.error) {
            console.log(res.data);
            alert("Something went wrong");
          } else {
            setUser(res.data);
          }
        });
    }
    getData();
    props.triggerPageChange('profile')
  });
  return (
    <div className="profile-page">
      <Router>
        <ProfileData />
        <Switch>
          <Route exact path='/' exact component={Dashboard} > <Dashboard selectedPage={selectedPage}/></Route>
          <Route exact path='/settings' exact component={EditProfileContainer}> <EditProfileContainer selectedPage={selectedPage}/></Route>
          <Route exact path='/supported-charities' exact component={SubscriptionsRow}> <SubscriptionsRow selectedPage={selectedPage}/></Route>
          <Route exact path='/transactions' exact component={TrasactionHistory}><TrasactionHistory selectedPage={selectedPage}/></Route>
          <Route exact path='/donations' exac component={DonationHistory}><DonationHistory selectedPage={selectedPage}/></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Profile;
