import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
const baseUrl = "http://localhost:3002";

class PostJob extends Component {
  state = {
    title: "",
    companyName: "",
    salary: "",
    date: "",
    description: "",
    role: "company"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getData = () => {
    const { companyName, title, salary, date, description } = this.state;
    axios
      .post(`${baseUrl}/api/company/jobs`, {
        title: title,
        description: description,
        companyName: companyName,
        salary: salary,
        date: date
      })
      .then(res => {
        if (res.status === 200) {
          alert("your post are successfully submitted to us");
        }
        this.setState({
          title: "",
          companyName: "",
          salary: "",
          date: "",
          description: "",
          role: "company"
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getData();
  };

  render() {
    const { title, companyName, salary, date, description } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            id="form-input-control-first-name"
            label="Job Title"
            placeholder="Job Title"
            onChange={this.handleChange}
            value={title}
            name="title"
          />
          <Form.Input
            id="form-input-control-last-name"
            label="Company Name"
            onChange={this.handleChange}
            placeholder="Company Name"
            value={companyName}
            name="companyName"
          />
          <Form.Input
            id="form-input-control-last-name"
            label="Salary"
            onChange={this.handleChange}
            placeholder="Salary"
            value={salary}
            name="salary"
          />
          <Form.Input
            id="form-input-control-last-name"
            label="date"
            onChange={this.handleChange}
            value={date}
            placeholder="date"
            name="date"
          />
        </Form.Group>
        <Form.Input
          id="form-textarea-control-opinion"
          label="Description"
          onChange={this.handleChange}
          value={description}
          placeholder="Description"
          name="description"
        />
        <Form.Button
          id="form-button-control-public"
          content="Submit"
          label="Submit Post"
        />
      </Form>
    );
  }
}

export default PostJob;
