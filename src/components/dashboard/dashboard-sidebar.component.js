import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class DashboardSidebar extends Component {


        render() {

            const sidebar = () => {
                 return this.props.sidebar.sidebar.map( item => {
                    return (
                        <li className="nav-item active">
                          <Link className="nav-link" to={item.path}>{item.displayName} <span className="sr-only">(current)</span></Link>
                        </li>
                    )
                })
            }

            return (
                 <ul>
                     {sidebar()}
                 </ul>
            )
        }
    
}