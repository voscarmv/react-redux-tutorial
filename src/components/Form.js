import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import addArticle from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
  };
}

class connectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { addArticle } = this.props;
    addArticle({ title });
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

connectedForm.propTypes = {
  addArticle: propTypes.func.isRequired,
};

const Form = connect(null, mapDispatchToProps)(connectedForm);

export default Form;
