import React from 'react'
import LoadingSpinner from './LoadingSpinner'

const Summary = ({title, description, summary, href, thumbnailURL, isRequesting, errored}) => {
  if (isRequesting) {
    return <LoadingSpinner />
  } else if (errored) {
    return <p>Couldn't find that one - make sure you're typing a valid, unambiguous Wikipedia article name.</p>
  } else if (!title) {
    return <p>Enter a Wikipedia article title to begin.</p>
  } else {
    return (
      <div>
        <div className='headings'>
          <h1>{title}</h1>
          <small>{description}</small>
        </div>
        {!!thumbnailURL &&
        <img alt={`Thumbnail for ${title}.`}src={thumbnailURL} />
        }
        <p>
          {summary}
          &nbsp;
          <small>(<a href={href}>Read more...</a>)</small>
        </p>
      </div>
    )
  }
}

export default Summary
