import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from "react";


const data1 = [
  { movieName: "Die Hard", genre: "Action", stock: "5", rate: "2.5" },
  { movieName: "Get Out", genre: "Thriller", stock: "8", rate: "3.5" },
  { movieName: "Airplane", genre: "Comedy", stock: "7", rate: "3.5" },
  { movieName: "Wedding Crashers", genre: "Comedy", stock: "7", rate: "3.5" },
  { movieName: "Gone Girl", genre: "Thriller", stock: "7", rate: "4.5" },
  { movieName: "The Sixth Sense", genre: "Thriller", stock: "4", rate: "3.5" },
]



function App() {
  const [data, updatedData] = React.useState(
    data1
  );

 
function handleClick(index) {
      console.log(index);
     
      
    
      
      //  console.log(data1.splice(index,1));
      //   updatedData(data1);

        updatedData(()=>{
          let tempArray = data.filter(temp => temp.movieName!= data[index].movieName);
          console.log(tempArray);
          return tempArray;
        });
    

     }

 // does not work style="overflow-x:auto;"
  return (
    <div className="App" >
      {
        
      }
      <table>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>  </th>
        </tr>
      {  data.length < 1 && <h2>Data not found</h2>}
        {
          
        data.map((val, key) => {
          console.log(key);
        
          return (
         
            <tr key={key}>
              <td>{val.movieName}</td>
              <td>{val.genre}</td>
              <td>{val.stock}</td>
              <td>{val.rate}</td>
              <td><button onClick={() =>handleClick(key)} class="button">
                Delete
              </button></td>
            </tr>
          )
        })}
      </table>

    </div>
  );
}

export default App;
