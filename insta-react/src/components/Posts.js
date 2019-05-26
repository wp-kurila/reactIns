import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://w-dog.ru/wallpapers/11/6/497644127437356.jpg" />
                <Post alt="nature" src="https://w-dog.ru/wallpapers/11/6/497644127437356.jpg" />
            </div>
        )
    }
}