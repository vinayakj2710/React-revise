import React, { Component } from 'react'

class Counter extends Component {

    state = {
        imgUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>No tags available!!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Counter - Updated")
        console.log("Prev Props = ", prevProps)
        // console.log("Prev State = ", prevState)

        if (prevProps.counter.value !== this.props.counter.value) {
            //AJAX call to get new data from server
        }
    }

    componentWillUnmount() {
        alert("The COUNTER will get Unmount (Removed)")
        console.log("Counter - Unmounted")
    }

    render() {

        console.log("Counter - rendered")

        const { onInc, onDec, onDelete, counter } = this.props;
        return (
            <React.Fragment>
                {/* <img className='p-2 bg-warning' src={this.state.imgUrl} alt="" /> */}
                <div className="my-1">
                    <span className={this.getCountClasses()}>{this.formatCounter()}</span>
                    <button onClick={() => onInc(counter)} className='btm btn-success rounded me-2'>Increment</button>
                    <button onClick={() => onDec(counter)} className='btm btn-secondary rounded me-2'>Decrement</button>
                    <button onClick={() => onDelete(counter.id)} className='btn btn-danger btn-sm m-2 rounded'>Delete</button>
                </div>


                {/* <div>{this.renderTags()}</div> */}

            </React.Fragment>
        )
    }

    formatCounter() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
    getCountClasses() {
        let classes = "px-3 py-1 rounded mx-2 bg-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;