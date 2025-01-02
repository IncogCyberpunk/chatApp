import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    fullName: {
        required: true,
        type: String,
        trim: true,
    },
    username:{
        required: true,
        type: String,
        unique: true,
        trim: true,
        maxlength: 30,
        minlength: 4,
    },
    password:{
        required: true,
        type: String,
        trim:true,
    },
    gender: {
        type: String,
        enum: ["male","female","others",],
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    }
    //  timestamps: true is used to store the time when the document was created and updated
},{timestamps: true});
const User= mongoose.model ("user",userSchema);
export default User;