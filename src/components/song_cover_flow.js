import React from 'react'
import Coverflow from 'react-coverflow';

class SongCoverFlow extends React.Component{

  constructor(props){
    super(props)
    this.state={
      term: "mid_term"
    }
    this.displayCoverFlow= this.displayCoverFlow.bind(this)
    this.logSpot = this.logSpot.bind(this)
  }


  clickHandler(term){
    this.setState({
      term: term
    })
  }

  displayCoverFlow(){
    if (this.state.term=="short_term"){

      return (
        this.props.data.short_term.tracks.map( song =>  {return (
         <div key={song.rank} style={{backgroundColor: 'gray', color: 'linen'}}>
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
         <div key={song.rank} style={{backgroundColor: 'gray', color: 'linen'}}>
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
         <div key={song.rank} style={{backgroundColor: 'gray', color: 'linen'}}>
         <div className="row" >{song.name}</div>
         <img height='100%' width='100%' src={`${song.image}`}/>
         <div className="row">#{song.rank}</div>
         </div>
       )
      })
      )
    }
  }



  logSpot(){
    console.log("test");
    window.location.href="https://accounts.spotify.com/authorize/?client_id=031ed6ea90bd4727b184cd84219dd697&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Ftopplay%2F&scope=playlist-modify-private%20user-top-read"
  }



  render(){
    return(
      <div>
        <div className="btn-group btn-group-justified" role="group" aria-label="...">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("long_term")}>All Time</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("mid_term")}>Past Four Months</button>
            <br/></div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default" onClick={()=>this.clickHandler("short_term")}>Past Month</button>
            <br/></div>
        </div>
      <br></br>
      <h3>Top Songs</h3>
      <br></br>
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
        <br></br>
        <div>
          <a href="#" className="btn btn-default" onClick={this.logSpot}>Create All Time Playlist</a><br></br>
        </div>
        </div>
    )
  }

}

export default SongCoverFlow
