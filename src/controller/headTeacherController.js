import headTeacherController from "../models/HeadTeacher";
class  headTeacherController
{

    static async getAllBabyeyi(req,res){
    const AllBabyeyi = await  Babyeyi.find();
        res.send({data:AllBabyeyi});
    }


    static async getOneBabyeyi(req,res){
        const AllBabyeyi= await  Babyeyi.findById(req.params.id);
        if(!AllBabyeyi){
            return res.status(404).json({error:"category not fund"});
        }
        return res.status(200).json({message:"category get successfull",data:AllBabyeyi});
    }
    
    static async updateAll(req,res){
        const AllBabyeyi= await  Babyeyi.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!AllBabyeyi){
            return res.status(404).json({error:"update not found"});
        }
        return res.status(200).json({message:"Updated Successfully",data:AllBabyeyi});
    }

    static async deleteBabyeyi(req,res){
        const AllBabyeyidel= await  Babyeyi.findByIdAndDelete(req.params.id);
        if(!AllBabyeyidel){
            return res.status(404).json({error:"delete not found"});
        }
        return res.status(200).json({message:"deleted Successfully",data:AllBabyeyidel});
    }
static async createBabyeyi(req,res){
    try{ 
        const newBabyeyi= new Babyeyi({
            name:req.body.name
        });
        newBabyeyi.save();
        res.send(newBabyeyi)
    }catch(error){
        res.status(400).send({message:"internal serever error ", error:error.message})
    }
}


}



export default headTeacherController;