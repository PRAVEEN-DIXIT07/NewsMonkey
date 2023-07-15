import React from 'react'

const NewsItem =(props) =>{


    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div my-4 >
        <div className="card my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style ={{left:'90%',zIndex:'1'}}>{source}</span>
            <img src={imageUrl ? imageUrl : "https://media.istockphoto.com/id/1331658965/photo/3d-render-number-null-digital-zero-symbol-pink-blue-gradient-neon-light-glowing-in-the-dark.jpg?s=612x612&w=0&k=20&c=j6SDqhZSjRhjFl9A_VuB-RdWsOCpJ3YhlR5yIa4JHRo="} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small class="text-body-secondary">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
