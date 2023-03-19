import React from "react";
import './todo.css';

export default class Todo extends React.Component {
    constructor() {
        super();
        this.input = React.createRef()
        this.input1 = React.createRef()
        this.input2 = React.createRef()
        this.input3 = React.createRef()
        this.state = {
            list:[]
        }
    }

    addTodo = () => {
        const Item = {
          value: this.input.current.value,
          value1: this.input1.current.value,
          value2: this.input2.current.value,
          value3: this.input3.current.value,
        };

        if (localStorage.getItem("list") === null) {
            const list = []
            list.push(Item)
            localStorage.setItem("list",JSON.stringify(list))
        }
        else {
            const list = JSON.parse(localStorage.getItem("list"))
            list.push(Item)
            localStorage.setItem("list",JSON.stringify(list))
        }

        this.setState({
            list: JSON.parse(localStorage.getItem("list"))
        })
        document.getElementById("user").value = ""

    }

    componentDidMount() {

        const list = window.localStorage.getItem("list")
        const value = JSON.parse(list)
        if (list === null) {
            return false
        }
        else {
            this.setState({
                list : value
            })
        }
    }

    delete = () => {
        const list1 = JSON.parse(localStorage.getItem("list"))
        list1.splice(0, 1)
        this.setState({ list: list1 })
        localStorage.setItem("list", JSON.stringify(list1))

    }

    removeAll = () => {
        const list1 = JSON.parse(localStorage.getItem("list"))
        list1.splice(0, 1)
        this.setState({ list: list1 })
        localStorage.setItem("list", JSON.stringify(list1))

    }

    render() {
        return (
            <div>
                <h3>CRUD Operations</h3>
            <div className="my_form">
              <label className="my_label">FullName</label>
              <br />
              <input
                id="user"
                type="text"
                ref={this.input}
                placeholder="FullName"
              />
              <br />

              <label className="my_label">City</label>
              <br />

              <input type="text" ref={this.input1} placeholder="City" />
              <br />

              <label className="my_label">Mobile No.</label>
              <br />

              <input type="text" ref={this.input2} placeholder="Mobile" />
              <br />

              <label className="my_label">Salary</label>
              <br />

              <input type="text" ref={this.input3} placeholder="Salary" />
              <br />

              <button onClick={this.addTodo}>Add Todo</button>
            </div>

            <div className="my_table">
              <table>
                <thead>
                  <tr>
                    <th>FullName</th>
                    <th>City</th>
                    <th>Mobile No.</th>
                    <th>Salary</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                {this.state.list.map((item) => {
                  return (
                    <tbody>
                      <tr key={item}>
                        <td>{item.value}</td>
                        <td>{item.value1}</td>
                        <td>{item.value2}</td>
                        <td>{item.value3}</td>
                        <td>
                          <button onClick={this.delete}> Delete </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        );
    }
}