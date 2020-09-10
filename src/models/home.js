// const connection = require('../helpers/mysql');
// const query = require('../helpers/query');

// module.exports = {
//   getHomeData: (skills, location, position, job_type, order_by, page) => {
//     const offset = page * 8 - page
//     return new Promise((resolve, reject) => {
//       const skillsValue = skills
//       const locationValue = `%${location}%`
//       const positionValue = `%${position}%`
//       const jobTypeValue = `%${job_type}%`
//       // const orderByValue = order_by
//       connection.query(query.home.getHomeData, [skillsValue, locationValue, positionValue, jobTypeValue, order_by, offset], (err, result) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(result);
//       })
//     })
//   }
// }

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

parameter:
- skills
- location
- position
- job_type
- name
- order by
- limit
- offset

*/