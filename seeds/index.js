const sequelize = require("../config/connection")
const {User,Post} = require("../models")

const users = [
    {
                username:"Darth Bane",
                password:"password"
            },
            {
                username:"Darth Malgus",
                password:"password1"
            },
            {
                username:"Darth Maul",
                password:"Password2"
            }  
]

const Posts = [
    {
                title:"Let me tell you a story",
                body:"Once upon a time in a galaxy far far away",
                UserId:1
            },
            {
                title:"My last statement",
                body:"At the end of the war, we lost to the Jedi",
                UserId:1
            },
            {
                title:"Color or saber",
                body:"It's really difficult to identify what color lightsaber matches your soul, believe deep",
                UserId:2
            }
    
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Post.bulkCreate(Posts);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()

