import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/index'
import MutualArtistCoverFlow from './mutual_artist_cover_flow';


class UserCompare extends React.Component{

  constructor(props){
    super(props)
    this.chooseUser=this.chooseUser.bind(this)
  }

  chooseUser(id){
    console.log("firing")
    this.props.actions.compareUsers(id, parseInt(this.props.initiatorid))
  }

  render(){
    if (this.props.comparedUsers.length>0){
      return(
        <div>
         <MutualArtistCoverFlow data={this.props.comparedUsers}/>
          {this.props.comparedUsers.map(artist=> artist.name + " ")}
        </div>
      )
    } else {
      return(
        <div>
        {this.props.users.map( user => { return (
          <li key={user.id} onClick={()=>this.chooseUser(user.id)}>{user.username}</li>)})}
        </div>
      )
    }
  }
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state){
  return{
    comparedUsers: state.comparedUsers
  }
}

const componentCreator=connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(UserCompare)
