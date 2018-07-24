import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';3

const Profile = props => {
  console.log('Props in Profile are: ', props)

return (
    <div>
      Profile
      <h1> {props.account.info.profile.personaname} </h1>
      <h2>{props.account.info.profile.steamid}</h2>
      <img alt="profile" src={props.account.info.profile.avatarfull}/>
      {/* <p>Wins:  {props.account.info.ratio.win}</p> */}
      {/* <p>Losses: {props.account.info.ratio.lose}</p> */}

    </div>
)
}

const mapStateToProps = state => {
    return {
      account: state.accounts.account
    }
}

export default connect(mapStateToProps, null)(Profile);
