"use client";

import { useState } from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function SandipForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    confirmMobile: "",
    email: "",
    interPercentage: "",
    category: "",
    aadhar: "",
    confirmAadhar: "",
    pincode: "",
    stream: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "firstName" || name === "lastName") {
      newValue = value.replace(/[^a-zA-Z ]/g, "").slice(0, 30);
    }

    if (
      [
        "mobile",
        "confirmMobile",
        "interPercentage",
        "aadhar",
        "confirmAadhar",
        "pincode",
      ].includes(name)
    ) {
      const maxLen = {
        mobile: 10,
        confirmMobile: 10,
        interPercentage: 5, // e.g. 95.5
        aadhar: 12,
        confirmAadhar: 12,
        pincode: 6,
      };
      newValue = value.replace(/\D/g, "").slice(0, maxLen[name]);
    }

    if (name === "category") {
      newValue = value.toUpperCase().slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobile !== formData.confirmMobile) {
      alert("Mobile numbers do not match.");
      return;
    }

    if (formData.aadhar !== formData.confirmAadhar) {
      alert("Aadhar numbers do not match.");
      return;
    }

    const res = await fetch("/api/sandip-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert("Form submitted successfully!");
      window.location.reload();
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 py-10 px-4 sm:px-6 lg:px-8">
    
      <Link href="/" className="text-black px-5">
        <Home size={30} />
      </Link>
       <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600">
            Sandip University
          </h1>
          <p className="text-sm md:text-base text-red-500 mt-1">Enquiry Form</p>
        </div>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-10">
        {/* 🟥 University Heading */}
       

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="confirmMobile"
              placeholder="Confirm Mobile Number"
              value={formData.confirmMobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="interPercentage"
              placeholder="Intermediate Percentage"
              value={formData.interPercentage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="category"
              placeholder="Category (OC/BC/SC/ST)"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="aadhar"
              placeholder="Aadhar Number"
              value={formData.aadhar}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="confirmAadhar"
              placeholder="Confirm Aadhar Number"
              value={formData.confirmAadhar}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <select
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select B.Tech Stream</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Computer Science Engineering">
                Computer Science Engineering
              </option>
              <option value="Electronics and Communication Engineering">
                Electronics and Communication Engineering
              </option>
              <option value="Electrical and Electronics Engineering">
                Electrical and Electronics Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Aeronautical Engineering">
                Aeronautical Engineering
              </option>
              <option value="Biotechnology Engineering">
                Biotechnology Engineering
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded text-lg"
          >
            Submit Enquiry
          </button>
          <div className="text-gray-700 text-xs mt-6">
            <p className="font-semibold mb-1">Instructions:</p>
            <ol className="list-decimal ml-5 space-y-1">
              <li>
                Before proceeding, please check Fee Structure and Eligibility
                Criteria carefully.
              </li>
              <li>
                Provisional admission will be confirmed only after payment of
                Rs. 10,000/-.
              </li>
              <li>
                Final admission will be confirmed after verification of original
                documents at the university campus.
              </li>
              <li>Contact: 7386055697</li>
            </ol>
          </div>
          <div className="mt-10 border-t pt-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Provisional Admission Steps
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
              <li>
                Enter your full Name as mentioned on the SSC result along with
                your registered mobile number.
              </li>
              <li>
                In the next section include the appropriate Personal details.
              </li>
              <li>
                In the “Program details” section ensure that you include proper
                options for Highest Qualification, Select School, Course and
                Admission Year.
              </li>
              <li>
                Fill all the required “Education Details” as per your
                Qualification.
              </li>
              <li>
                Upload all the required scanned documents such as SSC, HSC &
                Graduation result. The Documents are accepted in PDF Format
                only.
              </li>
              <li>Proceed for your online payment to complete the payment.</li>
              <li>
                After successful payment, you will receive the confirmation of
                provisional registration details on your registered email and
                mobile number.
              </li>
            </ol>
          </div>
        </form>
      </div>
    </div>
  );
}
