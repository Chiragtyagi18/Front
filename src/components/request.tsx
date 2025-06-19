// 'use client';
// import React, { useState } from 'react';

// const request: React.FC = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     email: '',
//     size: '',
//     timeFrame: '',
//     quantity: '',
//     projectDescription: '',
//   });

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);
//     // Logic to send data can be added here
//   };

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
//       <h2>REQUEST A QUOTE</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           </label>
//         </div>
//         <div>
//           <label>
//             Phone Number:
//             <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
//           </label>
//         </div>
//         <div>
//           <label>
//             E-mail:
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </label>
//         </div>
//         <div>
//           <label>
//             Size:
//             <select name="size" value={formData.size} onChange={handleChange} required>
//               <option value="">Choose Size</option>
//               <option value="small">Small</option>
//               <option value="medium">Medium</option>
//               <option value="large">Large</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Time Frame:
//             <select name="timeFrame" value={formData.timeFrame} onChange={handleChange} required>
//               <option value="">Choose Time Frame</option>
//               <option value="1-week">1 Week</option>
//               <option value="2-weeks">2 Weeks</option>
//               <option value="1-month">1 Month</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Quantity:
//             <select name="quantity" value={formData.quantity} onChange={handleChange} required>
//               <option value="">Choose Quantity</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Please Describe Your Project:
//             <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} required />
//           </label>
//         </div>
//         <div>
//           <p>
//             By submitting this form you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
//           </p>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default request;

   
'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: '',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur',
    answer: '',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: '',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-tight">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="border-t border-b divide-y">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-6 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>
              <span className="text-xl select-none">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            {openIndex === index && faq.answer && (
              <p className="text-gray-700 text-base mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
