import React from 'react';

export default function NewsItem(props) {
  const { title, description,imageUrl,newsUrl } = props;

  return (
    <div className='my-3'>
      <div className="card" >
        <img className="card-img-top" src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2022/12/Pinnawala-Elephant-Orphanage-Sri-Lanka-770x433.jpg" :imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target='_balnk' className="btn btn-primary btn-sm">Read more</a>
        </div>
      </div>
    </div>
  );
}


