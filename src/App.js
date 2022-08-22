import React, { Component } from 'react'
import Nav from './components/Nav'
import Counters from './components/Counters'

export default class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    constructor(props) {
        super(props);
        console.log("App- constructor")
    }

    componentDidMount() {
        console.log("App - did Mount")
    }

    handleInc = (count) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(count);
        counters[index] = { ...count };
        counters[index].value++;
        this.setState({ counters });
    }

    handleDec = (count) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(count);
        counters[index] = { ...count };
        counters[index].value--;
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        const newCounter = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters: newCounter });
    }

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        })
        this.setState({ counters });
    }

    render() {
        console.log("App - rendered")
        return (
            < div >
                <Nav totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className='container'>
                    <Counters onInc={this.handleInc} onDec={this.handleDec} onDelete={this.handleDelete} onReset={this.handleReset} counters={this.state.counters} />
                </main>
            </div >
        )
    }
}

