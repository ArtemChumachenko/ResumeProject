/* eslint-disable no-tabs */
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const resumeData = require('./data.json')

app.use(cors())
app.use(express.static(__dirname))

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

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = server
