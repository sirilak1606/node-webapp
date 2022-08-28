//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYwNjQzODQwLCJleHAiOjE2NjA2NDc0NDAsIm5iZiI6MTY2MDY0Mzg0MCwianRpIjoienVnQmpVTWtjeldrSVNYTCIsInN1YiI6MjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.kXYrBHLOPCLZ8phreci7HRUMU_XGAw4z6rwobtWx3dEeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYwNjQ1MTEwLCJleHAiOjE2NjA2NDg3MTAsIm5iZiI6MTY2MDY0NTExMCwianRpIjoieGV4UVo2QUdkYzlnd2h1YSIsInN1YiI6MjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.1mJ2-hPSihkosQRxBusFPqn3SNGCv197UZ7IFJ55B6g"; // put access token
const student = {
  student_id:63366189,
  name: '', // replace with your full name.
  age: 21, // put your age.
  gender: '', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}