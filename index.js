
function superbowlWin(records){
    let found = records.find((record)=>{
        
        return record.result === 'W'
            
        
    })
//console.log(found)
if (found){
    return found.year;
};

 }
 
 l