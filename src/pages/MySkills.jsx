import React from 'react'
import "./Myskills.css"

const MySkills = () => {
    return (

        <div className="skills-container">
            <h2>Habilidades</h2>
            <div className="skills">
                <div className="skill">
                    <span>HTML</span>
                    <div className="progress"><div className="bar expert"></div></div>
                    <span className="level">Expert</span>
                </div>
                <div className="skill">
                    <span>CSS</span>
                    <div className="progress"><div className="bar expert"></div></div>
                    <span className="level">Expert</span>
                </div>
                <div className="skill">
                    <span>JAVASCRIPT</span>
                    <div className="progress"><div className="bar expert"></div></div>
                    <span className="level">Expert</span>
                </div>
                <div className="skill">
                    <span>REACT</span>
                    <div className="progress"><div className="bar proficient"></div></div>
                    <span className="level">Proficient</span>
                </div>
            </div>

            <div className="skills">
                <div className="skill">
                    <span>NODEJS</span>
                    <div className="progress"><div className="bar proficient"></div></div>
                    <span className="level">Proficient</span>
                </div>
                <div className="skill">
                    <span>EXPRESSJS</span>
                    <div className="progress"><div className="bar novice"></div></div>
                    <span className="level">Novice</span>
                </div>
                <div className="skill">
                    <span>MONGODB</span>
                    <div className="progress"><div className="bar proficient"></div></div>
                    <span className="level">Proficient</span>
                </div>
                <div className="skill">
                    <span>MYSQL</span>
                    <div className="progress"><div className="bar novice"></div></div>
                    <span className="level">Novice</span>
                </div>

            </div>
        </div>
    )
}

export default MySkills
