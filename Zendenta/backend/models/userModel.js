import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

const User = mongoose.model('User', userSchema);
export default User