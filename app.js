// console.log(document.getElementById('task-title'));



// document.getElementById('task-title').style.backgroundColor = "black"
// document.getElementById('task-title').style.color = "#fff"
// document.getElementById('task-title').style.padding = "5px"

// document.getElementById('task-title').textContent = "Task List"
// document.getElementById('task-title').innerHTML = "<span>Hey List vai</span>"

// const taskTitle = document.getElementById('task-title')
// taskTitle.textContent = "Task List"


// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
// document.querySelector('li').style.backgroundColor = "lime";


// document.querySelector('li:last-child').style.color = "lime";




// const items = document.getElementsByClassName('collection-item')
// // console.log(items);
// items[2].style.color = 'red'


// const li = document.getElementsByTagName('li')
// console.log(li);


// const items = document.querySelectorAll('ul li');
// items.forEach((item) => {
//     item.style.backgroundColor = "red"
//     item.style.color = "white"
// })



// let singleValue;

// const list = document.querySelector('ul');

// singleValue = list.children[2].children[0];

// console.log(singleValue);


//get children element
// const list = document.querySelector('ul')
// const single = list.children[2].children[0].children[0]
// console.log(single);



// const list = document.querySelector('ul')
// list.children[2].style.color = 'red'



//get parent to children


// const listItem = document.querySelector('li')
// const parent = listItem.parentElement.parentElement;
// console.log(parent);



// const li = document.createElement('li')


// li.className = 'collection-item'
// // li.id = 'item'
// // li.setAttribute('title', 'new-item')

// li.textContent = 'hello li'
// // console.log(li);

// document.querySelector('ul').appendChild(li)




// const newLi = document.createElement('li')
// newLi.className = 'collection-item'
// newLi.innerText = 'New List'

// document.querySelector('ul').appendChild(newLi)

// const link = document.createElement('a')
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>'


// newLi.appendChild(link)




// const li = document.createElement('li')
// li.className = 'collection-item'
// li.innerHTML = 'Added List'
// document.querySelector('ul').appendChild(li)

// const link = document.createElement('a')
// link.className = 'delete-item secondary-content'

// link.innerHTML = '<i class="fa fa-remove"></i>'

// li.appendChild(link)




// const li = document.querySelectorAll('li')
// const list = document.querySelector('ul')


// list.removeChild(li[2])

// li[2].remove()








// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log('Clicked');
// })




// document.querySelector('.clear-tasks').addEventListener('click', onClick);
// function onClick(e) {
//     console.log(e.target.textContent = 'Hlw');

//     e.preventDefault()
// }



// const clearBtn = document.querySelector('.clear-tasks');

// clearBtn.addEventListener('dblclick', runEvent);

// function runEvent(e) {
//     console.log(`Event Type: ${e.type}`);
// }


// const clearBtn = document.querySelector('.clear-tasks').addEventListener('dblclick', function (e) {
//     console.log(`Event Type: ${e.type}`);
// })



// const clearBtn = document.querySelector('.clear-tasks').addEventListener('mousedown', function (e) {
//     console.log(`Event Type: ${e.type}`);
// })



// const clearBtn = document.querySelector('.clear-tasks').addEventListener('mouseup', function (e) {
//     console.log(`Event Type: ${e.type}`);
// })



// const form = document.querySelector('#task-form');
// const inputTask = document.querySelector('#task');

// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     // console.log(`Event type: ${e.type}`);
//     console.log(inputTask.value);
// })





const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');

const clearBtn = document.querySelector('.clear-tasks')

const filter = document.querySelector('#filter')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (taskInput.value == '') {
        alert('Please Add Task')
    }
    const li = document.createElement('li')
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value))

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'


    li.appendChild(link);
    taskList.appendChild(li)
    taskInput.value = ""
})

taskList.addEventListener('click', function (e) {
    // console.log(e.target);
    // if (e.target.parentElement.classList.contains('delete-item'))
    //     e.target.parentElement.parentElement.remove();

    if (confirm("Are you sure")) {
        e.target.parentElement.parentElement.remove();
    }

});


clearBtn.addEventListener('click', function (e) {
    e.preventDefault()
    // taskList.innerHTML = ""
    taskList.remove()
})

filter.addEventListener('keyup', function (e) {
    const text = e.target.value.toLowerCase();
    // console.log(text); 
    document.querySelectorAll('.collection-item').forEach((task) => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = '#212121'
        } else {
            task.style.display = 'none'
        }
    })
})
