import React from 'react'

export const Footer = () => {
   const gitHub = <svg className='footer__git' xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 12 12">
    <path fill="currentColor" d="M6 0a6 6 0 110 12A6 6 0 016 0zm0 .98C3.243.98 1 3.223 1 6a5.02 5.02 0 003.437 4.77.594.594 0 00.045.005c.203.01.279-.129.279-.25l-.007-.854c-1.39.303-1.684-.674-1.684-.674-.227-.58-.555-.734-.555-.734-.454-.312.034-.306.034-.306.365.026.604.288.708.43l.058.088c.446.767 1.17.546 1.455.418.046-.325.174-.546.317-.672-1.11-.127-2.277-.558-2.277-2.482 0-.548.195-.996.515-1.348l-.03-.085c-.064-.203-.152-.658.079-1.244l.04-.007c.124-.016.548-.013 1.335.522A4.77 4.77 0 016 3.408c.425.002.853.058 1.252.17.955-.65 1.374-.516 1.374-.516.272.692.1 1.202.05 1.33.32.35.513.799.513 1.347 0 1.93-1.169 2.354-2.283 2.478.18.155.34.462.34.93l-.006 1.378c0 .13.085.282.323.245A5.02 5.02 0 0011 6C11 3.223 8.757.98 6 .98z"/>
    </svg>
  return (
    <footer className='footer'>
        <div className="footer-content">
        <p>Разработал Волков Андрей</p>
        <div className="footer-social">
            <a className="footer__hh" target='_blank' href="https://hh.ru/resume/ce1a7d41ff08233a6e0039ed1f49424c694e38">
                <p className=''>hh</p>
            </a>
            <a target='_blank' href="https://github.com/AndrewVolkov72">
                {gitHub}
            </a>
        </div>
        </div>
    </footer>
  )
}