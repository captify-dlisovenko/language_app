import React from "react";
import { connect } from 'react-redux';
import { loadAllQuotes } from '../store/actions/loadQuotes'

class QuoteList extends React.Component {

    componentDidMount() {
        this.props.loadAllQuotes()
    }

    render() {
        return(
            <div>
                {
                    this.props.quotes.allQuotes.map(item => <div>{item.en}</div>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quotes: state.quotes
    }
}

const mapDispatchToProps = {
    loadAllQuotes
}


export default connect(mapStateToProps, mapDispatchToProps)(QuoteList);