import mongoose from 'mongoose';
import User from '../models/user.js';



const fbUserDataDeletion = async (req, res) => {

    const { id } = req.body;

    try {

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg: 'No user found with that id!'});
        await User.findByIdAndRemove(id);
        res.status(200).json({msg: 'Your Account successfully deleted.'})
        
    } catch (error) {
        return res.status(500).json({msg: 'Something went worng!'})
    }
}




// const fbUserDataDeletion = async (req, res) => {
//         const {accessToken, userID} = req.body;
    
//         const URL = `https://graph.facebook.com/v2.9/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;
        
//         await fetch(URL).then(res => res.json())
//                                       .then(res => {
//                                         const { id } = res;
//                                         if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No user found with that id");
//                                         await User.findByIdAndRemove(id);
//                                         res.status(200).json({msg: 'Your Account successfully deleted.'})
//                                     })
//                                     .catch(err => {
//                                       return res.status(500).json({msg: err.message})
//                                   });
// } 
    
    
