//Load models
const { Ticketing, Event } = require('../models/schemaModel');

const ObjectID = require('mongoose').Types.ObjectId;

// CREATE
const create = async (req, res) => {
    const id = req.params.eventid;
    try{
		const ticketing = new Ticketing({
            title: req.body.title,
            user_id: req.body.user_id,
            event_id: id
        });

		ticketing
			.save()
			.then( (docs) => { 
				res.status(200).json({ ticketing: docs } || {});
			})
			.catch((error) => res.status(400).json({ error: error }));
	}catch(error){
    	res.status(400).json({error: 'Error ticketing create', error });
	}
}
const buy_new_ticket = async (req, res) => {
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

// READ
const read = async (req, res) => {
	try{
		const ticketings = await Ticketing.find();
		res.status(200).json({ticketings: ticketings });
	}catch(error){
    	res.status(400).json({error: 'Error ticketings read', error });
	}
}
const read_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else {

		try {
			const ticketing = await Ticketing.findOne({ "_id": id });
			res.status(200).json({ticketing: ticketing });
		} catch (error) {
			res.status(404).json({error: 'Error ticketing read id', error });
		}
	}
}
// UPDATE
const update_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else try{
		await Ticketing.findOneAndUpdate({"_id": id}, {$set: req.body }, {new: true}).then( (docs) => {
			return res.status(200).json({msg: 'ticketing updated', docs });
		})
	}catch(error){
    	res.status(404).json({error: 'Error ticketing update', error });
	}
}
// DELETE
const delete_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else try{
		await Ticketing.findOneAndDelete( {"_id": id}).then((docs) => {
			return res.status(200).json({ msg: 'Deleted ticketing: ', docs });
		});
	}catch(error){
    	res.status(404).json({error: 'Error ticketing delete', error });
	}
}
module.exports = {
	create,
	read,
	buy_new_ticket,
	read_id,
	update_id,
	delete_id
}