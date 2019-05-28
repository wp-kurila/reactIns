import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
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
            const {name, altname, photo, src, alt, descr, id} = i;

            return (
                <div key={id} className="post">
                    <User 
                        src={photo}
                        alt={altname}
                        name={name}
                    />
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    }

    render() {
        const {error, posts, loading} = this.state;
        if (error) {
            return <ErrorMessage />
        }

        if (loading) {
            return <Spinner />
        }

        const items = this.renderItems(posts);
        
        return (
            <div className="left">
                {items}
           </div>
        )
    }
}