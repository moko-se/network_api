const mongoose = require('mongoose');
const { isEmail } = require('validator');

const Schema = mongoose.Schema;

/* create userModel */
const userModel = new Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [18, 'Age must not inferior to 18 years']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be more than 8 characters']
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        validate: [isEmail],
        unique: [true, 'Email already exist'],
        required: [true, 'Email name is required'],
        index: true
    },
    role: {
        type: String,
        enum:['user', 'orga'],
        default: 'user'
    },
    
    }, {
      collection: 'users',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

/* create eventModel */
const eventModel = new Schema({
    title: {
        type: String,
        require: [true, 'Title is required']
    },
    descripton: {
        type: String,
        require: [true, 'Description is required']
    },
    begin: {
        type: Date,
        default: Date(),
        // require: [true, 'begin Date is required']
    },
    end: {
        type: Date,
        default: Date(),
        // require: [true, 'End date is required']
    },
    location: {
        type: String,
        require: [true, 'Location is required']
    },
    picture: {
        type: String,
        default: 'cover.jpg'
    },
    status: {
        type: String,
        enum: ['private', 'public'],
        default: 'public'
    },
    surveys: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'survey'
    }],
    members :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        unique: [true, 'User already exist']
    }],
    messages :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message'
    }],
    }, {
      collection: 'events',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

/* create groupModel */
const groupModel = new Schema({
    title: {
        type: String,
        require: [true, 'title is required']
      },
    descripton: {
        type: String,
        require: [true, 'Description is required']
    },
    icon: {
        type: String,
        default: 'icon.jpg'
    },
    picture: {
        type: String,
        default: 'picture.jpg'
    },
    status: {
        type: String,
        enum: ['public', 'private', 'secret'],
        default: 'public'
    },
    publish: {
        type: Boolean,
        default: true
    },
    createEvent: {
        type: Boolean,
        default: true
    },
    myevents:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    }],
    members :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        unique: [true, 'User already exist'],
    }],
    }, {
      collection: 'groups',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

/* create threadModel */
const messageModel = new Schema({
    message: {
        type: String,
        enum: ['group','event', 'message'],
        default: 'message'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },

    }, {
      collection: 'messages',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});
const threadModel = new Schema({
    type: {
        type: String,
        enum: ['group','event', 'message'],
        default: 'message'
    },
    link_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Link is required']
    },
    messages: [ messageModel ],
    }, {
      collection: 'threads',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});
  
/* create albumModel */
const albumModel = new Schema({
    pictures: [{
        type: String,
        require: [true, 'pictures is required']
    }],
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event',  
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  
    }
    }, {
      collection: 'albums',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

/* create surveyModel */
const answerModel = new Schema({
    answer: {
        type: String,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  
    }
    }, {
      collection: 'answers',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

const questionModel = new Schema({
    question: {
        type: String  
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'answer',
    },
    }, {
      collection: 'questions',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

const surveyModel = new Schema({
    title: {
        type: String,
        default: 'Survey title'
    },
    user_survey_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question',
    }],
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event',  
    },
    }, {
      collection: 'surveys',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

/* create surveyModel */
const ticktingModel = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  
    },
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event', 
    }
    }, {
      collection: 'ticketings',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

const ticketModel = new Schema({
    name: {
        type: String,
    },
    montant: {
        type: Number,
        default: 15
    },
    quantity:{
        type: Number,
        default: 1
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  
    }
    }, {
      collection: 'tickets',
      minimize: true,
      versionKey: false
    }).set('toJSON', {
      transform: (doc, ret) => {
        ret.id = doc._id;
    
        delete ret._id;
    }
});

const User = mongoose.model('user', userModel);
const Event = mongoose.model('event', eventModel);
const Group = mongoose.model('group', groupModel);
const Thread = mongoose.model('thread', threadModel);
const Album = mongoose.model('album', albumModel);
const Survey = mongoose.model('survey', surveyModel);
const Question = mongoose.model('question', questionModel);
const Answer = mongoose.model('answer', answerModel);
const Ticketing = mongoose.model('ticketing', ticktingModel);
const Ticket = mongoose.model('tickets', ticketModel);

module.exports = {
    User,
    Event,
    Group,
    Thread,
    Album,
    Survey, 
    Question,
    Answer,
    Ticketing,
    Ticket
}