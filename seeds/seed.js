const sequelize = require("../config/connection");
const {User,Rascal,UnlockedItem,EquippedItem} = require("../models")

const seed = async ()=>{
    const userData = await User.create(
        {
          
            password:"password",
            email:"test@test.com",
            
        },
    {
        individualHooks:true
    })
    
    const rascalData = await Rascal.create(
        {
          
            name:"Bonko",
            UserId:1,
            level:10,
            color:"white",
            happiness:90,
            hunger:20,
            care:80,
            boredom:50,
            body:'body_fuzzy',
            eyes: 'eyes_pretty',
            mouth:'mouth_simple',
            nose: 'nose_cute',
            coins:1000

        },{
        individualHooks:true
    })

   
    const unlockData = await UnlockedItem.bulkCreate([
        {
            RascalId:1,
           name: 'arm_default',
           size:2.8,
        },
        {
            RascalId:1,
            name: 'arm_glove',
            size:3.5,
         },
         {
             RascalId:1,
            name: 'party_hat',
            size:1.7,
         },
         {
             RascalId:1,
            name: 'cherry',
            size:2.5,
         },
         {
             RascalId:1,
            name: 'waffle_cone',
            size:1.7,
         },
         {
             RascalId:1,
            name: 'body_fuzzy',
            type:'body'
         },
         {
             RascalId:1,
            name: 'body_curly',
            type:'body'
         },
         {
             RascalId:1,
            name: 'eyes_tired',
            type:'eyes'
         },
         {
             RascalId:1,
            name: 'eyes_pretty',
            type:'eyes'
         },
         {
             RascalId:1,
            name: 'eyes_glasses',
            type:'eyes'
         },
         {
            RascalId:1,
           name: 'nose_cute',
           type:'nose'
        },
        {
            RascalId:1,
           name: 'nose_disguise',
           type:'nose'
        },
        {
            RascalId:1,
           name: 'mouth_simple',
           type:'mouth'
        },
        
    ])

    
}



sequelize.sync({force:false}).then(()=>{
    seed();
})