//Load models
const { Answer, Question, Survey, Event } = require('../models/schemaModel');

const ObjectID = require('mongoose').Types.ObjectId;

// CREATE
const create = async (req, res) => {
	const id = req.params.eventid;

    try{
        const survey = await Survey({
            title: req.body.title,
            user_survey_id: req.body.user_survey_id,
            event_id: id
        });

        survey
            .save()
            .then((docs) => {
                res.status(201).json({ survey: docs} || {} );
            })
            .catch((error) => res.status(400).json({ error: error }));
	}catch(error){
    	res.status(400).json({error: 'Error survey create', error });
	}
}

const add_new_question = async (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
		res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {
            const question = new Question({
                question: req.body.question,
            });

            await question.save().then((docs) => {
                console.log(docs.id);

                Survey.findOneAndUpdate(
                    { "id ": id}, 
                    {$push: {questions: docs.id}}, 
                    { new: true },
                    (err, docs) => {
                        if (err) res.status(400).json({ error: err });
                    }
                );

                res.status(400).json({ question: docs });
            });
        
		} catch (error) {
			res.status(400).json({msg: 'Error new question push', error });
		}
	}
}

const add_new_answer = async (req, res) => {
    const {id, questionid} = req.params;

    if (!ObjectID.isValid(id)){
		res.status(400).json({ error: 'This id doesn\'t exist' });
	} else {
		try {
            const answer = new Answer({
                answer: req.body.answer,
                user_id: req.body.user_id
            });

            await answer.save().then((docs) => {
                console.log(docs.id);

                Question.findOneAndUpdate(
                    { "id ": questionid}, 
                    {$addToSet: {answer: docs.id}}, 
                    { new: true },
                    (err, docs) => {
                        if (err) res.status(400).json({ error: err });
                    }
                );

                res.status(400).json({ answer: docs });
            });
        
		} catch (error) {
			res.status(400).json({msg: 'Error new question push', error });
		}
	}
}
// const add_question = async (req, res) => {
// 	const id = req.params.eventid;

//     try{
//         const survey = await Question({
//             title: req.body.title,
//             user_survey_id: req.body.user_survey_id,
//             event_id: id
//         });

//         survey
//             .save()
//             .then((docs) => {
//                 res.status(201).json({ survey: docs} || {} );
//             })
//             .catch((error) => res.status(400).json({ error: error }));

// 	}catch(error){
//     	res.status(400).json({error: 'Error survey create', error });
// 	}
// }
// READ
const read = async (req, res) => {
	try{
		const surveys = await Survey.find();
		res.status(200).json({surveys: surveys });
	}catch(error){
    	res.status(404).json({error: 'Error surveys read', error });
	}
}
const read_id = async (req, res) => {
	const id  = req.params.id;

	if (!ObjectID.isValid(id)){
		return res.status(400).json({ error: 'This id doesn\'t exist' });
	}else {
		try {
			const survey = await Survey.findOne({ "_id": id });
			res.status(200).json({survey: survey });
		} catch (error) {
			res.status(400).json({error: 'Error survey read', error });
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
			await Survey.findOneAndUpdate({"_id": id}, {$set: req.body }, {new: true}).then( (docs) => {
				res.status(200).json({survey: 'survey update', docs });
			})
		} catch (error) {
			res.status(400).json({error: 'Error survey update', error });
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
			await Survey.findOneAndDelete( {"_id": id}).then((docs) => {
				res.status(200).json({ survey: 'Deleted survey: ', docs });
			});
		} catch (error) {
			res.status(400).json({error: 'Error survey delete', error });
		}
	}
}

module.exports = {
	create,
    add_new_question,
    add_new_answer,
	read,
	read_id,
	update_id,
	delete_id
}