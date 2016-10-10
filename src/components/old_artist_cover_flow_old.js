import React from 'react'
import Coverflow from 'react-coverflow';

export default function ArtistCoverFlow(props) {

var images = props.data.artists.map( artist =>  {return (
  <div style={{backgroundColor: 'gray', color: 'linen'}}>
  <div className="row" >{artist.name}</div>
  <img height='100%' width='100%' src={`${artist.image}`}/>
  <div className="row">#{artist.rank}</div>
  </div>
)
})

return(
  <div>
  <h3>{props.term} Artists</h3>

    <div className="btn-group btn-group-justified" role="group" aria-label="...">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default">As Long Ago As You Can Remember</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default" background-color="white">Four Months Ago</button>
        <br/></div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default">Four Weeks Ago</button>
        <br/></div>
    </div>


  <Coverflow
      width={960}
      height={400}
      startPosition={0}
      displayQuantityOfSide={2}
      navigation={true}
      enableHeading={false}>

      {images}

    </Coverflow>
    </div>

)

}
