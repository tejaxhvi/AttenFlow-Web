import React from 'react';

// --- SVG Icon Components ---

const EmailIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const UsernameIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const LockIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path 
      fillRule="evenodd" 
      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" 
      clipRule="evenodd"
    ></path>
  </svg>
);

const GoogleIcon = () => (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
    </svg>
);

const GithubIcon = () => (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
    </svg>
);


// --- Main App Component ---

export default function App() {
  return (
    <>
      {/* This style block contains the CSS animations and global font styles */}
      <style>{`
        body {
            font-family: 'Inter', 'Noto Sans', sans-serif;
        }
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animated-gradient {
          background-size: 200% 200%;
          animation: gradient-animation 15s ease infinite;
        }
      `}</style>

      <div className="bg-gray-900 text-white font-sans">
        <div className="relative flex size-full min-h-screen flex-col items-center justify-center overflow-hidden p-4">
          <div className="absolute inset-0 z-0 animated-gradient bg-gradient-to-r from-purple-900/50 via-cyan-900/50 to-emerald-900/50"></div>
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_90%)]"></div>
          <div className="absolute top-0 left-0 h-full w-full z-20 bg-gradient-to-br from-purple-900/20 via-cyan-900/10 to-emerald-900/20 opacity-50 blur-3xl"></div>
          
          <div className="relative z-30 flex w-full max-w-md flex-col rounded-2xl border border-white/10 bg-black/30 p-8 backdrop-blur-2xl shadow-2xl shadow-purple-500/10">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-white">Welcome Back</h1>
              <p className="mt-2 text-base text-gray-400">Log in to monitor attendance</p>
            </div>

            <form className="space-y-6">

            <div>
                <label className="sr-only" htmlFor="username">Username</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UsernameIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="username"
                    name="userrname"
                    type="username"
                    autoComplete="username"
                    required
                    placeholder="Username"
                    className="form-input block w-full rounded-lg border-white/10 bg-white/5 py-3 pl-10 pr-3 text-white placeholder-gray-500 transition duration-300 ease-in-out focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EmailIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    className="form-input block w-full rounded-lg border-white/10 bg-white/5 py-3 pl-10 pr-3 text-white placeholder-gray-500 transition duration-300 ease-in-out focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="password">Password</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className="form-input block w-full rounded-lg border-white/10 bg-white/5 py-3 pl-10 pr-3 text-white placeholder-gray-500 transition duration-300 ease-in-out focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">Remember me</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">Forgot password?</a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-lg bg-gradient-to-r from-purple-600 via-cyan-600 to-emerald-600 px-4 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-900/80 px-2 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a href="#" className="inline-flex w-full justify-center items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10">
                <GoogleIcon />
                Google
              </a>
              <a href="#" className="inline-flex w-full justify-center items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10">
                <GithubIcon />
                GitHub
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <a href="/signin" className="font-medium text-cyan-400 hover:text-cyan-300">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
