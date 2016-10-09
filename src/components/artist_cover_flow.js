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
