import React from 'react';
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Book, Clock, Calendar, Award } from "lucide-react";


const UserProfileCard = ({ userData }) => {
  return (
    <Card className="col-span-full md:col-span-1 bg-gray-800 border-gray-700 shadow-lg">
      <CardHeader>
        <CardDescription>
          <img
            src="/assets/images/profile.png"
            className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500"
            alt="User Avatar"
          />
        </CardDescription>
        <div className="text-2xl text-center mt-4 text-blue-300">{userData.username || "User"}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-300">Progress</span>
            <Trophy className="text-yellow-400" />
          </div>
          
          {Object.entries(userData.solvedCounts || {}).map(([difficulty, count]) => (
            <div key={difficulty} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`font-semibold flex items-center ${difficulty === 'easy' ? 'text-green-400' : difficulty === 'medium' ? 'text-yellow-400' : 'text-red-400'}`}>
                  <Target className="mr-2 h-4 w-4" /> {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </span>
                <span>{count} / {userData.totalCounts[difficulty]}</span>
              </div>
              <Progress 
                value={(count / userData.totalCounts[difficulty]) * 100 || 0} 
                className="w-full bg-gray-700" 
              />
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center">
              <Book className="mr-2 h-4 w-4" /> Completed Lessons
            </span>
            <span className="font-semibold">{userData.completedProblems || 0}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center">
              <Clock className="mr-2 h-4 w-4" /> Study Time
            </span>
            <span className="font-semibold">{userData.studyTime || '0h'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center">
              <Calendar className="mr-2 h-4 w-4" /> Joined
            </span>
            <span className="font-semibold">{userData.joinDate || 'N/A'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center">
              <Award className="mr-2 h-4 w-4" /> Rank
            </span>
            <span className="font-semibold">{userData.rank || 'Beginner'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;