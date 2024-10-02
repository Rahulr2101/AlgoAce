"use client";

import Nav from "@components/nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchUserData } from "@app/api";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loadingScreen";
import { Award, Book, Calendar, Clock, Target, Trophy } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import UserProfileCard from "@components/UserProfileCard";

const Page = () => {
  const [userData, setUserData] = useState({ data: {}, username: "", totalProgress: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData().then((data) => {
      setUserData(data);
      setTimeout(() => setLoading(false), 600);
      console.log(data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center min-h-screen"
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Nav />
          <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 mt-8">
            <UserProfileCard userData={userData} />

            <div className="col-span-full md:col-span-2 lg:col-span-3 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full bg-secondary">
                <CardHeader>
                  <CardTitle>Welcome back, {userData.username || "User"}!</CardTitle>
                  <CardDescription>Here's an overview of your learning progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Overall Progress</span>
                      <span className="font-semibold">{userData.totalProgress}%</span>
                    </div>
                    <Progress value={parseFloat(userData.totalProgress)} className="w-full" />
                  </div>
                </CardContent>
              </Card>

              {Object.keys(userData.data).map((algo) => (
                <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300" key={algo}>
                  <CardHeader>
                    <CardTitle>{userData.data[algo].typeName}</CardTitle>
                    <CardDescription>Master the {algo.toLowerCase()} algorithm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Progress</span>
                        <span className="font-semibold">{userData.data[algo].progress}%</span>
                      </div>
                      <Progress value={parseFloat(userData.data[algo].progress)} className="w-full bg-gray-700" />
                    </div>
                    <Link href={`/${algo}`} key={userData.data[algo]._id}>
                      <Button className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white transition-colors duration-300">
                        Continue Learning
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Page;