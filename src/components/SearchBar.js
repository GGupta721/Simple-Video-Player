import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

    state = {searchText: ''};

    onInputChange = (eve) => {
        this.setState({searchText: eve.target.value});
    }

    onSubmit = (eve) => {
        eve.preventDefault();
        //console.log(this.state.searchText);
        this.props.onsearchsubmit(this.state.searchText);
        

    }

    render(){

        return(
            <div className="search-bar ui segmet">
                <form className="ui form" onSubmit = {this.onSubmit}>
                    <div className = "field ui focus">
                        <input type="text" placeholder="Seach.. " value={this.state.searchText} onChange={this.onInputChange}/>
                        
                    </div>
                    
                </form>
            </div>
            
        );
    }
   
}

export default SearchBar;