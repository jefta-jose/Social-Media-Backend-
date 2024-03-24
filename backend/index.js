import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import logger from './src/UserOps/Database/logger.js';
import userRouter from './src/UserOps/Routes/userRoutes.js';
import commentRouter from './src/CommentOps/Routes/commentRoutes.js';
import postRouter from './src/PostOps/Routes/postRoutes.js';
import photoRouter from './src/PhotoOps/Routes/photoRoutes.js';
import messageRouter from './src/MessageOPs/Routes/messageRoutes.js';
import groupRouter from './src/GroupOps/Routes/groupRoutes.js';
import groupMemberRouter from './src/GroupMembersOps/Routes/groupMembersRoutes.js';
import friendshipRouter from './src/FriendshipOps/Routes/friendshipRoutes.js';
import eventRouter from './src/EventOps/Routes/eventRoutes.js';
import eventAttendeeRouter from './src/EventAttendeeOps/Routes/eventAttendeeRoutes.js';
import cron from 'node-cron';

dotenv.config(); // THIS IS USED TO CONFIGURE THE .ENV FILE IN THIS ENVIRONMENT
const app = express(); // just understand that we have an experess function that has been defined somewhere.  APP STORES THIS FUNCTION.
const port = process.env.PORT || 3000; // the port here 

//middlewares
//the work of a middlewear is simply to CUSTOMIZE REQUESTS AND RESPONSES.
app.use(bodyParser.json()); //Parses incoming JSON payloads and makes the parsed data available in `req.body`.  
app.use(bodyParser.urlencoded({ extended: true })); // THIS IS COMMONLY USED WHEN SUBMITTING HTML FORMS // TRUE REPRESENTS DIFFRENT DATATYPES=


app.get('/health', (req, res) => {
    res.status(200).send('I am very healthy💪');
});  // THIS ROUTE IS USED TO CHECK THE HEALT OF OUR APPLICATION// IN ORDER TO SEE IT PNPM START AND THEN  ADD /health.


// THIS ARE ALSO MIDDLE WEARS THAT HANDLE REQUEST
app.use('/api', userRouter); // THIS MIDDLE WEAR WILL HANDLE ALL ROUTES DEFINED IN THE USERROUTER AND IF NO SUCH ROUTE IS FOUND IT WILL MOVE ON TO THE NEXT ROUTE
app.use('/api', commentRouter); // HANDLE ALL ROUTES DEFINED BY COMMENT ROUTER.
app.use('/api', postRouter);
app.use('/api', photoRouter);
app.use('/api', messageRouter); // REMEBER THAT THIS ROUTERS ARE VARIABLES
app.use('/api', groupRouter);
app.use('/api', groupMemberRouter);
app.use('/api', friendshipRouter);
app.use('/api', eventRouter);
app.use('/api', eventAttendeeRouter);

//node cron

cron.schedule('*/5 * * * * *', () => {
    sendMail();
});


//THIS CODE HERE IS USED TO START OUR EXPRESS.JS SERVER AND LISTEN FOR INCOMING REQUESTS.
app.listen(port, () => {
    logger.info(`server running on port http://localhost:${port}`); // THIS LOGGER HERE IS USED TO LOG INFORMATION IN A MUTCH BETTER WAY THAN USING CONSOLE . LOG
})
