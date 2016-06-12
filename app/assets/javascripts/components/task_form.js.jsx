var TaskForm = React.createClass ({
	handleSubmit(e) {
		e.preventDefault();
		var content = ReactDOM.findDOMNode(this.refs.content).value.trim();
		if (!content) {
			return;
		}
		this.props.onTaskSubmit({task: {content: content, status: 'todo'}});
		ReactDOM.findDOMNode(this.refs.content).value = '';
		return;
	},
	render: function() {
		return (
			<form className="todoForm" onSubmit={this.handleSubmit}>
			  <div className="input-group">
				  <input type="text" className="form-control" placeholder="ToDo" ref="content" />
					<span className="imput-group-btn">
					  <input type="submit" className="btn btn-primary" value="登録"/>
					</span>
				</div>
			</form>
		);
	}
});