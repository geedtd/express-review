export {
    find    
}

const todos = [
    {text: 'Do the dishes' , done: false , _id: 147852369},
    {text: 'Mop' , done: false , _id: 147811369},
    {text:'Sweep' , done: false , _id: 147222369},
    
]

const find = (conditions, callback) => {
    try {
        //make sure conditions is an object, if not throw a TypeError
        if(!(conditions instanceof Object)){
            throw new TypeError('Please pass in an object')
        }
        let conditionKeys = Object.keys(conditions)
        //if object is empty return all todos
        if(!conditionKeys.length === 0) return callback(null, todos)
        //make sure that all the properties on the conditions exists on the object
        if(!conditionKeys.every((i)=> Object.keys(todos[0]).includes(i))) {
            throw new Error('Must fund by properties that exist on the array items')
        } else {
            //Finally actually find what we are looking for
            return callback(null, todos.filter((todo) =>
            conditionKeys.every((propKey)=> todo(propKey) === conditions(propKey))))
        }

    } catch (error) {
        console.log(error)
        callback(error, [])
    }
}