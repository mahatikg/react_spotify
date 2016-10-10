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
import UserCompare from './user_compare'



class UserShow extends React.Component {

  constructor(props){
    super(props)
    this.state={
      selectedChart: "PieChart"
    }
  this.chooseComponent=this.chooseComponent.bind(this)
  }

  changeComponentOnClick(term){
    this.setState({
      selectedChart: term
    })
  }

  chooseComponent(){
    if (this.state.selectedChart=="ArtistCoverFlow"){
      return(
        <ArtistCoverFlow data={this.props.user} />
      )
    } if(this.state.selectedChart=="SongCoverFlow"){

      return(
          <SongCoverFlow data={this.props.user}/>
      )
    } if (this.state.selectedChart=="Timeline"){
      return(
        <SpotifyTimelineComponent user={this.props.user}/>
      )
    } if (this.state.selectedChart=="PieChart"){
      return(
        <div>
          <PieComponent data={this.props.user} />
        </div>
      )
    } if (this.state.selectedChart=="BarComponent"){
      return(
        <div>
          <BarComponent data={this.props.user}/>
        </div>
      )
    } if (this.state.selectedChart=="CompareUsersComponent"){
      return(
        <div>
          <UserCompare users={this.props.users} initiatorid={this.props.ownProps.params.id}/>
        </div>
      )
    }

  }

    render(){
      if (this.props.user.username == '') {
        return <div> loading.....</div>
      } else {
        return(
          <div>
            <h1>{this.props.user.username} Spotify Stats</h1>
            <div className="btn-group-vertical" >
              <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("ArtistCoverFlow")}>Top 50 Artists</a><br></br>
              <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("SongCoverFlow")}>Top Songs</a><br></br>
              <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("Timeline")}>Time Line</a><br></br>
              <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("PieChart")}>Genre Breakdown</a><br></br>
              <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("BarComponent")}>Artist Popularity</a><br></br>
              <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("CompareUsersComponent")}>Compare Users</a><br></br>
          </div>
          <div className= "componentRender">
            {this.chooseComponent()}
          </div>

         </div>
        )
    }
  }
}


function mapStateToProps(state, ownProps) {
  if (state.users.length > 0) {
    const user = state.users.find((user) => {return user.id == ownProps.params.id})
    return {user: user, users: state.users, ownProps: ownProps}
  } else {
    return {user: {username: '', mid_term: {artists: []}}}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
