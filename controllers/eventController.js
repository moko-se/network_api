//Load models
const { Event, Message } = require('../models/schemaModel');

const ObjectID = require('mongoose').Types.ObjectId;

// CREATE
const create = async (req, res) => {
    try{
		const event = new Event(req.body);
		event
			.save()
			.then( (docs) => { 
				res.status(200).json({ event: docs } || {});
			})
			.catch((error) => res.status(400).json({ error: error }));
	}catch(error){
    	res.status(400).json({error: 'Error event create', error });
	}
}
const add_new_member = async (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
		res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {
			const user_id = req.body.id;

			await Event.updateMany(
				{ "_id ": id }, 
				{$addToSet: {members: user_id}}, 
				{ new: true }
			).then((docs) => {
				res.status(200).json({ event: docs });
			});
		} catch (error) {
			res.status(400).json({msg: 'Error new menber push', error });
		}
	}
}
const add_new_message = async (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
		res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {
			const newMes = new Message({
				message: req.body.message,
				userid: req.body.userid
			});

			const message = await newMes.save();

			await Event.updateMany(
				{ "_id ": id }, 
				{$addToSet: {messages: message.id}}, 
				{ new: true }
			).then((docs) => {
				res.status(200).json({ event: docs });
			});
		} catch (error) {
			res.status(400).json({error: 'Message doesn\'push', error });
		}
	}
}
const add_new_response_message = async (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
		res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {
			const newMes = new Message({
				message: req.body.message,
				userid: req.body.userid,
				commentid: id
			});

			const message = await newMes.save();

			await Event.updateMany(
				{ "_id ": id }, 
				{$push: {messages: message.id}}, 
				{ new: true }
			).then((docs) => {
				res.status(200).json({ event: docs });
			});
		} catch (error) {
			res.status(400).json({error: 'Message doesn\'push', error });
		}
	}
}
// READ
const read = async (req, res) => {
	try{
		const events = await Event.find();
		res.status(200).json({events: events });
	}catch(error){
    	res.status(404).json({error: 'Error events read', error });
	}
}
const read_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else {

		try {
			const event = await Event.findOne({ "_id": id })
			.populate('members', '-password');
			res.status(200).json({event: event });
		} catch (error) {
			res.status(404).json({error: 'Error event read id', error });
		}
	}
}
// UPDATE
const update_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else try{
		await Event.findOneAndUpdate({"_id": id}, {$set: req.body }, {new: true}).then( (docs) => {
			return res.status(200).json({msg: 'event update', docs });
		})
	}catch(error){
    	res.status(404).json({error: 'Error event update', error });
	}
}
// DELETE
const delete_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else try{
		await Event.findOneAndDelete( {"_id": id}).then((docs) => {
			return res.status(200).json({ msg: 'Deleted event: ', docs });
		});
	}catch(error){
    	res.status(404).json({error: 'Error event delete', error });
	}
}
module.exports = {
	create,
	read,
	add_new_member,
	add_new_message,
	add_new_response_message,
	read_id,
	update_id,
	delete_id
}