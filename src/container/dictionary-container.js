import React from 'react';
import SearchInput from '../components/search-input';
import ResultList from '../components/result-list'
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

class DictionaryContainer extends React.Component {

    clearResults() {
        this.props.wordsList([]);
    }

    render() {
        return (<div className='dictionary-container'>
            <h2> Oxford Dictionary </h2>
            <SearchInput
                clearResults={this.clearResults.bind(this)}
                searchWord={this.props.searchWord}
            />
            <ResultList results={this.props.searchResults} />
        </div>);
    }
}

const mapStateToPops = (state) => {
    return state;
}

export default connect(mapStateToPops, actionCreators)(DictionaryContainer);