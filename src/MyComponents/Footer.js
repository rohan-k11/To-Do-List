import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "3.5rem",
    marginBottom: "10px"
  }

  let bodyStyle = {
    // overflowY: "scroll",
    height:"95vh"
  }

  return ( 
    <div style={bodyStyle}>
      <footer className='bg-dark text-light py-3' style={footerStyle}>
        <p className="text-center">
          Copyright &copy; My-to-do-list.com 
        </p>
      </footer>
    </div>
  )
}
