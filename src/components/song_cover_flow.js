import React from 'react'
import Coverflow from 'react-coverflow';

class SongCoverFlow extends React.Component{

  constructor(props){
    super(props)
    this.state={
      term: "mid_term"
    }
    this.displayCoverFlow= this.displayCoverFlow.bind(this)
  }


  clickHandler(term){
    console.log(term)
    this.setState({
      term: term
    })
  }

  displayCoverFlow(){
    if (this.state.term=="short_term"){

      return (
        this.props.data.short_term.tracks.map( song =>  {return (
         <div style={{backgroundColor: 'gray', color: 'linen'}}>
         <div className="row" >{song.name}</div>
         <img height='100%' width='100%' src={`${song.image}`}/>
         <div className="row">#{song.rank}</div>
         </div>
       )
      })
      )
    } if (this.state.term=="mid_term"){
      return (
        this.props.data.mid_term.tracks.map( song =>  {return (
         <div style={{backgroundColor: 'gray', color: 'linen'}}>
         <div className="row" >{song.name}</div>
         <img height='100%' width='100%' src={`${song.image}`}/>
         <div className="row">#{song.rank}</div>
         </div>
       )
      })
      )
    } if (this.state.term=="long_term"){
      return (
        this.props.data.long_term.tracks.map( song =>  {return (
         <div style={{backgroundColor: 'gray', color: 'linen'}}>
         <div className="row" >{song.name}</div>
         <img height='100%' width='100%' src={`${song.image}`}/>
         <div className="row">#{song.rank}</div>
         </div>
       )
      })
      )
    }
  }







  render(){
    return(
      <div>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("long_term")}>As Long Ago As You Can Remember</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("mid_term")}>Four Months Ago</button>
            <br/></div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("short_term")}>Four Weeks Ago</button>
            <br/></div>
        </div>

      <h3>Your Top Songs</h3>
      <Coverflow
          width={960}
          height={400}
          displayQuantityOfSide={2}
          startPosition={0}
          navigation={true}
          enableHeading={false}
          >

          {this.displayCoverFlow()}

        </Coverflow>
        </div>
    )
  }

}

export default SongCoverFlow
