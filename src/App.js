import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '-', '+', '.'];

  const updateCalc = (val) => {
    if (
      (ops.includes(val) && calc === '') ||
      (ops.includes(val) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + val);

    if (!ops.includes(val)) {
      setResult(eval(calc + val).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(result).toString());
  };

  const deleteLastVal = () => {
    if (calc === '') {
      return;
    }

    setCalc(calc.slice(0, -1));
  };
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : '0'} {calc || '0'}
        </div>
        <div className='operators'>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('+')}>+</button>

          <button onClick={deleteLastVal}>DEL</button>
        </div>
        <div className='digits'>
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
