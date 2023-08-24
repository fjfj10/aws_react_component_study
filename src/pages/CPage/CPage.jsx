import React, { useState } from 'react';
import UseMemoContainer from '../../Components/UseMemoContainer/UseMemoContainer';

function CPage(props) {
    const [ studnetYear, setStudentYear ] = useState("1");
    const [ hobby, setHobby ] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "studuntYear") {
            setStudentYear(value);
        }else {
            setHobby(value);
        }
    }

    return (
        <div>
            <p>당신은 몇 학년 입니까?</p>
            <input type="number" name='studuntYear' onChange={handleInputChange}/>
            <p>당신의 취미는 무엇입니까?</p>

            <label htmlFor="h1">soccer</label>
            <input type="radio" id='h1' name='hooby' value={"soccer"} onChange={handleInputChange}/>

            <label htmlFor="h2">basketball</label>
            <input type="radio" id='h2' name='hooby' value={"soccer"} onChange={handleInputChange}/>

            <label htmlFor="h3">baseball</label>
            <input type="radio" id='h3' name='hooby' value={"baseball"} onChange={handleInputChange}/>

            <label htmlFor="h4">golf</label>
            <input type="radio" id='h4' name='hooby' value={"golf"} onChange={handleInputChange}/>

            <UseMemoContainer studentYear={studnetYear} hobby={hobby} />
        </div>
    );
}

export default CPage;