import React from 'react'
import{connect} from 'react-redux'
import ArtistShow from './artist_show'

function UserShow(props) {


function createArtists(props) {

  return props.user.mid_term["artists"].map( artist => {
    return (<ArtistShow name={artist.name} rank={artist.rank} image={artist.image}/>)
  })
}



  return(
    <div>
      <h1>{props.user.username}</h1>
      {createArtists(props)}
    </div>

  )

}

function mapStateToProps(state, ownProps) {
const user = state.users.find((user) => {return user.id == ownProps.params.id})
return {user: user}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
