let array = [];
let id = 0;

const create = (req,res) =>{
    const {text ,time } = req.body;
    array.push({id,text,time});
    id++
    res.status(200).json(array)

}

const read = (req,res) =>{
    res.status(200).json(array) 
}
const update = (req,res) =>{
    const {text} = req.body;
    let index = array.findIndex((arr) => arr.id == req.params.id );
    array[index] = {
        id: array[index].id,
        text: text || array[index].text,
        time: array[index].time
    };
    res.status(200).json(array)
    
}

const remove = (req,res) => {
    let index = array.findIndex((arr) => arr.id == req.params.id ) 
    array.splice(array[index],1)
    res.status(200).json(array)
}


module.exports ={
    create,
    read,
    update,
    remove
}