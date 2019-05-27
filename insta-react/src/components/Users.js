import React, {Component} from 'react';
import User from './User';
import Posts from './Posts';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    Posts = new Posts();

    renderItems(arr) {
        return arr.map( (i) => {
            const {name, src, alt} = i;

            return (                
                <User 
                    src={src}
                    alt={alt}
                    name={name}
                    min
                />                
            )
        })
    }
    
    render() {  
        const {error, posts} = this.state;

        if (error) {
            return <ErrorMessage />
        }        

        const items = this.renderItems(posts);

        return (
            <div className="right">
                <User 
                    src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                    alt="Steve"
                    name="Steve_Jobs"
                />

                
                <div className="users__block">
                    {items}                    
                </div>
            </div>
        )
    }
    
}