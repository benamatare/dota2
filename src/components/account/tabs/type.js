import React from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './../../../css/components/account/type.css';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import TimeAgo from 'react-timeago';

import Ranking from './../../../dota/rank.json'

import Public from '@material-ui/icons/Public'
import Info from '@material-ui/icons/Info'

import Divider from '@material-ui/core/Divider';

import Heroes from './../../../dota/heroes.json'


class Type extends React.Component {
	state = {
		core: 0,
		support: 0,
		length: 0,
	}


componentWillMount(){
	this.logic()
	console.log('component will mount', this.state)
}
componentDidMount() {
	this.ratio(this.state.length)
	console.log('componenet did mount', this.state)
}

componentWillUnmount(){
	this.setState({
		core: 0,
		support:0,
		length: 0,
	})
}

 logic =() => {
	 if (this.props.account.matches.length < 100) {
		 this.setState({ length: this.props.account.matches.length })
	 } else {
		 this.setState({ length: 100 })
	 }
 }
 ratio = (cutoff) => {
	this.props.account.matches.slice(0, cutoff).map(match => {
		console.log(Heroes[match.hero_id].localized_name)
		console.log(Heroes[match.hero_id].roles)
		Heroes[match.hero_id].roles.includes("Support") ? 
			this.setState({
				support: this.state.support+=1 
			})
			: 
			this.setState({
				core: this.state.core+=1
			})
	});
};

render() {
	console.log('games played core',this.state.core)
	console.log('games played support',this.state.support)
	console.log('le render', this.state)

return (

	<div className="type-parent"> 

		<div className="type-bg">
			<span className="core" style={{height: `${Math.floor(this.state.core / this.state.length * 100)}%`}}>
				<h5 className="core"> Core </h5> 
				<span className="ratio-value">
					{Math.floor(this.state.core / this.state.length * 100)}%
				</span>
			</span>

			<span className="support" style={{height: `${Math.floor(this.state.support / this.state.length * 100)}%`}}>
				<h5 className="support"> Support </h5> 
				<span className="ratio-value">
					{Math.floor(this.state.support / this.state.length * 100)}%
				</span>
			</span>
		</div>
	</div>
	)
}
}


const mapStateToProps = state => {
    return {
      account: state.accounts.account
    }
}

export default connect(mapStateToProps, null)(Type);
