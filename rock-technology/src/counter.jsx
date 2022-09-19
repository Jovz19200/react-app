import React, {Component} from "react";
class Counter extends Component {
    
    
    // constructor() {
    //     super();
    //     this.increment = this.increment.bind(this);
    // }

      
     

       
    render() { 
      
       
        return (
            <div>
                
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondarybtn-sm m-2">+ </button>
                <button onClick={()=> this.props.onDecrement(this.props.counter)} className="btn btn-secondarybtn-sm ">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-3">Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    // increment(){
    //     this.state.count++;
    // }
    formatCount(){
        return this.props.counter.value === 0? 'Zero': this.props.counter.value;
    }
}
 
export default Counter;