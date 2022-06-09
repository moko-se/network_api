//Load models
const { User } = require('../models/schemaModel');
const bcrypt = require('bcryptjs');

const ObjectID = require('mongoose').Types.ObjectId;

// CREATE
const create = async (req, res) => {
    try{
		const user = new User(req.body);
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				if (err) throw err;

				user.password = hash;

				user
					.save()
					.then( (data) => { 
						res.status(200).json({ user: data } || {});
					})
					.catch((error) => res.status(400).json({ msg: error }));
			})
		})
	}catch(error){
    	res.status(400).json({msg: 'Error user create' });
	}
}
// READ
const read = async (req, res) => {
	try{
		const users = await User.find();
		res.status(200).json({users: users });
	}catch(error){
    	res.status(404).json({error: 'Error user read', error });
	}
}
const read_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else{

		try {
			const user = await User.findOne({ '_id': id });

			if (!user) return res.status(400).json({ error: 'This user doesn\'t exist'});
			return res.status(200).json({user: user });
		} catch (error) {
			res.status(404).json({error: 'Error user read', error });
		}
	}
}
// UPDATE
const update_id = async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {
			await User.findOneAndUpdate({"_id": id}, {$set: req.body }, { new: true}).then( (docs) => {
				return res.status(200).json({msg: 'user update', docs });
			});
		} catch (error) {
			res.status(400).json({error: 'error user update', error });
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
			await User.findOneAndDelete( {"_id": id}).then((docs) => {
				return res.status(200).json({ msg: 'Deleted user: ', docs });
			});
		} catch (error) {
			res.status(404).json({msg: 'Error user delete', error });
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