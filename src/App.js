import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {thunkIp} from "./api";
import './App.css'

const App = (props) => {
    useEffect(() => {
        props.thunkIp()
    }, [])
    return (
        <div>
            {
                props.ip.map(item => {
                    return <div className='ip'>
                        <div><b>You IP:</b> {item.ip}</div>
                        <div><b>Provider:</b> {item.org}</div>
                        <div><b>Country:</b> {item.country} <img style={{width: 30}} src={item.country_flag} alt=""/>
                        </div>
                        <div><b>Country capital:</b> {item.country_capital}</div>
                        <div><b>Region:</b> {item.region}</div>
                        <div><b>Curency:</b> {item.currency}</div>
                        <div><b>Currency Rates:</b> {item.currency_rates}</div>
                        <div><b>City:</b> {item.city}</div>
                        <div>
                        </div>
                    </div>
                })
            }

        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        ip: state.api.ip
    }
}


export default connect(mapStateToProps, {thunkIp})(App);
