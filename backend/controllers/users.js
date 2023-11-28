const {pool} =require("../models/db")
const jwt = require("jsonwebtoken")
const bcrypt =require("bcrypt")
const { query } = require("express")
const users ={}
users.register = async(req,res)=>{
    const {firstname,lastname,email,password,image,role_id}=req.body
    const encryptedPassword = await bcrypt.hash(password,10)
    const query = `insert into users (firstname,lastname,email,password,image,role_id) values ($1,$2,$3,$4,$5,$6) returning *;`
    const data = [
        firstname,
        lastname,
        email.toLowerCase(),
        encryptedPassword,
        image,
        role_id
    ]
    pool.query(query,data)
    .then((results)=>{
        res.status(200).json({
            success:true,
            message:"Account has been added",
            results:results.rows
        })
    })
    .catch((error)=>{
        res.status(409).json({
            success:false,
            message:"The email already exists",
            error,
        })
    })
}
users.login = async(req,res)=>{
    const {email,password}=req.body
}
users.getAllUsers =(req,res)=>{
    pool.query(`SELECT * from users`)
    .then((results)=>{
        res.status(200).json({
            success:true,
            message:"Here are all users",
            results:results.rows
        })
    })
    .catch((error)=>{
        res.status(500).json({
            success:false,
            message:"Something went wrong kindly try again later",
            error
        })
    })
}
module.exports =users