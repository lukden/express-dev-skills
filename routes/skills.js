import { Router } from 'express'
import * as skillsCtrl from '../data/skills.js'
const router = Router()

/* GET users listing. */

router.get('/', skillsCtrl)
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

app.get('/skills', function(req, res) {
  todoDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})

export {
  router
}
