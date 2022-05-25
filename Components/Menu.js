import '../App.css';
import '../index.css'
import {useState} from 'react' 

function Menu(grade) {

        return(
    <div style={{
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        top: 48,
        width: '100%', height: 40,
        paddingLeft: 15, backgroundColor: 'grey'
    }}>
        <text className='menuItem'
            onClick={() =>
                grade=1}>
            Grade1
        </text>
        <text className='menuItem'
            onClick={() => grade=2}>
            Grade2
        </text>
        <text className='menuItem'
            onClick={() => grade=3}>
            Grade3
        </text>
        <text className='menuItem'
            onClick={() => grade=4}>
            Grade4
        </text>
        </div>
        )

}

export default Menu