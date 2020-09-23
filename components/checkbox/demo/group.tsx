import CheckboxGroup  from '../group';
import React from 'react';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class App extends React.PureComponent {
    render(){
        return (
            <div>
                <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
                <br />
                <CheckboxGroup options={options} defaultValue={['Pear']}/>
                <br />
                <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']}/>
            </div>
        )
    }
}

export default App;
