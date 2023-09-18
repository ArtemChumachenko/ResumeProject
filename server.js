const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.static(__dirname));

app.get("/", (req,res) => {
  res.sendFile(__dirname + '/index.html')
})

const resumeData = {
  summary: {
    total:
      "Highly skilled and motivated QA Engineer with 6+ years of experience in software testing and quality assurance. Possess a strong understanding of SDLC and various testing methodologies. Adept at creating and executing test plans and cases, identifying and reporting bugs, and working closely with cross-functional teams to deliver high-quality software.",
  },
  personalInfo: {
    name: "Artem Chumachenko",
    title: "QA Automation Engineer",
    email: "chenko.ar@gmail.com",
    phone: "704-750-18-53",
    address: "219 Murray Glen dr., Cary, NC",
  },
  workExperience: [
    {
      company: "AAN Consulting Corporation, NY",
      position: "Software QA Engineer",
      date: "March 2021 - Present",
      description:
        "Collaboration with cross-functional teams to develop and implement testing strategies and test plans Designing, developing, and executing automated test scripts using JS, Cypress, Mocha, Chai Implemented the Page Object design pattern for automation scripts and conducted BDD testing using Cucumber Managing bug tracking using Jira and working with developers to resolve defects in a timely manner Participating in Agile software development processes and providing regular progress updates Conducting smoke and regression testing after bug fixes and new releases Worked on automated testing of web applications.",
    },

    {
        company: "FrikShun, Cary",
        position: "QA Automation Engineer",
        date: "January 2020 - March 2021",
        description:
          "Utilized Selenium WebDriver to write end-to-end tests for a web application. Simulated user interactions and ensured maximum test coverage across multiple browsers and plat-forms using Selenium Grid. Developed an automated testing framework for a complex web application using Selenium and the POM  pattern, allowed for easy maintenance and new test creation. Conducted regression testing after bug fixes and new releases. Maintained and updated test documentation, including test cases and test results",
    },

    {
        company: "ECCO Shoes, Moscow",
        position: "QA Tester",
        date: "April 2016 - December 2019",
        description:
          "Analyzed requirements and created detailed, comprehensive test plans. Designed and executed manual test cases for various functionalities. ·	Conducted regression testing after bug fixes and new releases/",
    },
  ],
  education: [
    {
      institution: "Kazan State University",
      degree: "Bachelor of Science in Computer Science",
      date: "1997 - 2002",
    },
  ],
  skills: ["JavaScript", "HTML", "CSS", "XML", "Cypress", "Mocha", "Chai", "Node.js", "POM", "Cucumber", "BDD", "Postman", "MySQL", "GitHub", "Jenkins", "GitHub Actions", "API Testing"],
};

app.get("/api/summary", (req, res) => {
  res.json(resumeData.summary);
});

app.get("/api/personal-info", (req, res) => {
  res.json(resumeData.personalInfo);
});

app.get("/api/work-experience", (req, res) => {
  res.json(resumeData.workExperience);
});

app.get("/api/education", (req, res) => {
  res.json(resumeData.education);
});

app.get("/api/skills", (req, res) => {
  res.json(resumeData.skills);
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
