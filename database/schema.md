STUDENTS
db.students.insert({studentId: '1234567', firstName: 'Natalie', lastName:'Roberts', phone: '407-555-1212', email: 'nat123@gmail.com', program: 'ged', schedule: '8am', campus: 'Main', studentStatus: 'active', numContacts: 3, goal: 'college', highLevelEd: 'masters', result: '', advisor: 'Diana', contactDate: '03/18/2018', notes: [], files: []})

db.students.insert({studentId: '3654798', firstName: 'Millie', lastName:'Abel', phone: '407-555-1212', email: 'mill123@gmail.com', program: 'ged', schedule: '8am', campus: 'Main', studentStatus: 'active', numContacts: 3, goal: 'college', highLevelEd: 'hs', result: '', advisor: 'Diana', contactDate: '03/18/2018', notes: [], files: []})

db.students.insert({studentId: '5252361', firstName: 'Riley', lastName:'Monroe', phone: '407-555-1212', email: 'ril123@gmail.com', program: 'ged', schedule: '1pm', campus: 'Main', studentStatus: 'active', numContacts: 3, goal: 'college', highLevelEd: 'hs', result: '', advisor: 'Diana', contactDate: '03/18/2018', notes: [], files: []})

db.students.insert({studentId: '7458962', firstName: 'Baxter', lastName:'Simpson', phone: '407-555-1212', email: 'bax123@gmail.com', program: 'ged', schedule: '5pm', campus: 'KMS', studentStatus: 'active', numContacts: 3, goal: 'college', highLevelEd: '4yr', result: '', advisor: 'Diana', contactDate: '03/18/2018', notes: [], files: []})

db.students.insert({studentId: '3215879', firstName: 'Sally', lastName:'Simeon', phone: '407-555-1212', email: 'sall123@gmail.com', program: 'ged', schedule: '10am', campus: 'Poinciana', studentStatus: 'inactive', numContacts: 3, goal: 'college', highLevelEd: 'masters', result: 'job', advisor: 'Diana', contactDate: '03/18/2018', notes: [], files: []})

------------------------------------------------
NOTES
db.notes.insert({createDate: '03/03/18', studentId: '3215879', advisor: 'Diana', typeContact: 'in person', note: 'Met to discuss her orientation at new tech support position at Verizon.', files: []})

db.notes.insert({createDate: '03/02/18', studentId: '3215879', advisor: 'Diana', typeContact: 'text', note: 'Sent text to confirm 2pm meeting on Tuesday, March 3.', files: []})

-------------------------------------------------
TODO
db.todo.insert({createDate: '03/03/18', studentId: '5252361', dueDate: '03/05/18', todoTitle: 'Resume', todoNote: 'Modify resume for Riley Monroe.', todoStatus: 'open'})

-------------------------------------------------
ADVISOR
db.advisor.insert({createDate: '03/18/18', advisorName: 'Karen', username: '', password: '', activeAssigned: 110, inactiveAssigned: 230, msgoGoal: '25%', msgoCurrent: '22%'})

db.advisor.insert({createDate: '03/18/18', advisorName: 'Natalie', username: '', password: '', activeAssigned: 120, inactiveAssigned: 220, msgoGoal: '25%', msgoCurrent: '26%'})

db.advisor.insert({createDate: '03/18/18', advisorName: 'Diana', username: '', password: '', activeAssigned: 122, inactiveAssigned: 244, msgoGoal: '25%', msgoCurrent: '25%'})


