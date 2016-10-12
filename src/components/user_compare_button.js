import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/index'
import MutualArtistCoverFlow from './mutual_artist_cover_flow';
import Autosuggest from 'react-autosuggest';


class UserCompare extends React.Component{

  constructor(props){
    super(props)
    this.state={
      id: "list"
    }
    this.chooseUser=this.chooseUser.bind(this)
  }




  clickHandler(id){
    this.setState({
      id: id
    })
    this.chooseUser(id)
  }

  chooseUser(id){
    this.props.actions.compareUsers(id, parseInt(this.props.initiatorid))
  }

  render(){
    if (this.state.id == "list"){
      return(
        <div>
        {this.props.users.map( user => { return (
          <li key={user.id} onClick={()=>this.clickHandler(user.id)}>{user.username}</li>)})}
        </div>
      )
    } else {
      return(
        <div>
         <MutualArtistCoverFlow data={this.props.comparedUsers}/>
         <button className="btn btn-default" onClick={()=>this.clickHandler("list")}>Back to list</button>
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
