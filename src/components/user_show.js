import React from 'react'
import {connect} from 'react-redux'
import ArtistShow from './artist_show'
import PieComponent from './user_genre_pie'
import {Bar} from 'react-chartjs-2';
import BarComponent from './artist_top10_chart'
import ArtistCoverFlow from './artist_cover_flow'
import SongCoverFlow from './song_cover_flow'
import SpotifyTimelineComponent from './static_timeline'
import UserCompare from './user_compare'
var Spinner = require('react-spinkit');


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
        return <div>THE SPINNER SHOULD SHOW UP HERE
        <Spinner spinnerName='wave'/>
        </div>
      } else {
        return(
          <div className="">
            <br></br>
            <h1>&nbsp;{this.props.user.display_name} | Spotify Stats</h1>
            <br></br>

            <div className="container-fluid">
              <div className="row">
                <div className="test btn-group-vertical col-sm-2">
                  <br></br><br></br><br></br>
                  <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("ArtistCoverFlow")}>Top 50 Artists</a><br></br>
                  <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("SongCoverFlow")}>Top Songs</a><br></br>
                  <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("PieChart")}>Genre Breakdown</a><br></br>
                  <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("BarComponent")}>Artist Popularity</a><br></br>
                  <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("Timeline")}>Time Line</a><br></br>
                  <a href="#" className="btn btn-default" onClick={()=>this.changeComponentOnClick("CompareUsersComponent")}>Compare Users</a><br></br>
                </div>
                <div className= "componentRender col-sm-10">
                  {this.chooseComponent()}
                </div>
              </div>
            </div>
         </div>
        )
    }
  }
}


function mapStateToProps(state, ownProps) {
  debugger
  if (state.users.length > 0) {
    const user = state.users.find((user) => {return user.id == ownProps.params.id})
    return {user: user, users: state.users, ownProps: ownProps}
  } else {
    return {user: {username: '', mid_term: {artists: []}}}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
