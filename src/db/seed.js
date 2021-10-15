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
        await Season.bulkCreate([
            {id:'S' , name:'Summer'},
            {id:'F' , name:'Fall'},
            {id:'W' , name:'Winter'},
            {id:'P' , name:'Spring'}
        ],{
            ignoreDuplicates:true
        })

        await Course.bulkCreate([
            {id:'LP' , name:'LaunchPad'},
            {id:'CX' , name:'Crux'},
            {id:'IB' , name:'Interview BootCamp'},
            {id:'AD' , name:'Android Dev'},
            {id:'WD' , name:'Web Dev'}
        ],{
            ignoreDuplicates:true
        })



    }catch(e){
        console.error(e)
    }
}

seed()