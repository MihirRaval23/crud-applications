import mongoose from "mongoose";

const studentschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    fees:{
        type:Number,
        require:true,
        validator:(value)=>value >=1000
    }

    
})


const studentmodel = mongoose.model('student',studentschema)

export default studentmodel;