import React from 'react'
import Coverflow from 'react-coverflow';

export default function MutualArtistCoverFlow(props) {

var images = props.data.map( artist =>  {return (
  <div key={artist.rank} style={{backgroundColor: 'gray', color: 'linen'}}>
  <div className="row" >{artist.name}</div>
  <img height='100%' width='100%' src={`${artist.image}`}/>
  </div>
)
})

return(
  <div>
  <h3>{props.term} Mutual Artists</h3>
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
