# TaskFlow Solutions – Interactive Task Manager

## Developer Reflection

For this project, I developed a dynamic Task Manager web application using HTML, CSS, and vanilla JavaScript. The goal was to create a clean, user-friendly interface that allows users to add, edit, and delete tasks while tracking their priority, importance, and completion status.

I began by structuring the HTML form to include input fields for the task name, priority dropdown, and checkboxes for marking tasks as important or completed. The styling was handled with CSS, where I used conditional classes to highlight important tasks in red and apply a strikethrough for completed ones.

The core logic was implemented in JavaScript. I used event listeners for form submissions and dynamically generated the task list using `innerHTML`. Tasks were stored as objects in an array and included a unique ID, name, priority, importance, completion status, and a timestamp using the `Date` object. I ensured that every change—add, toggle, or delete—was logged to the console using `JSON.stringify()`.

One of the main challenges was managing the dynamic nature of task elements, especially ensuring updates to their state were accurately reflected in both the UI and console. This project helped reinforce my understanding of DOM manipulation, arrays, and clean coding practices.
