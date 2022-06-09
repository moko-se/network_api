//Load models
const { Event, Group } = require('../models/schemaModel');

const ObjectID = require('mongoose').Types.ObjectId;

// CREATE
const create = async (req, res) => {
    try{
		const group = new Group(req.body);
		group
			.save()
			.then( (docs) => { 
				res.status(200).json({ group: docs } || {});
			})
			.catch((error) => res.status(400).json({ error: error }));
	}catch(error){
    	res.status(400).json({error: 'Error group create', error });
	}
}

const add_new_member = async (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
		res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {
			const group = await Group.findOne({ "_id":id});

			if (!group) return res.status(400).json({ error: '	This group does\'t exist'}) 
			
			const user_id = req.body.id;

			await Group.updateMany(
				{ "_id ": id }, 
				{$addToSet: {members: user_id}}, 
				{ new: true }
			).then((docs) => {
				res.status(200).json({ group: docs });
			});
		} catch (error) {
			res.status(400).json({error: 'Error new menber push', error });
		}
	}
}

const add_new_event = async (req, res) => {
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
		const groups = await Group.find();
		res.status(200).json({groups: groups });
	}catch(error){
    	res.status(404).json({error: 'Error groups read', error });
	}
}
const read_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else try{
		const group = await Group
			.findOne({ "_id": id })
			.populate('members', '-password')
			.populate('events');

		res.status(200).json({group: group });
	}catch(error){
    	res.status(404).json({error: 'Error group read', error });
	}
}
// UPDATE
const update_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else {
		try {
			await Group.findOneAndUpdate({"_id": id}, {$set: req.body }, {new: true}).then( (docs) => {
				return res.status(200).json({msg: 'group update', docs });
			})
		} catch (error) {
			res.status(404).json({error: 'Error group update', error });
		}
	}
}
// DELETE
const delete_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else{
		try {
			await Group.findOneAndDelete( {"_id": id}).then((docs) => {
				return res.status(200).json({ msg: 'Deleted group: ', docs });
			});
		} catch (error) {
			res.status(400).json({error: 'Error group delete', error });
		}
	}
}

module.exports = {
	create,
    add_new_member,
	read,
    add_new_event,
	read_id,
	update_id,
	delete_id
}