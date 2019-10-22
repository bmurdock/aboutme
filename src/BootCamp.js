import React from 'react';

const students = [
    { name: "Triston" },
    { name: "Yuta", shirtColor: "red" },
    { name: "Chase" },
];

function BootCamp(props) {
    return (
        <section className="bootcamp dark round">
            <h3>Helio MERN BootCamp</h3>
            <p>Teaching full-stack development using the MERN stack focusing on skills such as:
                <ul className="squeeze">
                    <li>Semantic HTML</li>
                    <li>CSS</li>
                    <li>JavaScript Fundamentals</li>
                    <li>Node.js and Express</li>
                    <li>Version Control using Git (and features specific to GitHub)</li>
                    <li>React</li>
                    <li>Mongo</li>
                </ul>
            </p>
            <Student name={students[0].name} />
            <Student {...students[1]} />
            <Student name="Chase" />

        </section>
    )
}

function Student(props) {
    return (
        <div>{props.name} is wearing a {props.shirtColor || 'unknown'} shirt.</div>
    )
}

export default BootCamp;