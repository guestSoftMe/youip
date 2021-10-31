import './App.css';
import {createRef, useContext} from "react";
import {Context} from "./context";

function App() {
    let arr = []
    for (let i = 1; i <= 9; i++) {
        arr.push(i)
    }
    const wrapper = createRef()
    const context = useContext(Context);

    function fun(e) {
        const items = document.querySelectorAll('.block')
        if (e.currentTarget.innerHTML === '7') {
            Array.from(items).forEach(item => {
                item.classList.add('blue')
            })
            e.currentTarget.classList.remove('yellow')
            e.currentTarget.classList.remove('blue')
            e.currentTarget.classList.remove('green')
        } else if (e.currentTarget.innerHTML === '1') {
            Array.from(items).slice(1, 3).forEach(item => {
                item.classList.add('green')
            })
            e.currentTarget.classList.add('green')
            e.currentTarget.classList.remove('yellow')
            e.currentTarget.classList.remove('blue')

        }
        wrapper.current.addEventListener('click', function (e) {
            Array.from(items).forEach(item => {
                item.classList.remove('blue')
                item.classList.remove('yellow')
                item.classList.remove('green')
            })
            e.target.classList.add('yellow')
        })

    }

    return (
        <div className="App">
            <div className='wrapper'
                 ref={wrapper}>
                {arr.map(i => {
                    return <div key={i}
                                className={`block` }
                                onClick={fun}
                    >{i}</div>
                })}
                {context}
            </div>
        </div>
    );
}

export default App;
