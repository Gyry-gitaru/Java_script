import React, { Component } from 'react';
import './style.sass'

class List extends Component {
    render() {
        let { list, actions } = this.props;

        return Array.isArray(list) && list.length ? (
            <>
                <div className='list'>
                    <ul>
                        {list.map((item => <li key={item.id}>{item.title}</li>))}
                    </ul>
                    <div>{actions.map((item, index) => <button key={index} onClick={item.action}>{item.btn}</button>)}</div>
 
                </div>  
            </>
        ) : null;
    }
}

export default List;