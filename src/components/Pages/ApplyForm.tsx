import React, { useState } from 'react';
import  './Applyform.css';

// Define a type for the form state to ensure type safety
interface IApplicationForm {
  firstName: string;
  lastName: string;
  dateOfbirth:string;
  language:string;
  gender:string;
  email: string;
  phoneNumber: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  educationLevel: string;
  previousSchool: string;
  schooltranscript:string;
  averageofmarks :string
  programOfInterest: string;
  check:string
  resume: File | null;
  termsAccepted: boolean;
}

const ApplyForm: React.FC = () => {
  // Initialize form state with the structure defined in IApplicationForm
  const [formData, setFormData] = useState<IApplicationForm>({
    firstName: '',
    lastName: '',
    dateOfbirth:'',
    language:'',
    gender:'',
    email: '',
    phoneNumber: '',
    street: ' ',
    city: ' ',
    state:'',
    zipCode:'',
    country:'',
    educationLevel:'',
    previousSchool: '',
    schooltranscript:' ',
    averageofmarks:'' ,
    programOfInterest: '',
    check:'',
    resume: null,
    termsAccepted: false,
  });

  // Handle changes in form inputs
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form data submitted:', formData);
    alert('Application Submitted!');
    // Here you might send the formData to a backend server or another handler
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfbirth}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="language">Language:</label>
        <input
          type="language"
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="gender"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
                   
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="street">Street:</label>
        <input
          type="street"
          id="street"
          name="steet"
          value={formData.street}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city"> Which city do you live:</label>
        <input
          type="city"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="coutry">Which country do you live:</label>
        <input
          type="country"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div> 
      <div>
        <label htmlFor="educationLevel"> Your Education Level:</label>
        <input
          type="cieducationLevelty"
          id="educationLevel"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="previousSchool">Your Previous School:</label>
        <input
          type="text"
          id="previousSchool"
          name="previousSchool"
          value={formData.previousSchool}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="averageofmarks"> Average of marks:</label>
        <input
          type="text"
          id="averageofmarks"
          name="averageofmarks"
          value={formData.averageofmarks}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor=" schooltranscript">Upload Your school transcript:</label>
        <input type="file"
         id="resume" 
         name="resume" 
         onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="averageofmarks">Average of marks 
</label>

      </div>
      <div>
        <label htmlFor="programOfInterest">Which class you want to study:</label>
        <select
          id="programOfInterest"
          name="programOfInterest"
          value={formData.programOfInterest}
          onChange={handleChange}
        >
          <option value="">Select a program</option>
          <option value="computerScience">Computer Science</option>
          <option value="businessManagement">Business Management</option>
          <option value="graphicDesign">Graphic Design</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
      <p> Check the following if it is applicable
</p>:
        <label>
          <input
            type="checkbox"
            name="check"
            value={formData.check}
            onChange={handleChange}
          />
          
          I have access to computer
        </label>

        <label>
          <input
            type="checkbox"
            name="check"
            value={formData.check}
            onChange={handleChange}
          />
          I have access to Smart Phone / Tablet
        </label>

        <label>
          <input
            type="checkbox"
            name="check"
            value={formData.check}
            onChange={handleChange}
          />
          
          I have access to internet
        </label>

        <label>
          <input
            type="checkbox"
            name="check"
            value={formData.check}
            onChange={handleChange}
          />
          
          I can particpate in online courses
        </label>

        <label>
          <input
            type="checkbox"
            name="check"
            value={formData.check}
            onChange={handleChange}
          />
          
          My family is agree with me 
        </label>
      </div>
      <div>
        <label htmlFor="resume">Resume:</label>
        <input type="file"
         id="resume" 
         name="resume" 
         onChange={handleChange} />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          Accept Terms & Conditions
        </label>
      </div>
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplyForm;
