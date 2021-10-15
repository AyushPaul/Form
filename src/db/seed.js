const {db,Center,Season,Batch,Course,Teacher} = require('./models.js')

const seed = async ()=>{
    try{

        db.sync({alter:true})

        await Center.bulkCreate([
            {id:'PP' , name:'PitamPura' , city:'New Delhi'},
            {id:'DW' , name:'Dwarka' , city:'New Delhi'},
            {id:'NO' , name:'Noida' , city:'New Delhi'},
            {id:'DD' , name:'DehraDun' , city:'DehraDun'},
            {id:'OL' , name:'Online' , city:'New Delhi'}
        ],{
            ignoreDuplicates:true
        })

    }catch(e){
        console.error(e)
    }
}

seed()