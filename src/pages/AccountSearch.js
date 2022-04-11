import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import authHeader from '../authHeader';
import AccountCard from '../components/AccountCard';
import './AccountSearch.css'
import api from '../api';

const AccountSearch = props => {
    
    const [search, setSearch] = useState("");
    const [filteredAccounts, setFilteredAccounts] = useState();

    const [accounts, setAccounts] = useState();


    const getData = () => {
        axios
            .get(api + `search`, { headers: authHeader() })
            .then(res => {
                setAccounts(res.data);
                //console.log(res.data);
            })

        //setCounter(videoLink.length-1)
    }

    useEffect(() => {
        
        getData();
        props.triggerPageChange('search')

    }, []);

    useEffect(() => {
        
        search === "" ?

        setFilteredAccounts([])

        :

        setFilteredAccounts([]);

        {accounts && (

            accounts.map((account, index) => (
                    
                        account.username.includes(search) ? 

                        setFilteredAccounts(filteredAccounts => [...filteredAccounts, account]) : 
                            null

                    )
                )

            
            )
        }
        
        
    }, [search]);

    const handleSearchChange = (e) => {
        e.preventDefault();

        
        setSearch(e.target.value);
    };


    return (
        <div className="search-container-wrapper">

            <h1 className='search-header'>Account Search</h1>

            <input className='search-bar-box' onChange={handleSearchChange} type="text" placeholder="Search" id="search" name="search" />

            {filteredAccounts && (
                <div className="search-row">
                    {filteredAccounts.map((account, index) => (
                        <AccountCard account={account} key={index}/>
                    ))}

                </div>
                )
            }

        </div>
    )
}

export default AccountSearch