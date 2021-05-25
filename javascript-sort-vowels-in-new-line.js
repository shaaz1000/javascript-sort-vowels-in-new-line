let vowelarr = []
let normalArr = []
let mergeArray
let mergeString
let removeComma
function sortVowels(string){
  let stringToArr = string.split("")
  stringToArr.map(item=>{
        if(item == "a" || item == "e" || item == "i" || item == "o" || item == "u"){
            vowelarr.push(item)
            vowelarr.sort((a,b)=>{
                return a - b
            })
            
        }
        else{
          normalArr.push(item)
        }
      mergeArray = vowelarr.concat(normalArr)
      
      mergeString = mergeArray.toString()
      removeComma = mergeString.replace(/,/g,"")
      
      
  })
}


console.log(sortVowels("javascriptloops"))
for(let i = 0;i<removeComma.length;i++){
        console.log(removeComma[i])
      }


