// mongodb+srv://gowthamilakshmipathyk:<password>@cluster0.hlpgf31.mongodb.net/?retryWrites=true&w=majority

// mongodb+srv://gowthamilakshmipathyk:<password>@cluster0.hlpgf31.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const app = express()

// app.get('/',  (req, res)=> {
//   res.send('Hello World')
// })
// app.get('/aboutme',  (req, res)=> {
//     res.send("<h1>My name is Gouthami</h1>")
//   })

// app.listen(3000)

app.get('/',  (req, res)=> {
  res.send("<h1>Gowthami's Resume</h1>")
})

app.get('/careerobjective',  (req, res)=> {
    res.send("<h3>Career Objective</h3> To get an opportunity where I can make best of my potential and contribute to the organization's growth.")
  })

  app.get('/workHistory',  (req, res)=> {
    res.send("<h3>Work History</h3><ul><li><p>Worked with <b>Regent research writings pvt ltd </b>from JUL2017 to SEP2018 as a <b>Reasearch consultant</b> in Bangalore.</p></li><li>Worked with <b>Sri Vishnu Disposables P Ltd</b> from JAN2015 to MAY2017 as a <b>Production & Quality Control Engineer Trainee</b> in Chennai.</li></ul>")
  })

  app.get('/personalDetails',  (req, res)=> {
    res.send("<h3>Personal Deatails</h3><ul><li>Date of Birth: 29-09-1993</li><li>Gender: Female</li><li>Marital Status: Married</li><li>Languages Known: Telugu, English, Tamil, Kannada</li></ul>")
  }) 

  app.get('/declaration', (req, res)=>{
    res.send("<h3>Declaration</h3><p>I hereby declare that the above particulars furnished by me are true to the best of my knowledge and belief.</p><h4>Date: </h4><h4>Place:</h4><br></br><h3> Gowthami</h3>")
  })

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});