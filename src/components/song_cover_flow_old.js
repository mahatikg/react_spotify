import React from 'react'
import Coverflow from 'react-coverflow';

export default function SongCoverFlow(props) {


var images = props.data.tracks.map( song =>  {return (
  <div style={{backgroundColor: 'gray', color: 'linen'}}>
  <div className="row" >{song.name}</div>
  <img height='100%' width='100%' src={`${song.image}`}/>
  <div className="row">#{song.rank}</div>
  </div>
)
})

return(
  <div>
  <h3>{props.term} Songs</h3>
  <Coverflow
      width={960}
      height={400}
      displayQuantityOfSide={2}
      startPosition={0}
      navigation={true}
      enableHeading={false}
      >

      {images}

    </Coverflow>
    </div>

)

}
