// write your JavaScript here
'use strict';
const success = document.querySelector('.Success');
const info = document.querySelector('.Info');
const warning = document.querySelector('.Warning');
const error = document.querySelector('.Error');

function showToast(message, type) {
    const toastContainer = document.querySelector('.toast-container');

    // Create a new div element to serve as the toast notification
    const toast = document.createElement('div');

    // Set the class of the div to 'toast' and add a specific class based on the type (e.g., 'success', 'info')
    toast.className = `toast ${type}`;

    // Set the inner HTML of the toast div, including the message and a close button
    toast.innerHTML = `
    <span class="message">${message}</span>
        <span class="close">&times;</span>

    `;

    if(type.includes('error')){
        toast.classList.add('error');

    } else if (type.includes('warning')) {
        toast.classList.add('warning')

    } else if (type.includes('info')){
        toast.classList.add('info')
    }
    

    // Add a click event listener to the close button inside the toast
    // When clicked, this will remove the toast from the DOM
    toast.querySelector('.close').addEventListener('click', function (){
        toast.remove();
    });

    // Append the newly created toast div to the toast container in the DOM
    toastContainer.appendChild(toast);

    // Set a timeout to automatically remove the toast from the DOM after 5 seconds (5000 milliseconds)
    setTimeout(function() {
        toast.remove();
    }, 5000)
}

success.addEventListener('click', function() {
    showToast('<i class="fa-solid fa-circle-check"></i>Success toast notification', 'success');
});

info.addEventListener('click', function() {
    showToast('<i class="fa-solid fa-circle-info"></i>Info toast notification', 'info');
});

warning.addEventListener('click', function() {
    showToast('<i class="fa-solid fa-circle-exclamation"></i>Warning toast notification', 'warning');
});

error.addEventListener('click', function() {
    showToast('<i class="fa-solid fa-circle-xmark"></i>Error toast notification', 'error');
});