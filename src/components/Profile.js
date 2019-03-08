import React, {Component} from 'react';
import {Form, FormGroup, Button} from 'react-bootstrap';

class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {
          userInfo : {},
          editing : false,
          //error : false
        }
      }
     

    componentDidMount(){
        let header = new Headers({ "Content-Type": "application/json", "Authorization": "token 744e27fc86a60b992865e70f434fdccd44e8d8ec"});
        fetch('https://api.github.com/users/nagambika-anguraj',{
            method: 'GET',
            headers: header
        })
        .then(response => response.json())
        .then(json=>{
            console.log(json)
            this.setState({userInfo:json})
            console.log('UserInfo State Bio =>')
            console.log(this.state.userInfo.login)
        })
        .catch(error=> {
            console.log(error)
        });
    }

    updateValue(type, event) {
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userInfoCopy[type] = event.target.value;
        this.setState({userInfo:userInfoCopy});

      }

    render(){
        return(
            <div className="container">
       
        <hr />

        {this.state.editing ?
          <FormGroup>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" 
             value={this.state.userInfo.name} 
             placeholder="Enter Name"
             className={this.state.error&&this.state.userInfo.name==='' ? 'red-border' : ''}
             onChange={this.updateValue.bind(this,'name')}
             /> 
           
           <Form.Label>Bio</Form.Label>
            <Form.Control type="text" 
             value={this.state.userInfo.bio} 
             placeholder="Enter Bio"
             className={this.state.error&&this.state.userInfo.bio==='' ? 'red-border' : ''}
             onChange={this.updateValue.bind(this,'bio')}
             />
             
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" 
             value={this.state.userInfo.location} 
             placeholder="Enter Location"
             className={this.state.error&&this.state.userInfo.location==='' ? 'red-border' : ''}
             onChange={this.updateValue.bind(this,'location')}
             />

            <Form.Label>Company</Form.Label>
            <Form.Control type="text" 
             value={this.state.userInfo.company} 
             placeholder="Enter Company"
             className={this.state.error&&this.state.userInfo.company==='' ? 'red-border' : ''}
             onChange={this.updateValue.bind(this,'company')}
             />
            
          </FormGroup>
        :
          <div>
            <p><strong>Name:</strong> {this.state.userInfo.name}</p>
            <p><strong>Bio:</strong> {this.state.userInfo.bio}</p>
            <p><strong>Location:</strong> {this.state.userInfo.location}</p>
            <p><strong>Company:</strong> {this.state.userInfo.company}</p>
          </div>
        }<hr/>
         <Button variant="primary" onClick={() => this.setState({editing: !this.state.editing})}>
          {this.state.editing ? 'Cancel Edit' : 'Edit'}
        </Button>
      </div>
        );
    }
}

export default Profile;