import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const dataList = await fetch("https://fakestoreapi.com/users");
    const data = await dataList.json();
    let userName = data.map((item) => {
      return item.username;
    });
    setList(userName);
    //console.log(list);
  }
  function changeHandle(e) {
    setName(e.target.value);
    let filteredData = list.filter((item) => {
      return item.toLowerCase().includes(name.toLowerCase());
    });
    setFilterList(filteredData);
    if(filteredData.length<=0){
      setFilterList([]);
    }
    console.log(filterList, list);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandle}></input>
      <br />

      {filterList.length > 0 &&
        filterList.map((item) => {
          return <p>{item}</p>;
        })}
    </div>
  );
}

export default App;
