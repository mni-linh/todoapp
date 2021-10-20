import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Button from 'mui-button';

export const ToDoList = () => {
    const { data, setData, name, setName, deadline, setDeadline } = useContext(TodoContext);
    const handleClick = (e) => {
        e.preventDefault();
        const newItem = {
            id: data.length + 1,
            name: name,
            deadline: deadline,
            isCompleted: false
        };
        setData([...data, newItem]);
        setName('');
        setDeadline('');
    }
    
    return (
        <div>
            <h2>ToDo List</h2>
            <table style={{border: '2px dashed green', marginLeft: 'auto', marginRight: 'auto', 'borderRadius':'5px', padding: '10px', paddingBottom:'10px', marginBottom:'20px', boxShadow: '5px 10px 8px #888888'}}>
                <tbody>
                    <tr >
                        <td><b>Name:</b></td>
                        <td>
                        <input style={{border: '1px solid', 'borderRadius':'5px', paddingBottom:'5px'}} value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Deadline:</b></td>
                        <td>
                            <input style={{border: '1px solid', 'borderRadius':'5px', paddingBottom:'5px'}} value={deadline} onChange={(e) => {
                                setDeadline(e.target.value);
                            }} />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td style={{paddingTop:'5px'}}colSpan="2">
                            <button style={{cursor:'pointer', backgroundColor:'#4CAF50', border:'none', borderRadius:'3px', color:'white', padding: '5px', textAlign: 'center', display:'inline-block', fontSize:'15px', paddingLeft:'10px', paddingRight:'10px', transitionDuration:'0.4s', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}} onClick={handleClick}>Add</button>
                        
                        </td>
                    </tr>
                </tfoot>
             </table>
            {data.map((item) => {
                //process js

                return (
                    <div>
                        <br/>
                        {item.name} - {item.deadline} : { item.isCompleted ? 'COMPLETED' : 'IN-COMPLETE'}
                        <br/>
                        <br/>
                    </div>

                )
            })}
        </div>
    )
};