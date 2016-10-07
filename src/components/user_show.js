import React from 'react'
import {connect} from 'react-redux'
import ArtistShow from './artist_show'
import {Bar} from 'react-chartjs-2';
import BarComponent from './artist_top10_chart'
import ArtistCoverFlow from './artist_cover_flow'
import SongCoverFlow from './song_cover_flow'

function UserShow(props) {

class createArtists extends React.Component {
  constructor(props) {
    super(props);
  }

getArtists() {
  return props.user.mid_term["artists"].map( artist => {
    return (<ArtistShow name={artist.name} rank={artist.rank} image={artist.image}/>)
  })


}

// in the middle of refactoring to make a class

  render() {

    return(
      <div>
        <h1>{props.user.username}</h1>
        <div>
          <h3>Top Artists</h3>
          <ArtistCoverFlow user={props.user}/>
        </div>

        <br/>
        <br/>
        {props.user.mid_term.songs.length > 0 ? <div><h3> Top Songs</h3><SongCoverFlow user={props.user} /></div> : "You have no songs"}


        {createArtists(props)}
        <BarComponent user={props.user}/>

      </div>

    )
  }

}



}

function mapStateToProps(state, ownProps) {
const user = state.users.find((user) => {return user.id == ownProps.params.id})
return {user: user}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
