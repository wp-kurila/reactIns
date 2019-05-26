import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://codecondo.com/wp-content/uploads/2019/04/dsefrsgw.jpg"
                    alt="Steve"
                    name="Steve_Jobs"
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    1123123123123123
                </div>
            </div>
        )
    }
}