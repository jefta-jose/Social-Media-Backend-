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
import emailTemp from './src/Emails/Email.js';
import nodemailer from 'nodemailer';
import cron from 'node-cron';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/health', (req, res) => {
    res.status(200).send('I am very healthy💪');
});

app.use('/api', userRouter);
app.use('/api', commentRouter);
app.use('/api', postRouter);
app.use('/api', photoRouter);
app.use('/api', messageRouter);
app.use('/api', groupRouter);
app.use('/api', groupMemberRouter);
app.use('/api', friendshipRouter);
app.use('/api', eventRouter);
app.use('/api', eventAttendeeRouter);

//middlewares
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const mailOptions = {
    from: process.env.EMAIL,
    to: 'ndegwajeff4@gmail.com',
    subject: 'Sending Email for Yooohooo!',
    // text: 'test 2 sending dummy emails!'
    html : emailTemp
};

app.get('/send-mail', async(req, res) => {
    try {
        logger.info('Sending mail....');
       await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                logger.error(error);
                res.status(500).send(error);
            } else {
                logger.info(`Email sent: ${info.response}`);
                res.status(500).send(error);
            }
        });
    } catch (error) {
        logger.error(error);
    }

});

//node cron

cron.schedule('*/5 * * * * *', () => {
    sendMail();
});


app.listen(port, () => {
    logger.info(`server running on port http://localhost:${port}`);
})