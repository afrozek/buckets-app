import React, {Component} from 'react';

export default class DashboardSidebar extends Component {


        render() {

            const sidebar = () => {
                 return this.props.sidebar.sidebar.map( item => {
                    return (
                        <li className="nav-item active">
                          <a className="nav-link" href="#">{item.displayName} <span className="sr-only">(current)</span></a>
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