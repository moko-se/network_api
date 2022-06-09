//Load models
const { Event, Album } = require('../models/schemaModel');

const ObjectID = require('mongoose').Types.ObjectId;

// CREATE
const create = async (req, res) => {
	const id = req.params.eventid;
	const user_id = req.body.user_id;

    try{
		const myevent = await Event.findOne({ "_id": id });
		const event_members = myevent.members;

		console.log(event_members);

		event_members.map((el) => {
			if (el == user_id){
				const album = new Album({
					pictures: req.body.pictures,
					event_id: id
				});
		
				album.save((err, docs) => {
					if (err) res.status(400).json({ error: 'Oooops', err });
					res.status(200).json({ album: docs });
				});
			}
		});

	}catch(error){
    	res.status(400).json({error: 'Error group create', error });
	}
}

// READ
const read = async (req, res) => {
	try{
		const albums = await Album.find();
		res.status(200).json({albums: albums });
	}catch(error){
    	res.status(404).json({error: 'Error groups read', error });
	}
}
const read_id = async (req, res) => {
	const id  = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else {
		try {
			const album = await Album.findOne({ "_id": id });
			res.status(200).json({album: album });
		} catch (error) {
			res.status(400).json({error: 'Error album read', error });
		}
	}
}
// UPDATE
const update_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else {
		try {
			await Album.findOneAndUpdate({"_id": id}, {$set: req.body }, {new: true}).then( (docs) => {
				res.status(200).json({msg: 'album update', docs });
			})
		} catch (error) {
			res.status(400).json({error: 'Error album update', error });
		}
	}
}
// DELETE
const delete_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else {
		try {
			await Album.findOneAndDelete( {"_id": id}).then((docs) => {
				res.status(200).json({ msg: 'Deleted album: ', docs });
			});
		} catch (error) {
			res.status(400).json({error: 'Error album delete', error });
		}
	}
}

module.exports = {
	create,
	read,
	read_id,
	update_id,
	delete_id
}