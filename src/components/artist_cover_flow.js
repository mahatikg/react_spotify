import React from 'react'
import Coverflow from 'react-coverflow';

export default function ArtistCoverFlow(props) {


var images = props.user.mid_term.artists.map( artist =>  {return (
  <div style={{backgroundColor: 'gray', color: 'linen'}}>
  <div className="row" >{artist.name}</div>
  <img height='100%' width='100%' src={`${artist.image}`}/>
  <div className="row">#{artist.rank}</div>
  </div>
)
})

return(
  <div>
  <Coverflow
      width={960}
      height={400}
      displayQuantityOfSide={2}
      navigation={true}
      enableHeading={false}
      ba
      >

      {images}

    </Coverflow>
    </div>

)

}
