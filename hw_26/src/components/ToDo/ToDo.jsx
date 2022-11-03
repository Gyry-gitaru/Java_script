import React, { Component } from 'react';
import List from "../List/List"



class ToDo extends Component {
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    }

    transferToSecond () {
        this.setState({
            firstList: this.state.firstList.slice(1),
            secondList: this.state.secondList.unshift(this.state.firstList[0])
        })
        this.setState({
            secondList: this.state.secondList
        })
    }

    transferToFirst () {
        this.setState({
            secondList: this.state.secondList.slice(1),
            firstList: this.state.firstList.unshift(this.state.secondList[0])
        })
        this.setState({
            firstList: this.state.firstList
        })
    }

    transferToThird () {
        this.setState({
            secondList: this.state.secondList.slice(1),
            thirdList: this.state.thirdList.unshift(this.state.secondList[0])
        })
        this.setState({
            thirdList: this.state.thirdList
        })
    }

    removeLastItem () {
        this.setState({
            thirdList: this.state.thirdList.slice(0, -1)
        })
    }
    
    render() {
        return (
            <>
                <List list={this.state.firstList} 
                actions={[
                    { btn: "Transfer firts to right", action: this.transferToSecond.bind(this) }
                ]}/>
                <List list={this.state.secondList} 
                actions={[
                    { btn: "Transfer firts to left", action: this.transferToFirst.bind(this) },
                    { btn: "Transfer firts to righ", action: this.transferToThird.bind(this) }
                ]}/>
                <List list={this.state.thirdList}
                actions={[
                    { btn: "Remove last item", action: this.removeLastItem.bind(this) }
                ]}/>
            </>
        )
    }
}

export default ToDo;