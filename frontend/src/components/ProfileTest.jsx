import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileTest = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Simple Navigation */}
      <nav className="border-b border-gray-700 bg-gray-900 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">CodeArena</h1>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Back to Dashboard
          </button>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="flex items-center gap-6">
            {/* Profile Picture */}
            <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            {/* User Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Alex Johnson</h1>
              <p className="text-gray-400 mb-4">@alexcodes</p>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                Gold Tier
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">247</div>
              <div className="text-gray-400 text-sm">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">18</div>
              <div className="text-gray-400 text-sm">Contests Won</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">12 days</div>
              <div className="text-gray-400 text-sm">Current Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">January 2024</div>
              <div className="text-gray-400 text-sm">Member Since</div>
            </div>
          </div>
        </div>

        {/* Recent Problems */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Recently Solved Problems</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Two Sum</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-green-500 text-green-100 px-2 py-1 rounded text-xs">Easy</span>
                    <span className="text-gray-400 text-sm">Arrays</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-300">12 min</div>
                  <div className="text-gray-400 text-xs">2 hours ago</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Binary Tree Traversal</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-yellow-500 text-yellow-100 px-2 py-1 rounded text-xs">Medium</span>
                    <span className="text-gray-400 text-sm">Trees</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-300">28 min</div>
                  <div className="text-gray-400 text-xs">5 hours ago</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Dynamic Programming - Knapsack</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-red-500 text-red-100 px-2 py-1 rounded text-xs">Hard</span>
                    <span className="text-gray-400 text-sm">Dynamic Programming</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-300">45 min</div>
                  <div className="text-gray-400 text-xs">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTest;
