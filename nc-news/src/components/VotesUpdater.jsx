import React ,{ Component} from 'react';
import * as api from "../api"

class VotesUpdater extends Component {
    state={
        newVote:0,
    }
    render() {
        const{votes}=this.props;
        const{newVote}=this.state;
        return (
            <div className="votes">
                <button disabled={newVote ===1} onClick={()=>{
                    this.handleClick(-1)}  } >dislike</button>
                <p>likes: {votes+newVote}</p>
                <button disabled={newVote ===-1} onClick={()=>{
                    this.handleClick(1)}}>like</button>

            </div>
        );
    }
    handleClick =(inc_vote)=>{
        const{id}=this.props;
        const{element}=this.props;
        const newVote =this.state.newVote
        
        if(newVote!==0)  {
            inc_vote=-(inc_vote) }
        api.updateVotes(element,id,inc_vote).then(()=>{
            this.setState((currentState)=>{
                return {newVote:currentState.newVote+inc_vote}
            })
        })
    }
}

export default VotesUpdater;



  
   

