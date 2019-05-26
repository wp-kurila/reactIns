import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                alt="Steve"
                name="Steve_Jobs"
            />
            <div className="users__block">
                <User 
                    src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                    alt="Steve"
                    name="Steve_Jobs"
                    min
                />
                <User 
                    src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                    alt="Steve"
                    name="Steve_Jobs"
                    min
                />
                <User 
                    src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                    alt="Steve"
                    name="Steve_Jobs"
                    min
                />
                <User 
                    src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                    alt="Steve"
                    name="Steve_Jobs"
                    min
                />               
            </div>
        </div>
    )
}