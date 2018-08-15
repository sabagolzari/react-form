import React from 'react';
import './App.css';


class App extends React.Component {
  
  constructor (props) {
    super(props);
    
      this.state = {
      firstname : 'saba',
      lastname:'golzari',
      age : '',
      job : '',
      item: '',

   };

    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);

  }

  handleFirstChange(event) {
    this.setState({firstname:event.target.value})
  }

  handleLastChange(event){
    this.setState({lastname:event.target.value})
  }

  handleAgeChange(event) {
    this.setState({age:event.target.value})
  }

  handleJobChange(event) {
    this.setState({job:event.target.value})
  }

  handleAddItem(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        item: this.state.firstname +  "    " + this.state.lastname +  "    "  + this.state.job +  "    "  +this.state.age 
       };

    });
    this.setState(() => ({
      job: "",
      firstname:"",
      lastname:"",
      age:"",
    })); 
  }

  render() {

    return(
      <div className="comp">
      <form>
          <h1>FORM</h1><br/>
          
          firstname:<br/>
          <input type="text" value={this.state.firstname}   onChange={this.handleFirstChange}/> <br/><br/>
          
          lastname:<br/>
          <input type="text" value={this.state.lastname}    onChange={this.handleLastChange}/><br/><br/>
          
          your job:<br/>
          <input type="text" value={this.state.job}         onChange={this.handleJobChange}/><br/><br/>
          
          your age:<br/>
          <input type="text" value={this.state.age}         onChange={this.handleAgeChange}/><br/><br/>

          <input type="submit" value="Submit" onClick={this.handleAddItem}/> <br/><br/> 
          
          
          <input type="text "value={this.state.item} size="100"/>
        

       </form>
  </div>
    );
  }
} 
export default App;
