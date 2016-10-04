import React from 'react'
import{connect} from 'react-redux'

function ArtistShow(props) {

  return(
    <div>
      <h1>{props.rank}: {props.name}</h1>
      <img src={`${props.image}`}></img>
    </div>
  )

}

export default ArtistShow;

// function mapStateToProps(state, ownProps) {
//   debugger;
// const user = state.users.find((user) => {return user.id == ownProps.params.id})
// return {user: user}
// }
//
// const componentCreator = connect(mapStateToProps)
// export default componentCreator(ArtistShow);
