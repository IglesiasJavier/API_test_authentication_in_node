import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/companydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( db => console.log('conection ok'))
.catch(error => console.log(error) );