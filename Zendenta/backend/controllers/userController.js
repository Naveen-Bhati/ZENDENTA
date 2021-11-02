import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

//@desc Register a new user
//@route POST /api/users/
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone, address, gender } = req.body

    const userExists = await User.findOne({ phone })

    if (userExists) {
        res.status(404)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        phone,
        address,
        gender
    })

    if (user) {
        res.status(201).json({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            gender: user.gender
        })
    } else {
        res.status(400);
        throw new Error('Invalid User Data')
    }
})


//@desc Get all users
//@route GET/api/users
//@access Private/Admin


const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})


export { registerUser, getUsers };