import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export default class News extends Component {
  static defaultProps={
    pagesize:6,
    country:'in',
    category:'general',
  }
  static propTypes={
    pagesize:PropTypes.number, 
    country:PropTypes.string,
    category:PropTypes.string,
  }
  constructor(){
    super();
    console.log("hello");
    this.state={
      articles:[],
      loading:false,
      page:1, 
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0e7f743b1b24303bce5bf864c5f559e&page=1&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults,
      loading:false})
  }
  handleNextClick= async()=>{    
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0e7f743b1b24303bce5bf864c5f559e&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      // this.setState({articles: parsedData.articles})
      
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles,
        loading:false,
      })

  }
  handlePreviousClick= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0e7f743b1b24303bce5bf864c5f559e&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    // this.setState({articles: parsedData.articles})

    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles,
      loading:false,
    })
  }
  render() {
    return (
      <div className="container my-3">
           <h1 className='text-center my-4'>NewsMonkey- Top Headlines</h1>
          {/* <Spinner/>  The line written below states that if  loading is true then we will run the spinner else don't run it*/}
          {this.state.loading && <Spinner/>}
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageurl={element.urlToImage?element.urlToImage:"https://images.indianexpress.com/2022/04/liver-1200.jpg"}  newsurl={element.url}/>
              </div>   
            })}                     
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePreviousClick}>&larr; Previouss</button>
            <button disabled={this.state.page+1>Math.ceil((this.state.totalResults)/(this.props.pagesize))} type="button" className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
            </div>            
      </div> 
    )
  } 
}
