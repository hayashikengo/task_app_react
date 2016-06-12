var TaskApp = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(result) {
        this.setState({data: result});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleTaskSubmit: function(task) {
    var tasks = this.state.data;
    // var newTasks = tasks.concat([task]);
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      method: 'POST',
      data: task,
      success: function(result) {
        var newTasks = tasks.concat(result);
        this.setState({data: newTasks});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  taskDestroy: function(id) {
    var newTasks = this.state.data.filter(function(task) {
      return task.id != id
    });
    // this.setState({data: newTasks});
    $.ajax({
      url: this.props.url + '/' + id,
      dataType: 'json',
      method: 'DELETE',
      success: function(result) {
        this.setState({data: newTasks});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  taskUpdate: function(task) {
    $.ajax({
      url: this.props.url + '/' + task.task.id,
      dataType: 'json',
      method: 'PATCH',
      data: task,
      success: function(result) {
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="taskApp container">
        <h1>TaskApp</h1>
        <TaskForm onTaskSubmit={this.handleTaskSubmit} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Content</th>
              <th>Status</th>
              <th colSpan="3"></th>
            </tr>
          </thead>
          <TaskList data={this.state.data} 
                    onTaskDestroy={this.taskDestroy} 
                    onTaskUpdate={this.taskUpdate} />
        </table>
      </div>
    );
  }
});
