import dotenv from 'dotenv';
import models from '../../sequelize/models';

dotenv.config();

const {agency}=models;
class Agency{

 async createAgency(req,res){
    
     try{
    const newAgency={
        agencyName: req.body.agencyName,
        agencyLogo: req.body.agencyLogo,
        agencyEmail: req.body.agencyEmail,
        agencyPhone: req.body.agencyPhone,
        agencyWebsite: req.body.agencyWebsite,
    };



    const inserter = await agency.create(newAgency);
    const agencyRes = inserter.dataValues;
 
    res.status(201).json(
        {
         status:201,
         data:agencyRes 
        }
    )
     }catch(e){
        res.status(400).json(
            {
             status:400,
             error:e 
            })
     }
 }

}

export default new Agency();
