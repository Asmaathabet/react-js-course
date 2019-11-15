import React from 'react'
// import Person from './Person'

function NameList() {
    const names = ['Ali', 'Ahmed' , 'Mohammed', 'Ahmed']
    const nameList = names.map((name, index) => <h2 key ={index}>{index}{name}</h2>)
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Ali',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2 ,
    //         name: 'Ahmed',
    //         age: 25,
    //         skill:'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Mohammed',
    //         age: 22 ,
    //         skill: 'Vue'
    //     },
    // ]

    // NameList is responsible to render List
    // const PersonList = persons.map(person => 
    //  <Person key={person.id} person ={person}></Person>
    // )
    return (
        <div>
            
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            { nameList }
            {/* {PersonList} */}
        </div>
    )
}

export default NameList
