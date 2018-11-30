import React,{Component} from 'react';
import moment from 'moment';

class Info extends Component{
    render(){
        const user=this.props.user;
        return (
            <div>
                
                {user.userName &&<ul className="collection">
                   <li className="collection-item"><b>Name:</b> {user.name}</li>
                    <li className="collection-item"><b>Repo Count:</b> {user.public_repos}</li>
                   <li className="collection-item"><b>Login Name:</b> {user.login}</li>
                   <li className="collection-item"><b>Url:</b> {user.url}</li>
                   <li className="collection-item"><b>Created Date:</b> {moment(user.created_at).calendar()}</li>
                </ul>}
            </div>
        )
    }
}

export default Info