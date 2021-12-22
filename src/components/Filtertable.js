import React, {useState} from 'react'
import Data from './Data.json';

function Filtertable ()  {

    const[searchTerm, setsearachTerm] = useState("");
    const[data, setData] = useState(Data);
    const[order, setorder] = useState("ASC");
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>  
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>  
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setorder("ASC");
        }
    };
    return (
        <div className="container">
            <input type="text" placeholder="search..." className="form-control" 
            style={{marginLeft:50, marginTop:20, marginBottom:20, width:400 }}
            onChange={(e) => {setsearachTerm(e.target.value)}}/>
            <table className="table table-bordered">
                <thead className="dark" style={{backgroundColor: 'lightblue'}}>
                    <tr>
                        <th>userID</th>
                        <th onClick={()=>sorting("id")}>Id</th>
                        <th onClick={()=>sorting("title")}>Title</th>
                        <th onClick={()=>sorting("body")}>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.filter((val)=> {
                        if (searchTerm === ""){
                            return val;
                        } else if(
                            val.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.title.toLowerCase().includes(searchTerm.toLowerCase())
                        ){
                            return val;
                        }
                    }).map( (m) => (  
                        <tr key={m.id}>
                            <td>{m.userId}</td>
                            <td>{m.id}</td>
                            <td>{m.title}</td>
                            <td>{m.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Filtertable