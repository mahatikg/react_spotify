import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/index'

class UserPlaylist extends React.Component{

  constructor(props){
    super(props)
  }

  logSpot(){
    window.location.href="https://accounts.spotify.com/authorize/?client_id=031ed6ea90bd4727b184cd84219dd697&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Ftopplay%2F&scope=user-top-read"
  }

  render(){

      return(
        <div>
          <button type="button" name="button" onClick={this.logSpot} className="btn btn-primary">Create Top 30 Playlist</button>
        </div>
      )
}
}

// function mapDispatchToProps(dispatch){
//   return {actions: bindActionCreators(actions, dispatch)}
// }
//
// function mapStateToProps(state){
//   return{
//     comparedUsers: state.comparedUsers
//   }
// }
//
// const componentCreator=connect(mapStateToProps, mapDispatchToProps)
export default UserPlaylist;
