import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/index'
import MutualArtistCoverFlow from './mutual_artist_cover_flow';
import Autosuggest from 'react-autosuggest';




const renderSuggestion = suggestion => (
<div>
  {suggestion.username}
</div>
);

class UserCompare extends React.Component{

  constructor(props){
    super(props)
    this.state={
      value: '',
      suggestions: [],
      coverflow: "hide"
    }
    this.getSuggestions = this.getSuggestions.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  getSuggestions = value => {

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : this.props.users.filter(user =>
      user.username.slice(0, inputLength) === inputValue
    );
  };

  getSuggestionValue(suggestion) {
    this.setState({
      value: '',
      suggestions: [],
      coverflow: "show"
    })
      this.props.actions.compareUsers(suggestion.id, parseInt(this.props.initiatorid))
    return suggestion.username
  }



  onChange = (event, { newValue }) => {
  this.setState({
    value: newValue
  });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };


  onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };


  clickHandler() {
    this.setState({
      value: '',
      suggestions: [],
      coverflow: "hide"
    })
  }


  render(){
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type a username',
      value,
      onChange: this.onChange
    };


    if (this.state.coverflow == "show" ){
      return(
        <div>
         <MutualArtistCoverFlow data={this.props.comparedUsers}/>
         <button className="btn btn-default" onClick={this.clickHandler}>Back to list</button>
        </div>
      )
    } else {
      return(

        <div>
          <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}/>
      <br></br>
      <h3>Available Users</h3>
        {this.props.users.map( user => { return (
          <li key={user.id} onClick={()=>this.clickHandler(user.id)}>{user.username}</li>)})}
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
    comparedUsers: state.comparedUsers,
    users: state.users
  }
}

const componentCreator=connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(UserCompare)
