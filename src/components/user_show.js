import React from 'react'
import{connect} from 'react-redux'
import ArtistShow from './artist_show'

function UserShow(props) {

  return(
    <div>
      <h1>{props.user.username}</h1>
      <ArtistShow/>
    </div>

  )

}

function mapStateToProps(state, ownProps) {
const user = state.users.find((user) => {return user.id == ownProps.params.id})
return {user: user}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
