import React, { Component } from 'react';
import style from './Movie.module.css'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Movie extends Component {

    state = { movie: { genres: [] } };

    getMovieDetails = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${this.props.type}/${this.props.index}?api_key=019e8f375549e0bbd4a4191862ebc88f`);
        this.setState({
            movie: data
        })
        console.log(this.state.movie)
        console.log(this.state.movie.genres)
    }

    componentDidMount() {
        this.getMovieDetails();
    }

    render() {
        if (!this.props.type) {
            return (
                <Redirect to="/Home" />
            );
        } else {
            return (
                <>
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-4">
                                <div className={style.movie_img}>
                                    <img src={"https://www.themoviedb.org/t/p/w1280" + this.state.movie.poster_path} className={`w-100`} alt="" />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className={style.movie_details}>
                                    <h1>{this.state.movie.title ? this.state.movie.title : this.state.movie.name}</h1>
                                    <div className={style.genres}>
                                        {this.state.movie.genres.map((value, index) => {
                                            return (
                                                <span key={index}>{value.name}</span>
                                            );
                                        })}
                                    </div>
                                    <div className={`my-2`}>
                                        <span>Vote : </span><span>{this.state.movie.vote_average}</span>
                                    </div>
                                    <div className={`my-2`}>
                                        <span>Vote count : </span><span>{this.state.movie.vote_count}</span>
                                    </div>
                                    <div className={`my-2`}>
                                        <span>Popularity : </span><span>{this.state.movie.popularity}</span>
                                    </div>
                                    <div className={`my-2`}>
                                        <span>Release date : </span><span>{this.state.movie.release_date}</span>
                                    </div>
                                    <p className={style.movie_desc}>{this.state.movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

function MovieactionCreator(state) {
    return {
        index: state.index,
        type: state.ItemType
    }
}

export default connect(MovieactionCreator, null)(Movie);
