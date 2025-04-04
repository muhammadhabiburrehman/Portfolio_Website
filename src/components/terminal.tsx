"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TerminalProps {
  className?: string;
  skills?: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

export function Terminal({
  className,
  skills = [
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "Ansible",
    "Prometheus",
    "Grafana",
    "Linux",
    "Bash",
    "Python",
  ],
  typingSpeed = 50,
  pauseDuration = 1200,
}: TerminalProps) {
  const [text, setText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Main typing effect
  useEffect(() => {
    if (skills.length === 0) return;

    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (charIndex < skills[skillIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + skills[skillIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setText("");
          setCharIndex(0);
          setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, skillIndex, skills, pauseDuration, typingSpeed]);

  // Force cycling if it gets stuck
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      if (text === skills[skillIndex] || text === "") {
        setText("");
        setCharIndex(0);
        setIsTyping(true);
        setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(cycleInterval);
  }, [skillIndex, skills, text]);

  return (
    <div
      className={cn(
        "bg-black/80 text-green-500 p-4 rounded-md font-mono w-full max-w-md",
        className,
      )}
    >
      <div className="flex items-center gap-1 mb-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-xs text-gray-400">terminal</div>
      </div>
      <div className="terminal-content">
        <p className="mb-1 text-gray-400">$ whoami</p>
        <p className="mb-3">DevOps Engineer</p>
        <p className="mb-1 text-gray-400">$ ls skills</p>
        <p className="flex items-center">
          <span className="mr-1">{text}</span>
          <span className="h-4 w-2 bg-green-500 animate-pulse"></span>
        </p>
      </div>
    </div>
  );
}
