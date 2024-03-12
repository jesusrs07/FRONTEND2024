import './App.css'
import {useState} from 'react'
const numberButtonClasses = 'btn btn-secondary w-100'
const operatorButtonClasses = 'btn btn-warning w-100'
const equalBButtonClases = 'btn btn-danger w-100'
const buttons=[[
  {
    class: 'special',
    label: 'C',
    function: 'clearDisplay'
  },
  {
    class: 'special',
    label: '<',
    function: 'deleteLastCharacter'
  },
  {
    class: 'special',
    label: '%',
    function: 'setOperator'
  },
  {
    class: 'special',
    label: '/',
    function: 'setOperator'
  }
],
[
  {
    class: 'special',
    label: '7',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '8',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '9',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: 'X',
    function: 'setOperator'
  }
],
[
  {
    class: 'special',
    label: '4',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '5',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '6',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '-',
    function: 'setOperator'
  }
],
[
  {
    class: 'special',
    label: '1',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '2',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '3',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '+',
    function: 'setOperator'
  }
],
[
  {
    class: 'special',
    label: '0',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '.',
    function: 'updateDisplay'
  },
  {
    class: 'special',
    label: '=',
    function: 'calculate'
  },
]
]

function App() {
  const [display, setDisplay] = useState({
    value: '0',
    hasPoint: false,
    previousValue: '0',
    operatorHasBeenPressed: false,
    operator: ''
  })

  const updateDisplay = (value) => {
    if(value === '.'){
      if(display.hasPoint){
       return
      }
      setDisplay({
        ...display,
        value: limit(display.value + value),
        hasPoint: true
      })
      return
    }


    if(display.value === '0') {
      setDisplay({
        ...display,
        value: value
      })
    }else{
    setDisplay({
      ...display,
      value: limit(display.value + value)
    })
  }
  }

  const clearDisplay = () => {
    setDisplay({
      ...display,
      value: '0',
      hasPoint: false
    })

  }

  const deleteLastCharacter =  () => {
    setDisplay({
      ...display, 
      value: display.value.slice(0,-1),
      hasPoint: display.value.slice(-1) === '.' ? false: display.hasPoint
    })
    if(display.value.length === 1){
      setDisplay({
        ...display,
        value: '0',
        hasPoint: false
      })
    }
  }

  const setOperator = (operator) => {
    setDisplay({
      ...display,
      previousValue: display.value,
      operatorHasBeenPressed: true,
      hasPoint: false,
      value: '0',
      operator

    })

  }

  const calculate = () => {
    /*let result = 0

    if(!display.operatorHasBeenPressed) {
      return
    }

    if(display.operator === '%') {
      result = eval(`${display.previousValue} / 100 * ${display.value}`)
    }else{
      result = eval(`${display.previousValue} ${display.operator} ${display.value}`)

    }
    */
    
    let result = (display.operator === '%') ?
    eval(`${display.previousValue} / 100 * ${display.value}`) :
    eval(`${display.previousValue} ${display.operator} ${display.value}`)

    result = result + ""


    setDisplay({
      ...display,
      value: eval(`${display.previousValue} ${display.operator} ${display.value}`),
      operatorHasBeenPressed: false,
      hasPoint: result.includes("."),
      previousValue: '0'
    })
  }
  
  const limit = (String = '', length =10) => {
    return String.slice(0, length)
  }
 
  const buttonsFunctions = ({
    updateDisplay,
    clearDisplay,
    deleteLastCharacter,
    setOperator,
    calculate
  })
  return (
   <div>
    <h1>Calculator</h1>
    <hr />
    <table className='center'> 
      <tbody>
        <tr>
          <td className='text-end' colSpan={4}>
            <h2>{display.value}</h2>
          </td>
        </tr>

        <tr>
          <td>
          <button className={equalBButtonClases} type='button' onClick={() => clearDisplay('0')}>C</button>
          </td>
          <td>
          <button className={equalBButtonClases} type='button' onClick={() => deleteLastCharacter()}>{'<'}</button>
          </td>
          <td>
          <button className={operatorButtonClasses} type='button' onClick={() => setOperator('%')}>%</button>
          </td>
          <td>
          <button className={operatorButtonClasses} type='button' onClick={() => setOperator ('/')}>/</button>
          </td>
        </tr>

        <tr>
        <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('7')}>7</button>
          </td>

          <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('8')}>8</button>
          </td>

          <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('9')}>9</button>
          </td>
          
          <td>
          <button className={operatorButtonClasses} type='button' onClick={() => setOperator ('*')}>x</button>
          </td>
        </tr>

        <tr>
        <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('4')}>4</button>
          </td>

          <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('5')}>5</button>
          </td>

          <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('6')}>6</button>
          </td>
          <td>
          <button className={operatorButtonClasses} type='button' onClick={() => setOperator ('-')}>-</button>
          </td>
        </tr>

        <tr>
        <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('1')}>1</button>
          </td>

          <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('2')}>2</button>
          </td>

          <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('3')}>3</button>
          </td>

         <td>
            <button className={operatorButtonClasses} type='button' onClick={() => setOperator ('+')}>+</button>
          </td>

        </tr>

        <tr>
          <td className='text-center' colSpan={2}>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('0')}>0</button>
          </td>

          <td>
            <button className={numberButtonClasses} type='button' onClick={() => updateDisplay('.')}>.</button>
          </td>
          <td>
          <button className={equalBButtonClases} type='button' onClick={calculate}>=</button>
          </td>
        </tr>

      </tbody>
    </table>
   </div>
  )
}

export default App
