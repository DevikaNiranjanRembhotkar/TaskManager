// import React, { useEffect } from 'react';
// import emailjs from '@emailjs/browser';

// // Assuming `currentUser` holds the logged-in user's information
// const currentUser = { email: "user@example.com", name: "Logged In User" };

// function sendEmailNotification(task) {
//   const templateParams = {
//     from_name: 'Task Management System',
//     to_email: currentUser.email, // Send to the logged-in user's email
//     subject: `Reminder: Task Due Date Approaching - ${task.name}`,
//     html_message: `Hello,<br/><br/>This is a reminder that your task "${task.name}" is due on ${task.dueDate}. Please ensure that all necessary work is completed by this date.<br/><br/>Regards,<br/>Task Management System`
//   };

//   emailjs.send('service_9hofrlf', 'template_q2yf8vj', templateParams, 'sUqPSR1oCipYO3WCM')
//     .then((result) => {
//       console.log("Email sent successfully:", result.text);
//     }, (error) => {
//       console.log("Error in sending email:", error.text);
//     });
// }

// export default function TaskManager({ tasks }) {
//   useEffect(() => {
//     const now = new Date();

//     tasks.forEach((task) => {
//       const taskDueDate = new Date(task.dueDate);

//       if (taskDueDate.getTime() - now.getTime() <= 86400000 && !task.completed) {
//         sendEmailNotification(task);
//       }
//     });
//   }, [tasks]);

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       {/* Render tasks or other UI as needed */}
//     </div>
//   );
// }

