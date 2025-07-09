import React from "react"

const Footer = () => {
  return (
    <footer className="bg-black text-purple-300 text-center py-6">
      {/* Icon Row */}
      <div className="flex justify-center gap-8 text-3xl mb-4">
        <a
          href="https://discord.gg/yk3aDCXe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-discord"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC7SHPD9kWLc2LhkOiw1VK8g"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://x.com/HighOrDieGame"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>

      {/* Footer Credit */}
<div className="flex flex-col items-center space-y-2 mt-6">
  <img
    src="/assets/branding/braindead-skull-logo.png"
    alt="Braindead Studios Logo"
    className="h-12 w-auto opacity-80 hover:opacity-100 transition-all duration-300"
  />
  <p className="text-sm text-gray-400">
    Built by <a href="https://braindeadstudios.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Braindead Studios</a>
  </p>
</div>

    </footer>
  )
}

export default Footer
