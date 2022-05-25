import { useState } from 'react'
import English from '../Books/TheWorld.jpg';
import '../App.css';
import '../index.css'
import { Header } from '../Components/Header'
import App from '../App'


const GradeSeven = ({ grade }) => {

    const [pic, setPic] = useState(
        English
    )
    const [menu, setMenu] = useState(false)
    const [work, setWork] = useState('')
    const [home, setHome] = useState(false)


    return (
        <div>
            {home ? (
                <App />
            )
                :
                (
                    !menu ?
                        (
                            <div>
                                <Header />
                                <header className="App-header">

                                    <div style={{ width: '100%', alignIems: 'center', justifyContent: 'center' }}>
                                        <h6 style={{ position: 'absolute', top: 0, cursor: 'pointer', paddingLeft: 45 }}
                                            onClick={() => setHome(!home)}
                                        >BACK</h6>
                                        <h3 className='gradeTitle'>
                                            Grade{grade}
                                        </h3>
                                        <img src={pic} className='gradeImage' alt="logo" />

                                        <div className='gradeMenu'>
                                            <label style={{
                                                position: 'absolute',
                                                top: 55,
                                                fontSize: 28,
                                                cursor: 'pointer'
                                            }}>=
                                            </label>
                                            <label style={{
                                                position: 'absolute',
                                                top: 55,
                                                fontSize: 28,
                                                cursor: 'pointer'
                                            }}>=
                                            </label>

                                            <label onClick={() => setMenu(!menu)}
                                                style={{
                                                    position: 'absolute',
                                                    top: 51,
                                                    paddingLeft: 3.5,
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}>_
                                            </label>
                                            <label onClick={() => setMenu(!menu)}
                                                style={{
                                                    position: 'absolute',
                                                    paddingLeft: 3,
                                                    top: 51,
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}>_
                                            </label>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        ) : (

                            <div>
                                <Header />

                                <header className="App-header">
                                    <div style={{ width: '100%', alignIems: 'center', justifyContent: 'center' }}>
                                        <h3 className='gradeTitle'>
                                            Grade{grade}
                                        </h3>
                                        <img src={pic} className='gradeImage' alt="logo" />

                                        <div className='gradeMenu'>
                                            <label style={{
                                                position: 'absolute',
                                                top: 55,
                                                fontSize: 28,
                                                cursor: 'pointer'
                                            }}>=
                                            </label>
                                            <label style={{
                                                position: 'absolute',
                                                top: 55,
                                                fontSize: 28,
                                                cursor: 'pointer'
                                            }}>=
                                            </label>

                                            <label onClick={() => setMenu(!menu)}
                                                style={{
                                                    position: 'absolute',
                                                    top: 51,
                                                    paddingLeft: 3.5,
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}>_
                                            </label>
                                            <label onClick={() => setMenu(!menu)}
                                                style={{
                                                    position: 'absolute',
                                                    paddingLeft: 3,
                                                    top: 51,
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}>_
                                            </label>
                                        </div>

                                        <div style={{
                                            position: 'absolute',
                                            width: 160, height: 559,
                                            top: 48, left: 0,
                                            opacity: 0.9,
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            backgroundColor: '#f47066',

                                        }}>

                                            <h3 style={{ color: '#fff' }}>
                                                <u> Choose Category:</u>
                                            </h3>

                                            <div style={{ paddingTop: 10 }}>
                                                <p style={{ color: '#fff', cursor: "pointer" }}
                                                    onClick={() => setWork('Homework')}>
                                                    Homework
                                                </p>
                                                <p style={{ color: '#fff', cursor: "pointer" }}
                                                    onClick={() => setWork('Assignments')}>
                                                    Assignments
                                                </p>
                                                <p style={{ color: '#fff', cursor: "pointer" }}
                                                    onClick={() => setWork('Tests')}>
                                                    Tests
                                                </p>
                                                <p style={{ color: '#fff', cursor: "pointer" }}
                                                    onClick={() => setWork('Exams')}>
                                                    Exams
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                </header>
                            </div>
                        )
                )}
        </div>
    )
}

export default GradeSeven