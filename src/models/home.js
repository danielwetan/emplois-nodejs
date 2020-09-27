const connection = require('../helpers/mysql')
const query = require('../helpers/query')

module.exports = {
  getHomeData: (page) => {
    return new Promise((resolve, reject) => {
      connection.query(query.home.getHomeData, (err, result) => {
        if (err) {
          reject(err)
        }
        const msg = {
          ...result,
          page: page
        }
        resolve(msg)
      })
    })
  }
}

/*
Sorting data berdasarkan
----

Sort by name
  a-z
  z-a

Sort by skill
  search skill name

Sort by location
  search location name

Sort by Job type
  freelance
  full time

----

Data from database
id
user_id
name
skill
location
position
job type
image

---
Base query:

SELECT id, user_id, name, skills, location, position, job_type, image FROM talent
WHERE NOT user_id='Hql1v3CjV' ORDER BY id DESC

SELECT id, user_id, name, skills, location, position, job_type, image
FROM talent
WHERE NOT user_id='Hql1v3CjV' AND skills LIKE '%java%' OR location LIKE '%jakarta%' OR position LIKE '%backend%' OR job_type LIKE '%1%' OR name LIKE '%hero%'
ORDER BY name DESC

SELECT id, user_id, name, skills, location, position, job_type, image
FROM talent
WHERE job_type = 1
ORDER BY name ASC, skills ASC, location ASC

*/
