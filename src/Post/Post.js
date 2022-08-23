import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import PuffLoader from "react-spinners/PuffLoader";
import style from '../Post/Post.module.css'

export default function Postjs () {
  
  const [getUser, setGetUser] = useState([]);
  const [loader, setLoader] = useState(true);
  const [surname, setSurname] = useState();
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [gmail, setGmail] = useState();
  const url = 'https://reqres.in/api/users"';

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setGetUser(data.data);
      })
      .catch((err) => console.log(err, "GetError"));
  }, []);
  console.log(getUser, "user");
  const OnAdd = () => {
    setName("");
    setSurname("");
    setYear("");
    setGmail("");
    fetch(`${url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name: name, surname: surname, year: year, gmail: gmail })
    }
    )
      .then((res) => res.json())
      .then((data) => setGetUser((getUser) => [...getUser, data]))
      .catch((err) => console.log(err, "PostError"));
  };
  const onDelete = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE"
    }).then((res) =>
      setGetUser(
        getUser.filter((item) => {
          return item.id !== id;
        })
      )
    ).catch(err=>{
        console.log(err,"DeleteEror");
    })
  };

    return (
    
    <div  style={{ margin: "auto" }}>
      <div className={style.thisisinput}>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type={"text"}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Surname"
        />
        <input
          type={"text"}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
        />
        <input
          type={"text"}
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          placeholder="Gmail"
        />
        <button className={style.button} onClick={OnAdd}>Send Data</button>
      </div>

      {loader ? (
        <div>
          <PuffLoader size={100} color={"#2C0091"} loading={loader} />
          <p> Sayt Table Rejimida Ishlamoqda!</p>
        </div>
      ) : (
        <div>
            <Table className={style.table} striped bordered hover>
                <thead>
                        <tr className={style.tabletext}>
                        <th><b>Name</b></th>
                        <th><b>Surname</b></th>
                        <th><b>Year</b></th>
                        <th><b>Gmail</b></th>
                        <th><b>Delete</b></th>
                        </tr>
                    </thead>
                    
                    
        {getUser.map((item) => {
            return (
                    <tbody className={style.Table1}>
                    <tr>
                <td className={style.name}>
                  {item.name}
                </td>
                <td className={style.surname}>
                  {item.surname}
                </td>
                <td className={style.year}>
                  {item.year}
                </td>
                <td className={style.gmail}>
                  {item.gmail}
                </td>
                <td className={style.stylebtn}>
                  <button className={style.btn} onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              </tr>
                    </tbody>
            );
          })}
            </Table>
          
        </div>
      )}
    </div>

    )
}