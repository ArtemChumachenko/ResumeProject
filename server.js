const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const fs = require('fs')
const resumeData = require('./data.json')

app.use(cors())
app.use(express.static(__dirname))
app.use(express.json())

app.get('/', (req, res) => {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/summary', (req, res) => {
  res.json(resumeData.summary)
})

app.get('/api/personal-info', (req, res) => {
  res.json(resumeData.personalInfo)
})

app.get('/api/work-experience', (req, res) => {
  res.json(resumeData.workExperience)
})

app.get('/api/education', (req, res) => {
  res.json(resumeData.education)
})

app.get('/api/skills', (req, res) => {
  res.json(resumeData.skills)
})

app.post('/api/personal-info', (req, res) => {
  const newPersonalInfo = req.body
  resumeData.personalInfo = newPersonalInfo
  fs.writeFileSync('./newData.json', JSON.stringify(resumeData, null, 2), (err) => {
    if (err) {
      res.status(500).send('Error updating newData.json')
    } else {
      res.json({ message: 'New data added successfully', personalInfo: newPersonalInfo })
    }
  })
  res.json({ message: 'New data added successfully', personalInfo: newPersonalInfo })
})

app.post('/api/education', (req, res) => {
  const newEducationData = req.body
  resumeData.education = newEducationData
  fs.writeFileSync('./newData.json', JSON.stringify(resumeData, null, 2), (err) => {
    if (err) {
      res.status(500).send('Error updating newData.json')
    } else {
      res.json({ message: 'New data added successfully', education: newEducationData })
    }
  })
  res.json({ message: 'New data added successfully', education: newEducationData })
})

app.post('/api/summary', (req, res) => {
  const newSummaryData = req.body
  resumeData.summary = newSummaryData
  fs.writeFileSync('./newData.json', JSON.stringify(resumeData, null, 2), (err) => {
    if (err) {
      res.status(500).send('Error updating newData.json')
    } else {
      res.json({ message: 'New data added successfully', summary: newSummaryData })
    }
  })
  res.json({ message: 'New data added successfully', summary: newSummaryData })
})

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = server
