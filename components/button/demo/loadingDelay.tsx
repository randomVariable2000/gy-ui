import React from 'react'
import Button from '../button';

class App extends React.Component {
      state = {
        loading: false,
      };
     
      enterLoading = () => {
        this.setState({ loading:{delay:5000}});
      };
    
      render() {
        return (
            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
              Click me!
            </Button>
        );
      }
}

export default App;