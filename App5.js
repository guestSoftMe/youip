import './App.css';
import {useState} from "react";
import classNames from "classnames";

function App() {
    const [state, setState] = useState(false);
    const [green, setGreen] = useState(false);
    let arr = []
    for (let i = 1; i <= 9; i++) {
        arr.push(i)
    }

    function fun(event) {
        if (event.target.innerHTML === '7') {
            setState(!state)
            event.target.classList.remove('coloryellow')
        } else if (event.target.innerHTML === '1') {

            setGreen(!green)
            event.target.classList.add('colorg')
        }
    }

    function san(event) {
        let a = event.target.innerHTML
        if (a === '1' || a === '2' || a === '3'){
            event.target.classList.add('colorg')
        console.log(a)
        }
    }

    return (
        <div className="App">
            <div className='wrapper'>
                {arr.map(i => {
                    return <div className={classNames('block', state ? `coloryellow` : null, green ? 'colorg' : null)}
                                onClick={fun}>{i}</div>
                })}
            </div>
        </div>
    );
}

export default App;
