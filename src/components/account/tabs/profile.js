import React from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './../../../css/components/account/profile.css';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import TimeAgo from 'react-timeago';

import Ranking from './../../../dota/rank.json'

import Public from '@material-ui/icons/Public'
import Info from '@material-ui/icons/Info'
import Divider from '@material-ui/core/Divider';
const Profile = props => {

  const trim = name => {
    return name.substring(0,12)
  };

  console.log('Props in Profile are: ', props)

const rank_logic = (rank_tier) => {
  if(props.account.info.rank_tier === null) {
    return (<div className="profile-rank-parent">
    <img className="profile-rank-icon"
                 alt="rank-icon"
                 src={Ranking['0'].rank_icon}/>
    </div>)
  } else {
    return (<div className="profile-rank-parent">
    <img className="profile-rank-icon"
         alt="rank-icon"
         src={Ranking[props.account.info.rank_tier].rank_icon}/>

    <img className="profile-rank-stars"
         alt="rank-stars"
         src={Ranking[props.account.info.rank_tier].rank_stars}/>
    </div>)
}};
const rank_logic_name = (rank_tier) => {
  if(props.account.info.rank_tier === null) {
    return <span className="profile-rank-name"> Unknown </span>
  } else {
    return <span className="profile-rank-name"> {Ranking[props.account.info.rank_tier].name} </span>
  }
};

// rendering some stuff to the page all starts here but since i cant see anything i had to put this here
return (
    <div className="profile-parent">

        <div className="image-parent"> 
          <img className="profile-picture" src={props.account.info.profile.avatarfull} alt="profile-img"/>
          {rank_logic(props.account.info.rank_tier)}
          <a href="" className="locale"> <Public /> </a>
          <a href="" className="steam"> <Info /> </a>
        </div>

          <div className="info-parent">
            <span className="profile-name"> 
            {trim(props.account.info.profile.personaname)} 
            <Divider />
              {rank_logic_name(props.account.info.rank_tier)}
            </span>

            <span className="profile-ratio"> 
            <span className="profile-ratio-child"> Win Rate </span>
            <Divider />
            {((props.account.ratio.win / (props.account.ratio.win + props.account.ratio.lose)) * 100).toFixed(2)}%
            </span>
          </div>

    </div>
        // 

      //   <Paper
      //   //  this loads display flex of steam url, name, and account id
      //     className="info-parent"
      //     style={{border: 'solid 5px red'}}
      //     children={
      //       <div>
      //       <h1> name is =>  </h1>
      //       <p> this person is from here => {props.account.info.profile.loccountrycode}</p>
      //       <TimeAgo date={props.account.info.profile.last_login}/>
      //       <p> account id is => {props.account.info.profile.account_id} </p>
      //       </div>
      //     }/>

      //     <Paper
      //       className="info-record"
      //       style={{border: 'solid 5px gray'}}
      //       children={
      //         <span> {props.account.ratio.win} - {props.account.ratio.lose} - <br></br>
      //            wins - losses - draws</span>
      //       }/>
      //     <Paper
      //       className="info-ratio"
      //       style={{border: 'solid 5px orange'}}
      //       children={
      //         <span>
      //         W/R => 
      //         
      //           <ul>
      //             <li>wins => {props.account.ratio.win}</li>
      //             <li> lose => {props.account.ratio.lose}</li>
      //             <li> totals => {props.account.ratio.win + props.account.ratio.lose}</li>
      //           </ul>
      //         </span>
      //       }/>
    // </div>
)
}

const mapStateToProps = state => {
    return {
      account: state.accounts.account
    }
}

export default connect(mapStateToProps, null)(Profile);
