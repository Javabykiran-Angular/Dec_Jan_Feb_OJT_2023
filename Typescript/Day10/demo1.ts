//json object
// java script object notation 
// data is stored in key & value format 

let obj={
    id : 9,
    "fname":'Sumit',
    lname:'Raokhande'
}

// 1 using dot operator
// 2 using square operator

// 1 using dot operator
    // console.log(`
    //         Id          :: ${obj.id}
    //         First name  :: ${obj.fname}
    //         Last Name   :: ${obj.lname}
    // `)

    // 2 using square operator

    // console.log(`
    //         Id          :: ${obj["id"]}
    //         First name  :: ${obj['fname']}
    //         Last Name   :: ${obj["lname"]}
    // `);

    //Array of Object
    

    let arrObj=[
        {
            id : 9,
            "fname":'Sumit',
            lname:'Raokhande',
            country:{
                cid:1,
                cname:'India'
            },
            month:["jan","Oct","Dec"],
            result:[
                {
                    subj:"M1",
                    marks:40
                },
                {
                    subj:"M2",
                    marks:45
                },
                {
                    subj:"M3",
                    marks:50
                }
            ]
        },
        {
            id : 6,
            "fname":'Kiran',
            lname:'Raokhande',
            country:{
                cid:2,
                cname:'US'
            },
            month:["Feb","Aug","Nov"],
            result:[
                {
                    subj:"M1",
                    marks:45
                },
                {
                    subj:"M2",
                    marks:55
                },
                {
                    subj:"M3",
                    marks:60
                }
            ]
        },
        {
            id : 3,
            "fname":'Spruha',
            lname:'Raokhande',
            country:{
                cid:3,
                cname:'Japan'
            },
            month:["March","July","Sept"],
            result:[
                {
                    subj:"M1",
                    marks:60
                },
                {
                    subj:"M2",
                    marks:65
                },
                {
                    subj:"M3",
                    marks:70
                }
            ]
        }
    ]

    // console.log(`
    //       Id        :: ${arrObj[1].id}
    //       First Name:: ${arrObj[1].fname}
    //       Last Name :: ${arrObj[1].lname}
    // `);

    // console.log(arrObj)

    // for(let i=0;i<arrObj.length;i++){

    //     console.log(`
    //         Id         :: ${arrObj[i].id}
    //         First name :: ${arrObj[i].fname}
    //         Last Name  :: ${arrObj[i].lname}
    //         Country    :: ${arrObj[i].country.cname}
    //         Month      :: ${arrObj[i].month.join(" ")}
    //             ------- Result------------
    //     `)

    //     // for(let j=0;j<arrObj[i].result.length;j++){
    //     //     console.log(`
    //     //             Subject :: ${arrObj[i].result[j].subj}
    //     //             Marks   :: ${arrObj[i].result[j].marks}
    //     //     `)
    //     // }

        
        
    //     arrObj[i].result.forEach((value)=>{
    //         console.log(`
    //                 Subject :: ${value.subj}
    //                 Marks   :: ${value.marks}
    //         `)
    //     })
    // }


    let response={
        msg:"success",
        data:[
            {
                id : 3,
                "fname":'Spruha',
                lname:'Raokhande',
                country:{
                    cid:3,
                    cname:'Japan'
                }
            },
            {
                id : 4,
                "fname":'Spruha',
                lname:'Raokhande',
                country:{
                    cid:3,
                    cname:'Japan'
                }
            },
            {
                id : 10,
                "fname":'Spruha',
                lname:'Raokhande',
                country:{
                    cid:3,
                    cname:'Japan'
                }
            }
        ]
    }

    response.data.forEach((value)=>{
        console.log(`
            ID        :: ${value.id}
            First Name:: ${value.fname}
            Last Name :: ${value.lname}
            Country   :: ${value.country.cname}
        `)
    })