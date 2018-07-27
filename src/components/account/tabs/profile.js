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
            <span className="profile-icons">
              <a href="" className="locale"> <Public /> </a>
              <a href="" className="steam"> <Info /> </a>
            </span>
          </div>

            <div className="info-parent">
              <span className="profile-name"> 
                <h1>{trim(props.account.info.profile.personaname)}</h1> 
              </span>
              
              <span className="profile-data"> 
                <span className="profile-ratio">
                  < h5> WinRate </h5> 
                    <Divider />
                  <span className="profile-win-ratio-value"> 
                  {((props.account.ratio.win / (props.account.ratio.win + props.account.ratio.lose)) * 100).toFixed(2)}% 
                  </span>
                </span>

                <span className="profile-record">
                 <h5> Record </h5> 
                  <Divider />
                 <span className="profile-ratio-record"> <mark className="grn">{props.account.ratio.win}</mark>-<mark className="red">{props.account.ratio.lose}</mark> </span>
                </span>

              </span>
            </div>
      </div>
);
};

const mapStateToProps = state => {
    return {
      account: state.accounts.account
    }
}

export default connect(mapStateToProps, null)(Profile);
