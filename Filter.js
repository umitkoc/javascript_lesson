data=[
    {
        'name':'umit',
        'surname':'koc',
        'age':22
    },
    {
        'name':'elif',
        'surname':'ozturk',
        'age':20
    },
    {
        'name':'ali',
        'surname':'koc',
        'age':17
    }
]

newdata=data.filter(i=>i['age']<18)
console.log(newdata)
//[ { name: 'ali', surname: 'koc', age: 17 } ]
