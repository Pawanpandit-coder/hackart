import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Hackart. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
