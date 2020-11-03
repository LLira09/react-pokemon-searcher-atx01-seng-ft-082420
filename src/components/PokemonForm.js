import React from 'react';
import { Form } from 'semantic-ui-react';

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addPokemon(this.state);
  };

  hanndleChange = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='Name'
              placeholder='Name'
              name='name'
              onChange={this.hanndleChange}
            />
            <Form.Input
              fluid
              label='hp'
              placeholder='hp'
              name='hp'
              onChange={this.hanndleChange}
            />
            <Form.Input
              fluid
              label='Front Image URL'
              placeholder='url'
              name='frontUrl'
              onChange={this.hanndleChange}
            />
            <Form.Input
              fluid
              label='Back Image URL'
              placeholder='url'
              name='backUrl'
              onChange={this.hanndleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
