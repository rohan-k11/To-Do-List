import React from 'react'

export const About = () => {
  const aboutStyle = {
    paddingLeft: '20px',
    paddingTop: '20px'
  }
  const headingStyle = {
    paddingBottom: '10px'
  }
  const paragraphStyle = {
    padding: '0 auto'
  }
  return (
    <div style={aboutStyle}>
      <h3 style={headingStyle}>About Us</h3>
      <p style={paragraphStyle}>
        Our To-Do List website is a simple and intuitive tool designed to help you stay organized and manage your tasks efficiently. With our platform, you can easily add tasks to your list, edit and delete them, mark them as completed, set priority levels, and filter them based on priority or completion status. Our goal is to make it easy for you to stay on top of your to-do list and focus on what matters most.
      </p>
      <p style={paragraphStyle}> 
        Our team is comprised of dedicated professionals who are passionate about creating tools that make a difference in people's lives. Our co-founders, John Doe and Jane Smith, bring a wealth of experience and expertise to the table, having worked in various industries before starting this venture. Our lead developer, Bob Johnson, is a seasoned programmer with a keen eye for detail and a passion for building great products.
        We hope you find our To-Do List website useful and that it helps you achieve your goals and stay productive. Thank you for choosing us as your go-to tool for managing your tasks and staying organized.
      </p>
    </div>
  )
}
