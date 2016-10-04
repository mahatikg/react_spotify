import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

function UserIndex (props){
  return (
    <div>
      {props.users.map( user => { return (
        <Link to={`/users/${user.id}`}><li key={user.id}> {user.username}</li></Link>)})}

    </div>
  )
}

function mapStateToProps(state) {
  return (
    {users: state.users}
  )
}

const componentCreator = connect(mapStateToProps) // the return of connect is a callback function that takes in the component
export default componentCreator(UserIndex);
