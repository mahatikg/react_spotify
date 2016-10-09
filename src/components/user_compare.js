import React from 'react';
import {connect} from 'react-redux'


function UserCompare (props){
  return (
    <div>
      {props.users.map( user => { return (
        <li key={user.id} onClick= {otherUser}> {user.username}</li>)})}
    </div>
  )
}

function otherUser(event){

}

export default UserCompare;
