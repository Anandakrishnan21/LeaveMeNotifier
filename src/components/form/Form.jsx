"use client";
"use strict";
import React, { useState } from "react";
import jsPDF from "jspdf";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormInput1, FormInput2 } from "../utils/constants";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    admissionNo: "",
    departmentName1: "",
    collegeName: "",
    headOfDept: "",
    departmentName2: "",
    startDate: new Date(),
    endDate: "",
    reason: "Sick Leave",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = formData.startDate;

    const {
      fullName,
      admissionNo,
      departmentName1,
      departmentName2,
      headOfDept,
      collegeName,
      startDate,
      endDate,
      reason,
    } = formData;

    const name = fullName ? fullName : "Full Name";
    const admission = admissionNo ? admissionNo : "Admission No";
    const department1 = departmentName1 ? departmentName1 : "Department Name";
    const department2 = departmentName2 ? departmentName2 : "Department Name";
    const head = headOfDept ? headOfDept : "Head of the Department";
    const college = collegeName ? collegeName : "College Name";
    const start = startDate ? startDate.toLocaleDateString() : "[ Start Date ]";
    const end = endDate ? endDate.toLocaleDateString() : "[ End Date ]";

    const contentTemplates = {
      "Sick Leave": `I am writing to request sick leave as I am not feeling well and unable to attend college. I anticipate being on sick leave from ${start} to ${end}, as advised by my doctor. I understand the importance of my academic commitments and will make sure to catch up on any missed coursework. Thank you for your understanding and support.`,
      "Casual Leave": `I am writing to request casual leave for personal reasons. I need to be absent from college from ${start} to ${end}. I assure you that I will make every effort to minimize any disruption to my academic responsibilities. Thank you for your understanding and support.`,
      "Duty Leave": `I am writing to request duty leave as I have been assigned responsibilities outside of college. I will be absent from ${start} to ${end} for this purpose. I will make arrangements to ensure that my academic tasks are managed during my absence. Thank you for your understanding and support.`,
      "One-Day Leave": `I am writing to request a one-day leave for personal matters on ${start}. I will ensure that my academic tasks are managed before my leave. I appreciate your support and understanding.`,
      "Half-Day Leave": `I would like to request half-day leave for personal reasons on ${start}. I will be absent for the first half/second half of the day. I understand the importance of my academic commitments and will make sure to catch up on any missed coursework. Thank you for your understanding and support.`,
      "Urgent Leave": `I need to request urgent leave for unforeseen personal matters. I will be absent from college from ${start} to ${end}. I assure you that I will make every effort to catch up on any missed coursework and minimize the impact of my absence. Thank you for your understanding and support.`,
    };

    const fullContent = contentTemplates[reason] || "";

    doc.setFontSize(14);
    doc.text(name, 10, 32);
    doc.text(admission, 10, 38);
    doc.text(department1, 10, 44);
    doc.text(college, 10, 50);

    doc.text(`Date: ${date.toLocaleDateString()}`, 10, 62);

    doc.text(head, 10, 74);
    doc.text(department2, 10, 80);
    doc.text(college, 10, 86);

    doc.text("Subject: Leave Letter", 10, 98);

    doc.text(`Dear ${head},`, 10, 110);
    const splitText = doc.splitTextToSize(
      fullContent,
      doc.internal.pageSize.getWidth() - 20
    );
    doc.text(splitText, 10, 122);

    doc.text("Sincerely,", 10, 172);
    doc.text(name, 10, 178);
    doc.text(admission, 10, 184);

    doc.save("Leave Letter.pdf");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 flex flex-col items-center">
      <form className="font-custom text-sm w-5/6 md:w-5/12 bg-white p-2 border-2 border-gray-200 flex flex-col gap-6 my-10 py-10 rounded-xl">
        <div className="w-5/6 flex flex-col m-auto gap-2">
          <h1 className="text-lg font-semibold">Sender's Address Details</h1>
          {FormInput1.map((input) => (
            <div key={input.id}>
              <label htmlFor={input.labelFor}>{input.labelName}</label>
              <input
                type={input.type}
                name={input.name}
                value={formData[input.value]}
                onChange={handleInputChange}
                placeholder={input.placeholder}
                required
                className="w-full border-2 border-gray-200 hover-border-gray-500 duration-500 p-1.5 rounded"
              />
            </div>
          ))}
        </div>
        <div className="w-5/6 flex flex-col m-auto gap-2">
          <h1 className="text-lg font-semibold">Receiver's Address Details</h1>
          {FormInput2.map((input) => (
            <div key={input.id}>
              <label htmlFor={input.labelFor}>{input.labelName}</label>
              <input
                type={input.type}
                name={input.name}
                value={formData[input.value]}
                onChange={handleInputChange}
                placeholder={input.placeholder}
                required
                className="w-full border-2 border-gray-200 hover-border-gray-500 duration-500 p-1.5 rounded"
              />
            </div>
          ))}
        </div>
        <div className="w-5/6 flex flex-col m-auto gap-2">
          <h1 className="text-lg font-semibold">Leave Details</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="startDate">Starting Date</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) =>
                setFormData({
                  ...formData,
                  startDate: date,
                })
              }
              required
              className="w-full border-2 border-gray-200 hover-border-gray-500 duration-500 p-1.5 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="endDate">Ending Date</label>
            <DatePicker
              selected={formData.endDate}
              onChange={(date) =>
                setFormData({
                  ...formData,
                  endDate: date,
                })
              }
              className="w-full border-2 border-gray-200 hover-border-gray-500 duration-500 p-1.5 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="reason">Reason</label>
            <select
              name="reason"
              id="reason"
              value={formData.reason}
              onChange={handleInputChange}
              required
              className="w-full border-2 border-gray-200 hover-border-gray-500 duration-500 p-1.5 rounded"
            >
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Duty Leave">Duty Leave</option>
              <option value="One-Day Leave">One-Day Leave</option>
              <option value="Half-Day Leave">Half-Day Leave</option>
              <option value="Urgent Leave">Urgent Leave</option>
            </select>
          </div>
        </div>
        <div className="w-5/6 flex m-auto gap-2">
          <button
            onClick={generatePDF}
            className="w-full flex items-center justify-center text-white bg-slate-500 hover-bg-slate-400 duration-500 p-1.5 px-2 rounded md:hover-bg-slate-100"
          >
            <p>Generate Pdf</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
