var data=[
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

newdata=data.map(i=>i['age']*2)
console.log(newdata)
//[ 44, 40, 34 ]