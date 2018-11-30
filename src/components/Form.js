import React,{Component} from 'react';
import axios from 'axios';

class Form extends Component{
    state={
        userName:'',
        name:'',
        public_repos:'',
        login:'',
        url:'',
        created_at:''
    }
    handleChange=(e)=>{
        this.setState({
            userName:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        //new code 
        .then((res)=>{
            console.log(res.data);
            
            this.setState({
                name:res.data.name,
                public_repos:res.data.public_repos,
                login:res.data.login,
                url:res.data.url,
                created_at:res.data.created_at
            })

            this.props.info(this.state)//new line
        })
        
    }
    render(){
        return (
           <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input onChange={this.handleChange} placeholder="Please enter github username" id="github_user" type="text" />
                        <label htmlFor="github_user">Github User</label>
                    </div>
                    <div className="input-field col s6">
                        <button className="waves-effect waves-light btn">Submit</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Form