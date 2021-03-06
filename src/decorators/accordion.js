// HOC - higher order component
import React, {Component} from 'react';

export default (OriginalComponent) =>
    class DecoratedComponent extends Component {
        state = {
            openItemId: null
        };
        toggleOpenArticle = (id) =>
            (this.state.openItemId === id) ? this.setState({openItemId: null}) : this.setState({openItemId: id});

        render() {
            return <OriginalComponent
                {...this.props}
                {...this.state}
                toggleOpenArticle={this.toggleOpenArticle}
            />;
        }

    }
