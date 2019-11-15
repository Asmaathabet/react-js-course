import React from 'react'

function NameList() {
    // const names = ['Ali', 'Ahmed' , 'Mohammed']
    // const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Ali',
            age: 30,
            skill: 'React'
        },
        {
            id: 2 ,
            name: 'Ahmed',
            age: 25,
            skill:'Angular'
        },
        {
            id: 3,
            name: 'Mohammed',
            age: 22 ,
            skill: 'Vue'
        },
    ]
    const PersonList = persons.map(person => 
    <h2> I am {person.name}. I am {person.age} years old . I know {person.skill} </h2>
    )
    return (
        <div>
            
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {/* {
              nameList  
            } */}
            {PersonList}
        </div>
    )
}

export default NameList
