import React, { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('cong'); // mặc định là cộng

  const handleCalculation = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Vui lòng nhập số hợp lệ');
      return;
    }

    let calcResult;
    switch (operation) {
      case 'cong':
        calcResult = num1 + num2;
        break;
      case 'tru':
        calcResult = num1 - num2;
        break;
      case 'nhan':
        calcResult = num1 * num2;
        break;
      case 'chia':
        if (num2 === 0) {
          calcResult = 'Không thể chia cho 0';
        } else {
          calcResult = num1 / num2;
        }
        break;
      default:
        calcResult = 'Lỗi phép toán';
    }
    setResult(calcResult);
  };

  return (
    <div className="App">
      <h1>Ứng dụng Tính Toán</h1>

      {/* Thanh input */}
      <div>
        <input
          type="number"
          placeholder="Nhập số 1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Nhập số 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>


      {/* Radio buttons để chọn phép toán */}
      <div>
        <label>
          <input
            type="radio"
            name="operation"
            value="cong"
            checked={operation === 'cong'}
            onChange={() => setOperation('cong')}
          />
          Cộng
        </label>
        <label>
          <input
            type="radio"
            name="operation"
            value="tru"
            checked={operation === 'tru'}
            onChange={() => setOperation('tru')}
          />
          Trừ
        </label>
        <label>
          <input
            type="radio"
            name="operation"
            value="nhan"
            checked={operation === 'nhan'}
            onChange={() => setOperation('nhan')}
          />
          Nhân
        </label>
        <label>
          <input
            type="radio"
            name="operation"
            value="chia"
            checked={operation === 'chia'}
            onChange={() => setOperation('chia')}
          />
          Chia
        </label>
      </div>

      {/* Nút tính toán */}
      <button onClick={handleCalculation}>Calculation</button>

      {/* Kết quả */}
      <div>
        <p>Input value is: {result}</p>
      </div>
    </div>
  );
}

export default App;
