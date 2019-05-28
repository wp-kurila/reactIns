import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }   

    renderItems(arr) {
        return arr.map( (i) => {
            const {name, photo, altname, id} = i;
            return (                
                <User 
                    src={photo}
                    alt={altname}
                    name={name}
                    key={id}
                    min
                />                
            )
        })
    }
    
    render() {  
        const {error, users, loading} = this.state;

        if (error) {
            return <ErrorMessage />
        }
        
        if (loading) {
            return <Spinner />
        }

        const items = this.renderItems(users);

        return (
            <div className="right">
                <User 
                    src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                    alt="steve"
                    name="steve_jobs"
                />

                
                <div className="users__block">
                    {items}                    
                </div>
            </div>
        )
    }
    
}