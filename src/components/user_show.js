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
      <ArtistCoverFlow data={props.user.short_term} term={"Short Term"}/>
      <ArtistCoverFlow data={props.user.mid_term} term={"Mid Term"}/>
      <ArtistCoverFlow data={props.user.long_term} term={"Long Term"}/>
      <SongCoverFlow data={props.user.short_term} term={"Short Term"}/>
      <SongCoverFlow data={props.user.mid_term} term={"Mid Term"}/>
      <SongCoverFlow data={props.user.long_term} term={"Long Term"}/>
      <BarComponent data={props.user.short_term} term={"Short Term"}/>
      <BarComponent data={props.user.mid_term} term={"Mid Term"}/>
      <BarComponent data={props.user.long_term} term={"Long Term"}/>
      <PieComponent data={props.user.short_term} term={"Short Term"}/>
      <PieComponent data={props.user.mid_term} term={"Mid Term"}/>
      <PieComponent data={props.user.long_term} term={"Long Term"}/>    </div>
  )
}

function mapStateToProps(state, ownProps) {
const user = state.users.find((user) => {return user.id == ownProps.params.id})
return {user: user}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
