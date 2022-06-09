//Load models
const { Event, Group, Thread } = require('../models/schemaModel');

const ObjectID = require('mongoose').Types.ObjectId;

// CREATE
const create = async (req, res) => {
    try{
		const thread = new Thread(req.body);
		thread.save((err, docs) => {
			if (err) res.status(400).json({ error: err });
			res.status(200).json({ group: docs });
		})
	}catch(error){
    	res.status(400).json({msg: 'Error thread create' });
	}
}

const add_new_msg = async (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
		res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {

			await Thread.updateMany(
				{ "_id ": id }, 
				{$addToSet: {members: user_id}}, 
				{ new: true }
			).then((docs) => {
				res.status(200).json({ group: docs });
			});
		} catch (error) {
			res.status(400).json({msg: 'Error new menber push' });
		}
	}
}

const add_new_resp = async (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
		res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {
			const group = await Group.findOne({ "_id":id});
			if (!group) return res.status(400).json({ error: 'This group doesn\'t exist'})

			const newEvent = new Event(req.body);
        	const event = await newEvent.save();

			await Group.findByIdAndUpdate(
				{ "_id ": id }, 
				{$addToSet: {myevents: event.id}}, 
				{ new: true },
				(err, docs) => {
					if (err) res.status(400).json({ error: err });
					res.status(200).json({ group: docs });
				}
			)
		} catch (error) {
			res.status(400).json({ error: 'Error new event push', error });
		}
	}
}

// READ
const read = async (req, res) => {
	try{
		const threads = await Thread.find();
		res.status(200).json({threads: threads });
	}catch(error){
    	res.status(404).json({msg: 'Error groups read' });
	}
}
const read_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else try{
		const thread = await Thread.findOne({ "_id": id });
		res.status(200).json({thread: thread });
	}catch(error){
    	res.status(404).json({msg: 'Error thread read' });
	}
}
// UPDATE
const update_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else try{
		await Thread.findOneAndUpdate({"_id": id}, {$set: req.body }, {new: true}).then( (docs) => {
			return res.status(200).json({msg: 'thread update', docs });
		})
	}catch(error){
    	res.status(404).json({msg: 'Error group update', error });
	}
}
// DELETE
const delete_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else try{
		await Thread.findOneAndDelete( {"_id": id}).then((docs) => {
			return res.status(200).json({ msg: 'Deleted thread: ', docs });
		});
	}catch(error){
    	res.status(404).json({msg: 'Error thread delete' });
	}
}

module.exports = {
	create,
	read,
    read_id,
    add_new_resp,
    add_new_msg,
	update_id,
	delete_id
}