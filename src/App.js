import React, { useState, useRef } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [name, updName] = useState({ bn: '', gn: '' });
  const [disp, upddisp] = useState('');
  const nameChng = (event) => {
    updName((prevObj) => {
     upddisp('')
      return { ...prevObj, [event.target.name]: event.target.value };
    })
  }
  const run = () => {
    if (name.bn.trim().length === 0 && name.gn.trim().length === 0) {
      // console.log(name.bn + " " + name.gn);
      alert("Boy's and Girl's Name is empty !!");
    }
    else if (name.bn.trim().length === 0) {
      alert("Boy's Name is empty !!");
    }
    else if (name.gn.trim().length === 0) {
      alert("Girl's Name is empty !!");
    }
    else {
      name.bn = name.bn.toLowerCase();
      name.gn = name.gn.toLowerCase();
      let char_arr_b = [];
      let char_arr_g = [];
      let i, length = 0;
      let flame = 'FLAMES';
      for (i = 0; i < 26; i++) {
        char_arr_b.push(0);
        char_arr_g.push(0);
      }
      for (i = 0; i < name.bn.length; i++) {
        if (name.bn.charCodeAt(i) >= 97 && name.bn.charCodeAt(i) <= 122) {
          // console.log(name.bn[i]);
          char_arr_b[name.bn.charCodeAt(i) - 97]++;
          // console.log();
        }
      }
      for (i = 0; i < name.gn.length; i++) {
        if (name.gn.charCodeAt(i) >= 97 && name.gn.charCodeAt(i) <= 122)
          char_arr_g[name.gn.charCodeAt(i) - 97]++;
      }
      for (i = 0; i < 26; i++) {
        if(Math.abs(char_arr_b[i] - char_arr_g[i]))
        length += Math.abs(char_arr_b[i] - char_arr_g[i]);
      }
      // console.log(char_arr)
      console.log(length);
      // console.log(name.bn + " " + name.gn);
      i = 0;
      let size = 6;
      while (size > 1) {
        i = (i + length - 1) % size;
        // console.log(i);
        flame = flame.slice(0, i) + flame.slice(i + 1, size);
        size--;
        if (i === size)
          i = 0;
        // console.log(i)
        // console.log(flame);
      }
      if (flame === 'F')
        upddisp( 'Friends');
      else if (flame === 'L')
        upddisp( 'Lover');
      else if (flame === 'A')
        upddisp( 'Affection');
      else if (flame === 'M')
        upddisp( 'Marriage');
      else if (flame === 'E')
        upddisp( 'Enemy');
      else if (flame === 'S')
        upddisp( 'Sister');
      else
        upddisp( 'Sorry ! Error from Server Side.');
        // console.log(disp);
    }
  }
  return (
    <>
      <div className="page">
        <div className="header-div">
          <h2 className="header-text">FLAMES</h2>
        </div>
        <div className="body-div">
          <div className="form-fit">
            <div className="form-group mb-4">
              <input type="text" className="form-control" id="boy-name" aria-describedby="boy-name" placeholder="Boy's Name" autoComplete="none" onChange={nameChng} value={name.bn} name='bn' />
            </div>
            <div className="form-group mb-3">
              <input type="text" className="form-control" id="girl-name" aria-describedby="girl-name" placeholder="Girl's Name" autoComplete="none" onChange={nameChng} value={name.gn} name='gn' />
            </div>
            <button type="button" className="btn btn-warning go-btn " onClick={run}>GO FLAMES</button>
          </div>
          <div className="result-div">
            <div className="fit-result">
              <h3 className="result-text">{disp}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
