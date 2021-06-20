import React, { Component } from 'react';
import style from "./Home.module.css";
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
    state = { movie: [], tv: [], selected: "" }
    getTrending = async (Type) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${Type}/day?api_key=019e8f375549e0bbd4a4191862ebc88f`);
        this.setState({
            [Type]: data.results
        })
    }

    Itemclick = (i, type) => {
        this.props.movieDetails(i, type);
        this.props.history.replace("/Movie");
    }

    componentDidMount() {
        this.getTrending("movie");
        this.getTrending("tv");
    }
    render() {
        return (
            <div className={`${style.padding} container`}>
                <div className="row">
                    <div className={`${style.card} col-sm-4`}>
                        <div className="position-relative">
                            <h5 className={`${style.white_Col} ${style.before}`}>Trending <br /> movies <br /> to watch now</h5>
                            <p className={`${style.after}`}>Most watched movies by days</p>
                        </div>
                    </div>
                    {this.state.movie.map((value, index) => {
                        return (
                            <div onClick={() => this.Itemclick(value.id, "movie")} key={index} className="position-relative text-center col-sm-4 col-lg-2">
                                <span className={`${style.rate}`}>{value.vote_average}</span>
                                <img src={"https://www.themoviedb.org/t/p/w1280" + value.poster_path} className={`w-100`} alt={value.Name} />
                                <p className={`${style.name}`}>{value.original_title ? value.original_title : value.original_name}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className={`${style.card} col-sm-4`}>
                        <div className="position-relative">
                            <h5 className={`${style.white_Col} ${style.before}`}>Trending <br /> TV <br /> to watch now</h5>
                            <p className={`${style.after}`}>Most watched TV shows by days</p>
                        </div>
                    </div>
                    {this.state.tv.map((value, index) => {
                        return (
                            <div onClick={() => this.Itemclick(value.id, "tv")} key={index} className="position-relative text-center col-sm-4 col-lg-2">
                                <span className={`${style.rate}`}>{value.vote_average}</span>
                                <img src={"https://www.themoviedb.org/t/p/w1280" + value.poster_path} className={`w-100`} alt={value.Name} />
                                <p className={`${style.name}`}>{value.original_name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

function HomeactionCreator(state) {
    return {
        index: state.index,
        type: state.ItemType
    }
}

function Homedispatcher(dispatch) {
    return {
        movieDetails: function (index, itemType) {
            return dispatch({ type: "MovieDetails", index: index, itemType: itemType })
        }
    }
}

export default connect(HomeactionCreator, Homedispatcher)(Home);
