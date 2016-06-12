var TaskList = React.createClass({
	render: function() {
    var tasks = this.props.data.map(function(task) {
      return (
				<Task key={task.id} 
				      id={task.id} 
							content={task.content} 
							status={task.status} 
							onTaskDestroy={this.props.onTaskDestroy} 
							onTaskUpdate={this.props.onTaskUpdate} />
      );
    }.bind(this));
    return (
      <tbody>
        {tasks}
      </tbody>
    );
  }
});