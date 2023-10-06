function populateSummary () {
  fetch('http://localhost:3000/api/summary')
    .then((response) => response.json())
    .then((data) => {
      const summarySection = document.getElementById('summary')
      summarySection.innerHTML = `
        <h2>Summary</h2> 
            <p>${data.total}</p>
        `
    })
    .catch((error) => console.error('Error fetching summary:', error))
}
function populatePersonalInfo () {
  fetch('http://localhost:3000/api/personal-info')
    .then((response) => response.json())
    .then((data) => {
      const personalInfoSection = document.getElementById('personal-info')
      personalInfoSection.innerHTML = `
            <h2>Personal Information</h2>
            <div class="info">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Title:</strong> ${data.title}</p>
                <p><strong>Email:</strong> ${data.email} <strong>Phone:</strong> ${data.phone} <strong>Address:</strong> ${data.address}</p>
            </div>
        `
      personalInfoSection.style.padding = '20px'
      personalInfoSection.style.border = '1px solid #ddd'
      const infoDiv = personalInfoSection.querySelector('.info')
      infoDiv.style.marginTop = '10px'
      infoDiv.querySelectorAll('strong').forEach((label) => {
        label.style.fontWeight = 'bold'
      })
    })
    .catch((error) => console.error('Error fetching personal info:', error))
}

function populateWorkExperience () {
  fetch('http://localhost:3000/api/work-experience')
    .then((response) => response.json())
    .then((data) => {
      const workExperienceSection = document.getElementById('work-experience')
      workExperienceSection.innerHTML = `
          <h2>Work Experience</h2>
          <ul>
             ${data.map((experience) =>
                   `<li>
                      <strong>${experience.company}</strong> - ${experience.position}
                      <br>Date: ${experience.date}
                      <br><strong>Description:</strong> ${experience.description}
                    </li>`
               )
               .join('')}
         </ul>
         <br>
        `
    })
    .catch((error) => console.error('Error fetching work experience:', error))
}

function populateEducation () {
  fetch('http://localhost:3000/api/education')
    .then((response) => response.json())
    .then((data) => {
      const educationSection = document.getElementById('education')
      educationSection.innerHTML = `
          <h2>Education</h2>
          <ul>
            ${data.map((education) =>
                  `<li>
                  <strong>${education.institution}</strong> - ${education.degree}
                  <br>Date: ${education.date}
                </li>`
              )
              .join('')}
          </ul>
          <br>
        `
    })
    .catch((error) => console.error('Error fetching education:', error))
}

function populateSkills () {
  fetch('http://localhost:3000/api/skills')
    .then((response) => response.json())
    .then((data) => {
      const skillsColumn1 = document.getElementById('skills-column1')
      const skillsColumn2 = document.getElementById('skills-column2')

      const halfIndex = Math.ceil(data.length / 2)
      const column1Skills = data.slice(0, halfIndex)
      const column2Skills = data.slice(halfIndex)

      skillsColumn1.innerHTML = column1Skills.map((skill) => `<li>${skill}</li>`).join('')
      skillsColumn2.innerHTML = column2Skills.map((skill) => `<li>${skill}</li>`).join('')
    })
    .catch((error) => console.error('Error fetching skills:', error))
}

populateSummary()
populatePersonalInfo()
populateWorkExperience()
populateEducation()
populateSkills()

let currentZoomedSection = null
const menuLinks = document.querySelectorAll('nav ul li a')

menuLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    const targetId = this.getAttribute('href').substring(1)

    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      if (currentZoomedSection) {
        currentZoomedSection.style.transform = 'scale(1)'
      }

      targetSection.scrollIntoView({ behavior: 'smooth' })
      targetSection.style.transform = 'scale(1.2)'
      currentZoomedSection = targetSection
    }
  })
})
