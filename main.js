const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
const addColBtn = document.getElementsByTagName("button")[0];
const taskInput = document.getElementById("new-task");//Add a new task.

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});

		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}
/* add column*/

function createNewColumn(taskInputString) {

	var heading = document.createElement("h3");
	var listItemNew = document.createElement("div");
	heading.innerText = taskInputString;
	listItemNew.className = "list";
	listItemNew.append(heading);

	return listItemNew;


}
var addColumn = function () {
	var parent = document.getElementById("parent-container");
	//Create a new list item with the text from the #new-task:
	var listItem = createNewColumn(taskInput.value);
	parent.appendChild(listItem);
	taskInput.value = ""


}
addColBtn.addEventListener('click', addColumn)