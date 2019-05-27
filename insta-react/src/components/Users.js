import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
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
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    // renderItems(arr) {
    //     return arr.map( (i) => {
    //         const {name, altname, photo, src, alt, descr, id} = i;

    //         return (
    //             <div key={id} className="post">
    //                 <User 
    //                     src={photo}
    //                     alt={altname}
    //                     name={name}
    //                 />
    //                 <img src={src} alt={alt}></img>
    //                 <div className="post__name">
    //                     {name}
    //                 </div>
    //                 <div className="post__descr">
    //                     {descr}
    //                 </div>
    //             </div>
    //         )
    //     })
    // }

    // render() {
    //     const {error, posts} = this.state;
    //     if (error) {
    //         return <ErrorMessage />
    //     }

    //     const items = this.renderItems(posts);
        
    //     return (
    //         <div className="left">
    //             {items}
    //        </div>
    //     )
    // }


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