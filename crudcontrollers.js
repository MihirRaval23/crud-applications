import studentmodel from "../models/crudschema.js";


const getallRecords = async(req,res)=>{
    try {
        const data = await studentmodel.find({})
        res.send(data)
    } catch (error) {
        console.log(error.message)
    }
    console.log("get record")
};

const createnewrecord = async(req,res)=>{
        try {
            const{name,age,city,fees} = req.body;
            const data  = await studentmodel({
                name:name,
                age:age,
                city:city,
                fees:fees
            })
            if(data){
                await data.save();
                console.log("New record created")
            }
            res.send(data)
        } catch (error) {
            console.log(error.message)
        }
};

const readrecordbyid = async(req,res)=>{
    try {
        const result=await studentmodel.findById(req.params.id)
        res.send(result)
    } catch (error) {
     console.log(error.message)   
    }
    console.log("read record")
    

};

const updaterecordbyid = async(req,res)=>{
    try {
        const result = await studentmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send(result)
    } catch (error) {
        console.log(error.messsage)
    }
    console.log("update record")

};

const deleterecordbyid = async(req,res)=>{
    try {
        const result=await studentmodel.findByIdAndDelete(req.params.id,req.body)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
    console.log("delete record ")

};

const filterrecord = async(req,res)=>{
    try {
        const filter = req.query;
        const student = await studentmodel.find(filter);
        res.send(student) 
    } catch (error) {
        console.log(error.message)
    }
    console.log("filter the record")
    
};

const sortRecords = async (req, res) => {
    try {
        
        const { sortBy, order } = req.query;
        const sortOrder = order === 'desc' ? -1 : 1;
        const students = await studentmodel.find().sort({ [sortBy]: sortOrder });
        res.send(students);
    } catch (error) {
        console.log(error.message);
    }
    console.log("sort the record")
};

export {getallRecords,createnewrecord,readrecordbyid,updaterecordbyid,deleterecordbyid,filterrecord,sortRecords};