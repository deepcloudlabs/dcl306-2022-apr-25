import {Link} from "react-router-dom";

export default function PlayerWins(props){
    return (
      <div className="card">
          <div className="card-header">
              <h4 className="card-title">Good Game!</h4>
          </div>
          <div className="card-body">
              <Link to="/">Would you like to play again?</Link>
          </div>
      </div>
    );
}