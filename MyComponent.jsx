import React, {useState} from 'react'
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isStudent, NoYes] = useState(false)
    const updateName = () => {
        setName("Larry")
    }
    const updateAge = () =>{
        setAge("25")
    }
    const StduentOrno = () => {
        NoYes("Yes")
    }

    return(
            <div>
                <p>Name {name}</p>
                <button onClick={updateName}>Set Name</button>

                 <p>Age {age}</p>
                <button onClick={updateAge}>Set Age</button>

                <p>IsStudent {isStudent}</p>
                <button onClick={StduentOrno}>KnowIsStudent</button>
            </div>
    )
}
export default MyComponent