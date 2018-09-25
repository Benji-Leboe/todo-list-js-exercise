// A new task will be created as incomplete
function newTask(title, description) {
	const task = {
		title,
		description,
		complete: false,

		logState: function() {
			console.log(`${task.title} has${task.complete ? ' ' : ' not '}been completed`);
		}, 
		completeTask: function() {
			task.complete = true;
		}
	};
	return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Make lunch', 'Eat lunch so you don\'t starve to death');
const task2 = newTask('Do laundry', 'Get laundry card from Pam');

const tasks = [task1, task2];

task1.logState();
task1.completeTask();
task1.logState();

console.log(tasks);
