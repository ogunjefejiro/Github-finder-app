const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer p-8 bg-gray-700 text-primary-content footer-center">
            <div>
                <p>Copyright &copy; {year}. All rights reserved - Developed by Fejiro</p>
            </div>
            
        </footer>
    )
}

export default Footer
