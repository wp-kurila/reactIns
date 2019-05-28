import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User 
                src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                alt="steve"
                name="steve_jobs"
            />

            <Palette />
        </div>
    )
}

export default Profile;

