import React from 'react'
import {connect} from 'react-redux'
import ArtistShow from './artist_show'
import PieComponent from './user_genre_pie'
import {Bar} from 'react-chartjs-2';
import BarComponent from './artist_top10_chart'
import ArtistCoverFlow from './artist_cover_flow'
import SongCoverFlow from './song_cover_flow'
import SpotifyTimelineComponent from './static_timeline'
import Timeline from 'react-image-timeline';

function UserShow(props) {

  return(
    <div>
        <SpotifyTimelineComponent user={props.user}/>
      <h1>{props.user.username}</h1>
      <ArtistCoverFlow user={props.user}/>
     {props.user.mid_term.songs.length > 0 ? <div><h3> Top Songs</h3><SongCoverFlow user={props.user} /></div> : "You have no songs"}
      <BarComponent user={props.user}/>
      <PieComponent user={props.user}/>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
const user = state.users.find((user) => {return user.id == ownProps.params.id})
return {user: user}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
