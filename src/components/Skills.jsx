import html from '../assists/html.png'
import css from '../assists/css.png'
import javascript from '../assists/javascript.png'
import react from '../assists/react.png'
import tailwind from '../assists/tailwind.png'
import node from '../assists/node.png'
import redux from '../assists/redux.png'
import mongo from '../assists/mongo.png'
import 'aos/dist/aos.css'

import React, { useEffect, useRef, useState, useMemo } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState({});
  const skillRefs = useRef({});

  // Wrap skills array in useMemo to prevent unnecessary re-renders
  const skills = useMemo(() => [
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'JAVASCRIPT', image: javascript },
    { name: 'REACT', image: react },
    { name: 'TAILWIND CSS', image: tailwind },
    { name: 'NODE JS', image: node },
    { name: 'MONGO DB', image: mongo },
    { name: 'REDUX', image: redux }
  ], []); // Empty dependency array ensures this is only created once

  useEffect(() => {
    const observers = {};
    
    skills.forEach((skill) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(prev => ({
            ...prev,
            [skill.name]: entry.isIntersecting
          }));
        },
        { threshold: 0.1 }
      );

      if (skillRefs.current[skill.name]) {
        observer.observe(skillRefs.current[skill.name]);
        observers[skill.name] = observer;
      }
    });

    return () => {
      Object.values(observers).forEach(observer => {
        observer.disconnect();
      });
    };
  }, []); // Remove skills from dependencies as it's now memoized

  return (
    <div name="skills" className="w-full h-screen">
      <div className="max-w-[1000px] m-auto p-4 w-full h-full flex flex-col justify-center text-gray-300">
        <div>
          <p className="border-b-4 border-orange-400 inline text-4xl font-bold">Skills</p>
          <p className="py-4">{`// These are the Technologies, I've worked with`}</p>
        </div>

        <div className="w-full py-8 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => skillRefs.current[skill.name] = el}
              className="group relative"
            >
              <div 
                className={`
                  transform transition-all duration-150 ease-in-out
                  hover:scale-110
                  ${isVisible[skill.name] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                <img src={skill.image} alt={`${skill.name} icon`} className="w-20 mx-auto" />
                <p className="my-4">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;