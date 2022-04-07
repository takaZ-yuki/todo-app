import React from "react";
import axios from "axios";

type State = {
  items :Array<Item>;
  text :string;
  assignees :Array<Assignee>;
  assignee_name :string;
}

type Item = {
  id :any;
  text :string;
  assignee_name :string;
}

type Assignee = {
  id :number;
  name :string;
}

type Props = {
  items :Array<Item>;
  assignees :Array<Assignee>;
}

class TodoApp extends React.Component<{}, State> {
    constructor(props: any) {
      super(props);
      this.execute_axios();
      this.state = { items: [] , assignees: [], text: '', assignee_name: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} assignees={this.state.assignees}/>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <label htmlFor="new-assignee">
              Who need to do?
            </label>
            <UserList
              assignees={this.state.assignees}
              onChange={this.handleSelect}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      this.setState({ text: e.target.value });
    }

    execute_axios() {
      axios.get(`http://localhost:1323/users`)
      .then(res => {
        res.data.forEach((assignee: Assignee) => {
          const newAssignee = {
            id: assignee.id,
            name: assignee.name
          }
          this.setState(state => ({
            assignees: state.assignees.concat(newAssignee)
          }));
        });
      })
    }

    handleSelect :React.ChangeEventHandler<HTMLSelectElement> = (ev) => {
      this.setState({ assignee_name: ev.target.value });
    };


    handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now(),
        assignee_name :this.state.assignee_name
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }

  class TodoList extends React.Component<Props, {}> {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.assignee_name} : {item.text}</li>
          ))}
        </ul>
      );
    }
  }

  class UserList extends React.Component<Props, {}> {
    constructor(props: any) {
        super(props);
        const defaultValue: Assignee = {
          id: 0,
          name: "選択してください",
        };
        this.props.assignees.push(defaultValue);
    }

    render() {
      return (
        <select onChange={this.props.onChange}>
          {this.props.assignees.map(item => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>

      );
    }
  }

export default TodoApp