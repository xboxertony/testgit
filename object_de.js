let o1 = {
    "member":5
}

function bindvalue(obj,pro,callback){
    let v = obj[pro]
    Object.defineProperty(obj,pro,{
        get:()=>{
            return v
        },
        set:(new_v)=>{
            v = new_v
            callback(v)
        }
    })
}

bindvalue(o1,"member",(v)=>{return v})

console.log(o1.member)

o1.member = 9
console.log(o1.member)

o1.member = 11
console.log(o1.member)