
import SessionModel from '../models/sessionModel.js';
import StudentModel from '../models/studentModel.js';

// Start a new session
export const startSession = async (req, res) => {
  const { studentID, sessionStartTime } = req.body;
  console.log("Received studentID:", studentID);
  console.log("Received sessionStartTime:", sessionStartTime);
res.json("sa")
  console.log(sessionStartTime);
  

  // Input validation
  if (!studentID || !sessionStartTime) {
    return res.status(400).json({ message: "Student ID and session start time required" });
  }

  try {
    // Check if the student exists
    const student = await StudentModel.findOne({ studentId: studentID});
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
      
    }

    // Create a session
    const session = await SessionModel.create({
     studentId: studentID,
      sessionStartTime
    });

    res.status(201).json({ message: "Session created successfully", data: session });
  } catch (error) {
    console.error("Error in creating session", error);
    res.status(500).json({ message: "Error in creating session. Please try again later", error: error.message });
  }
};


// export const tokensession = async (req,res) =>{
//   const {studentID,token, sessionStartTime} = req.body;
//   try{ 
//     //create and save new session record
//     const session = await SessionModel.create({studentId: studentID,
//                                                token,
//                                               sessionStartTime})
//       res.status(201).json({message: "session started successfully", data: session})
// }
// catch(error){
//   console.error('error saving session',error)
//   res.status(500).json({message: "error starting session",error})

// }
// }


// export const exitSession = async (req,res) => {
//   const {token} = req.params;

//   try{
//     const session = await SessionModel.findOneAndUpdate(
//       {studentId: studentID},   //filter to find the session
//       {exitTime: new Date()},
//       {new: true, sort: { sessionStartTime: -1}}
//     )

//     //check if a session was found and updated
//     if(!session){
//       return res.status(404).json({message:"No active session found for this student"})
//     }
//     res.status(200).json({message:" session exited successfully",data:session})
//   }
//   catch(error){
//     console.error("error in exiting session",error);
//     res.status(500).json({message:"error in exiting session .Please try again later",error:error.message})
    
//   }
// }
















// import SessionModel from '../models/sessionModel.js'
// import StudentModel from '../models/studentModel.js'


// //start a new session
// export const startSession = async (req,res) => 
// {
//   const { studentID, sessionStartTime} = req.body;

//   //input validation
//   if(!studentID || !sessionStartTime){
//     return res.status(400).json({message: "Student ID and session start time required"})
//   }

//   try{
//     const session = await SessionModel.create({
//                                        studentID, sessionStartTime
//     })
//     res.status(201).json({message: "Session created successfully",data: session})
//   }
//   catch(error){
//     console.error("error in creating session ", error);
//     res.status(500).json({message:"error in creating session.Please try again later"})
    
//   }
// }