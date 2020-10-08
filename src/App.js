import React, { useState } from 'react';
import Numpad from './components/Numpad'
import Button from './components/Button'
import './App.css';

function App() {
  const [inputNum, setInputNum] = useState({
    result: '',
    isOperatorExist: false,
    isDotExist: false,
    isFirstVal: true,
  })

  const handlerNumpad = (val) => {
    if ("c"===val) {
      setInputNum({
        result: '',
        isOperatorExist: false,
        isDotExist: false,
        isFirstVal: true,
      })
    }else if("+"===val|"-"===val|"/"===val|"*"===val){
      if (!inputNum.isOperatorExist && !inputNum.isFirstVal){
        setInputNum({
          result: inputNum.result += val,
          isOperatorExist: true,
          isDotExist: false,
          isFirstVal: inputNum.isFirstVal,
        })
      }
    }else if("."===val){
      if (!inputNum.isDotExist){
        setInputNum({
          result: inputNum.result += val,
          isOperatorExist: inputNum.isOperatorExist,
          isDotExist: true,
          isFirstVal: false,
        })
      }
    }else{
      setInputNum({
        result: inputNum.result += val,
        isOperatorExist: inputNum.isOperatorExist,
        isDotExist: inputNum.isDotExist,
        isFirstVal: false
      })
    }
    return val;
  }

  const handlerResult = () => {
    if (inputNum.result !== ''){
      setInputNum({
        // TODO: ganti selain eval
        result: eval(inputNum.result),
        isOperatorExist: false,
        isDotExist: false,
        isFirstVal: true,
      })
    }
    return '';
  }


  return (
    <div className="App">
      <div className="container">
        <div className="result">
            <p>{inputNum.result}</p>
        </div>
        <Numpad numClick={handlerNumpad} />
        <Button val={'='} buttType={'result'} buttClick={handlerResult} />
      </div>
    </div>
  );
}

export default App;
