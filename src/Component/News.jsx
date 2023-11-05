import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import axios from 'axios';

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


const article = []; // Your initial article data




export default function News(props) {
  const [newsData, setNewsData] = useState(article);
  const [page, setPage] = useState(1);





  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=83faf5d26793455bb96df1dc7fa7d048&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(response);
        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      document.title =`${props.category} - NewsJunction`;
    };

    // const fetchData = async () => {
    //   try {
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=83faf5d26793455bb96df1dc7fa7d048&page=${page}`;
    //     const response = await axios.get(url); // Use Axios to make the request
    //     const data = response.data;
    //     setNewsData(data.articles);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    
    //   document.title = `${props.category} - NewsJunction`;
    // };

    fetchData();
  }, [page]);


  const handleNextClick = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=83faf5d26793455bb96df1dc7fa7d048&page=${nextPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.articles.length === 0) {
        // If there are no more articles, disable the "Next" button
        // You can also set a message or take other actions
      } else {
        // If there is more data, update the page
        setPage(nextPage);
        setNewsData(data.articles);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  // const handleNextClick = async () => {
  //   const nextPage = page + 1;
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=83faf5d26793455bb96df1dc7fa7d048&page=${nextPage}`;
  
  //   try {
  //     const response = await axios.get(url); // Use Axios for the next page request
  //     const data = response.data;
  
  //     if (data.articles.length === 0) {
  //       // If there are no more articles, disable the "Next" button
  //       // You can also set a message or take other actions
  //     } else {
  //       // If there is more data, update the page
  //       setPage(nextPage);
  //       setNewsData(data.articles);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };


  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <div className="container my-3">
        <h2 className='text-center' style={{ margin: '35px 0px' }}>NewsJunction-Top {props.category} Headlines </h2>
        <div className="row">
          {newsData.map((news, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem title={news.title} description={news.description} imageUrl={news.urlToImage} newsUrl={news.url} />
            </div>
          ))}
        </div>
      </div>

      <div className="container d-flex justify-content-between my-3">
        <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePreviousClick}>
          &larr; Previous
        </button>
        <button type="button" className="btn btn-dark" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
}


