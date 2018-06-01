import React from 'react';

class SearchInput extends React.Component {

    handleChangeEvent(e) {console.log(e.target.value)
        if (e.target.value.length >= 3) {
            this.props.searchWord(e.target.value);
        }else {
            this.props.clearResults();
        }
    }

    render() {
        return (<div className="search-text" >
            <input type="text" value={this.props.searchValue} onChange={this.handleChangeEvent.bind(this)} />
        </div>);
    }

}

export default SearchInput;