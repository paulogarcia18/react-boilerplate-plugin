import React from 'react';
import PropTypes from 'prop-types';

const App = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      foo: 0,
    };
  }

  componentWillMount() {
    const { pluginvariable } = this.props;

    pluginvariable.getData('search-data').then(data => {
      this.setState({
        appData: data,
      });
    });
  }

  componentDidUpdate() {
    //   console.log(this.state.appData)
  }

  render() {
    const { pluginvariable } = this.props;
    const { foo } = this.state;

    return (
      <div className="app">
        <p>{foo}</p>
      </div>
    );
  }
};

App.propTypes = {
  foo: PropTypes.string,
  pluginvariable: PropTypes.object.isRequired,
  appData: PropTypes.object,
};

export default App;
