import user from "../model/usermodel.js"; 

export const create = async (req, res) => {
    try {
        let userdata =new user(req.body);
        const {email}=userdata;
        const userExist=await user.findOne({email});  //user irutha
        if(userExist){ 
            return res.status(400).json({message:"User already exist"});
        }
        const saveduser=await userdata.save();
        res.status(200).json({saveduser});
        
        }
    catch (error) {
        res.status(500).json({ error: "internal error" }); 
    }
};
export const createUser = async (req, res) => {
    try {
        const users=await user.find();
        if(users.length===0){
            return res.status(400).json({message:"No user found"});
        }
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ error: "internal error" }); 
    }
};
export const update =async(req,res)=>{
    try{
        const id =req.params.id;
        const userExist =await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});

        }
        const updateusers=await user.findByIdAndUpdate(id,req.body,{new:true});

        res.status(200).json({updateusers});
    }
    catch(error){
        res.status(500).json({error:"internal error"});
    }
}

export const deletes = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await user.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
};
