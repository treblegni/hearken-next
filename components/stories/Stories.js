import React from 'react'
import { FaCloud } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './stories.css'

import StoriesModal from './StoriesModal';

// Assuming user has traits at this point
function getMatch(userTraits) {
	// Will either get {} or a user object.
	let matchedUser = {
		username: 'testUser',
		user_id: "1234",
		details: ["artsy", "sportsy"],
		isMatched: "false"
	}

	// return {}
	return matchedUser;
}

function checkIfNotEmpty(obj) {
	return !(Object.entries(obj).length === 0 && obj.constructor === Object);
}

// *** On top of checking if the user was paired,
// you also need to handle if they have already replied to a story

const Stories = (props) => {

  let currentUser = {
		traits: ["sportsy", "artsy"],
		// reply: {
		// 	content: "Hey man, I'm here for ya",
		// 	story_id: "4c3f8f50-f865-11e9-a66a-594d993c4fad"
		// }
		reply: {}
	}

	let matchedUser = getMatch(currentUser.traits);

	let hasMatch = checkIfNotEmpty(matchedUser);
	// currentUser.reply empty if user has not replied yet.
	let hasReplied = checkIfNotEmpty(currentUser.reply);


	if(!hasMatch || hasReplied) {
		return(
			<div>
				<p className="stories-greeting">Share <i className="em em-heartbeat" aria-role="presentation" aria-label="BEATING HEART"></i> and Support!<br></br></p>
				<div className="stories-message-background">
					<div className="stories-content">Hearken is looking for someone to match <i>you</i> with!
					<br></br>
					Perhaps come back at a <b>better time</b>?
					<br></br>- Sincerely, The Hearken Algorithm </div>
				</div>
			</div>
		);
	} else {
		// This is if the currentUser has already replied to his pair.
		// or doesn't have a match

		// Sucks to suck is what THEY wrote. Clicking on the Button
		// opens up a modal where you see THEIR story (sucks to suck)
		// and your submit button
		return(
			<div> 
				<p className="stories-greeting">Share <i class="em em-heartbeat" aria-role="presentation" aria-label="BEATING HEART"></i> and Support!<br></br></p>
				<div className="stories-message-background">
					<Form.Group className="story-message" controlId="exampleForm.ControlTextarea1">
						<Form.Control as="textarea" rows="3" disabled>Sucks to suck!</Form.Control>
						<StoriesModal/>
					</Form.Group>
				</div>
			</div>
		);
	}

	// This view allows the user to reply to the Story of the person they were matched with.


}

export default Stories