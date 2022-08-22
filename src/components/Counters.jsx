import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends Component {

    render() {

        console.log("Counters - rendered")

        const { onReset, counters, onDelete, onInc, onDec } = this.props;
        return (<>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(count =>
                <Counter
                    key={count.id}
                    onInc={onInc}
                    onDec={onDec}
                    onDelete={onDelete}
                    counter={count}
                />)}
        </>);
    }
}

export default Counters;