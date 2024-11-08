"use client"
//import React from 'react'
import React, { useRef } from "react";
import RadialChart from '../Components/RadialChart/RadialChart'
import { useUserContext } from '@/context/userContext';
import { useTasks } from '@/context/taskContext';
import html2pdf from "html2pdf.js";

const page = () => {

  const { user } = useUserContext();
  const { tasks, activeTasks, completedTasks, openProfileModal } = useTasks();

  const contentRef = useRef(null);

	const convertToPdf = () => {
		const content = contentRef.current;

		const options = {
			filename: 'my-document.pdf',
			margin: 1,
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2 },
			jsPDF: {
				unit: 'in',
				format: 'letter',
				orientation: 'portrait',
			},
		};

		html2pdf().set(options).from(content).save();
	};

  // Function to export content as PDF
  // const exportToPDF = () => {
  //   const element = contentRef.current;
  //   html2pdf()
  //     .set({ filename: `${user?.name || "tasks"}-report.pdf` })
  //     .from(element)
  //     .save();

  return (
    // <div className="w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col">
    //   <div className="mt-4 mx-6">
    <div className="flex flex-col items-center gap-5 w-full">

    <div className="mt-6 flex flex-col gap-8 w-full" ref={contentRef}>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-gray-400">
            <p>Total Tasks:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-purple-500 rounded-[5px]"></span>
              <span className="font-medium text-4xl text-[#333]">
                {tasks.length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p>In Progress:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-[#3AAFAE] rounded-[5px]"></span>
              <span className="font-medium text-4xl text-[#333]">
                {activeTasks.length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p>Open Tasks:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-orange-400 rounded-[5px]"></span>
              <span className="font-medium text-4xl text-[#333]">
                {activeTasks.length}
              </span>
            </p>
          </div>
          <div className="text-gray-400">
            <p>Completed:</p>
            <p className="pl-4 relative flex gap-2">
              <span className="absolute h-[70%] w-[0.2rem] left-[1px] top-1/2 translate-y-[-50%] bg-green-400 rounded-[5px]"></span>
              <span className="font-medium text-4xl text-[#333]">
                {completedTasks.length}
              </span>
            </p>
          </div>
        </div>
        <RadialChart />
      </div>
      
      <button className="px-8 py-3 bg-[#0064b1] hover:bg-[#7263F3] text-white rounded-[50px]
          hover:text-white transition-all duration-200 ease-in-out" onClick={convertToPdf}>Convert to PDF</button>


    </div>

  )
}


export default page