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

const Profile = props => {
  console.log('Props in Profile are: ', props)

return (
    <div style={{paddingBottom: '50px'}} className="profile-parent">
      <Paper 
        // this card renders display flex column of profile and rank
        className="image-parent"
        style={{border: 'solid 5px green'}}
        children={<div>
          <Avatar className="profile-picture" 
                  src={props.account.info.profile.avatarfull}
          />
          <Avatar className="profile-rank"
                  src={props.account.info.rank_tier}
          />
        </div>}/>

        <Paper
        //  this loads display flex of steam url, name, and account id
          className="info-parent"
          style={{border: 'solid 5px red'}}
          children={
            <div>
            <p> steamid url is => {props.account.info.profile.profileurl}</p>
            <h1> name is => {props.account.info.profile.personaname} </h1>
            <p> this person is from here => {props.account.info.profile.loccountrycode}</p>
            <TimeAgo date={props.account.info.profile.last_login}/>
            <p> account id is => {props.account.info.profile.account_id} </p>
            </div>
          }/>

          <Paper
            className="info-record"
            style={{border: 'solid 5px gray'}}
            children={
              <span> {props.account.ratio.win} - {props.account.ratio.lose} - <br></br>
                 wins - losses - draws</span>
            }/>
          <Paper
            className="info-ratio"
            style={{border: 'solid 5px orange'}}
            children={
              <span>
              W/R => 
              {Math.round( props.account.ratio.win / (props.account.ratio.win + props.account.ratio.lose) * 100)}%
                <ul>
                  <li>wins => {props.account.ratio.win}</li>
                  <li> lose => {props.account.ratio.lose}</li>
                  <li> totals => {props.account.ratio.win + props.account.ratio.lose}</li>
                </ul>
              </span>
            }/>
    </div>
)
}

const mapStateToProps = state => {
    return {
      account: state.accounts.account
    }
}

export default connect(mapStateToProps, null)(Profile);
