
import React, { useState, useEffect } from 'react';
import data from '../Profile';
import PortfolioCategory from './PortfolioCategory';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setPortfolios(data.portfolios);
  }, []);

  useEffect(() => {
    if (selectedCategory !== 'All') {
      const updatedPortfolios = data.portfolios.filter(
        (portfolio) => portfolio.category === selectedCategory
      );
      setPortfolios(updatedPortfolios);
    } else {
      setPortfolios(data.portfolios);
    }
  }, [selectedCategory]);

  const handleImageClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <>
      <PortfolioCategory
        onChangePortfolio={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="row justify-content-center">
        {portfolios.length > 0 &&
          portfolios.map((portfolio, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card card body">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="img img-responsive"
                  onClick={() => handleImageClick(portfolio.link)}
                />
                <br />
                <h3 className="text-primary p-4 text-center portfolio-title">
                  {portfolio.title}
                </h3>
                <p className="text-center">
                  <span className={'badge bg-info'}>{portfolio.category}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Portfolio;
