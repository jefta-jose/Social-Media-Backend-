-- Create Database
CREATE DATABASE SocialNetworkDB;
USE SocialNetworkDB;

-- Create User Table
CREATE TABLE tbl_User (
    UserID INT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    TagName VARCHAR(50),
    Location VARCHAR(100)
);

SELECT *
FROM tbl_User



-- Create Post Table
CREATE TABLE Post (
    PostID INT PRIMARY KEY,
    UserID INT,
    Content TEXT,
    PostDate DATETIME,
    Likes INT,
    Comments INT,
    FOREIGN KEY (UserID) REFERENCES tbl_User(UserID)
);

SELECT *
FROM Post

-- Create Comment Table
CREATE TABLE Comment (
    CommentID INT PRIMARY KEY,
    PostID INT,
    UserID INT,
    CommentDate DATETIME,
    Content TEXT,
    FOREIGN KEY (PostID) REFERENCES Post(PostID),
    FOREIGN KEY (UserID) REFERENCES tbl_User(UserID)
);

SELECT *
FROM Comment

-- Create Friendship Table
CREATE TABLE Friendship (
    FriendshipID INT PRIMARY KEY,
    User1ID INT,
    User2ID INT,
    FriendshipDate DATETIME,
    FOREIGN KEY (User1ID) REFERENCES tbl_User(UserID),
    FOREIGN KEY (User2ID) REFERENCES tbl_User(UserID)
);

-- Create Photo Table
CREATE TABLE Photo (
    PhotoID INT PRIMARY KEY,
    UserID INT,
    PhotoURL VARCHAR(255),
    UploadDate DATETIME,
    FOREIGN KEY (UserID) REFERENCES tbl_User(UserID)
);

SELECT *
FROM Photo

-- Create Group Table
CREATE TABLE GroupTable (
    GroupID INT PRIMARY KEY,
    GroupName VARCHAR(255),
    Description TEXT,
    CreatedDate DATETIME
);

-- Create GroupMembers Table
CREATE TABLE GroupMembers (
    GroupID INT,
    MemberID INT,
    PRIMARY KEY (GroupID, MemberID),
    FOREIGN KEY (GroupID) REFERENCES GroupTable(GroupID),
    FOREIGN KEY (MemberID) REFERENCES tbl_User(UserID)
);

-- Create Event Table
CREATE TABLE Event (
    EventID INT PRIMARY KEY,
    EventName VARCHAR(255),
    Descri_ption TEXT,
    EventDate DATETIME,
    Location VARCHAR(100),
    EventPosterURL VARCHAR(255)
);

-- Create EventAttendee Table
CREATE TABLE EventAttendee (
    EventID INT,
    AttendeeID INT,
    PRIMARY KEY (EventID, AttendeeID),
    FOREIGN KEY (EventID) REFERENCES Event(EventID),
    FOREIGN KEY (AttendeeID) REFERENCES tbl_User(UserID)
);

-- Create Message Table
CREATE TABLE Message (
    MessageID INT PRIMARY KEY,
    SenderID INT,
    ReceiverID INT,
    MessageDate DATETIME,
    Content TEXT,
    FOREIGN KEY (SenderID) REFERENCES tbl_User(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES tbl_User(UserID)
);

SELECT *
FROM Message

-- Dummy data for User table
INSERT INTO tbl_User (UserID, Username, Email, Password, TagName, Location)
VALUES 
    (1, 'user1', 'user1@example.com', 'password1', 'tag1', 'Location 1'),
    (2, 'user2', 'user2@example.com', 'password2', 'tag2', 'Location 2'),
    (3, 'user3', 'user3@example.com', 'password3', 'tag3', 'Location 3');

SELECT * 
FROM tbl_User

-- Dummy data for Post table
INSERT INTO Post (PostID, UserID, Content, PostDate, Likes, Comments)
VALUES 
    (1, 1, 'Post content 1', GETDATE(), 10, 5),
    (2, 2, 'Post content 2', GETDATE(), 15, 8),
    (3, 3, 'Post content 3', GETDATE(), 20, 12);

SELECT * 
FROM Post

-- Dummy data for Comment table
INSERT INTO Comment (CommentID, PostID, UserID, CommentDate, Content)
VALUES 
    (1, 1, 2, GETDATE(), 'Comment on post 1 by user 2'),
    (2, 2, 3, GETDATE(), 'Comment on post 2 by user 3'),
    (3, 3, 1, GETDATE(), 'Comment on post 3 by user 1');

SELECT * 
FROM Comment

-- Dummy data for Friendship table
INSERT INTO Friendship (FriendshipID, User1ID, User2ID, FriendshipDate)
VALUES 
    (1, 1, 2, GETDATE()),
    (2, 1, 3, GETDATE());

SELECT * 
FROM Friendship


-- Dummy data for Photo table
INSERT INTO Photo (PhotoID, UserID, PhotoURL, UploadDate)
VALUES 
    (1, 1, 'url1', GETDATE()),
    (2, 2, 'url2', GETDATE()),
    (3, 3, 'url3', GETDATE());
SELECT * 
FROM Photo


-- Dummy data for Group table
INSERT INTO GroupTable (GroupID, GroupName, Description, CreatedDate)
VALUES 
    (1, 'Group 1', 'Description for Group 1', GETDATE()),
    (2, 'Group 2', 'Description for Group 2', GETDATE());

SELECT * 
FROM GroupTable

-- Dummy data for GroupMembers table
INSERT INTO GroupMembers (GroupID, MemberID)
VALUES 
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3);

SELECT * 
FROM GroupMembers


-- Dummy data for Event table
INSERT INTO Event (EventID, EventName, Descri_ption, EventDate, Location, EventPosterURL)
VALUES 
    (1, 'Event 1', 'Description for Event 1', GETDATE(), 'Location 1', 'poster_url_1'),
    (2, 'Event 2', 'Description for Event 2', GETDATE(), 'Location 2', 'poster_url_2');

SELECT * 
FROM Event

-- Dummy data for EventAttendee table
INSERT INTO EventAttendee (EventID, AttendeeID)
VALUES 
    (1, 1),
    (1, 2),
    (2, 2),
    (2, 3);

SELECT * 
FROM EventAttendee


-- Dummy data for Message table
INSERT INTO Message (MessageID, SenderID, ReceiverID, MessageDate, Content)
VALUES 
    (1, 1, 2, GETDATE(), 'Message from user 1 to user 2'),
    (2, 2, 1, GETDATE(), 'Reply from user 2 to user 1'),
    (3, 3, 1, GETDATE(), 'Message from user 3 to user 1');

SELECT * 
FROM Message


--------------------------------
-- QUESTION 1 Friday 2/2024 ASSESSMENT
--------------------------------
-- 1. Retrieve all posts with their comments and likes for a specific user

SELECT *
FROM Post 

SELECT Comments, Likes
FROM Post
WHERE USERID = 2


-- 2. Retrieve all friends of a user
--friends of user with UserID 1 
SELECT u.UserID, u.Username
FROM Friendship f
JOIN tbl_User u ON f.User2ID = u.UserID
WHERE f.User1ID = 1
UNION
SELECT u.UserID, u.Username
FROM Friendship f
JOIN tbl_User u ON f.User1ID = u.UserID
WHERE f.User2ID = 1;


-- 3. Retrieve all events attended by a specific user
--events attended by user with UserID 1
SELECT e.EventID, e.EventName
FROM Event e
JOIN EventAttendee ea ON e.EventID = ea.EventID
JOIN tbl_User u ON ea.AttendeeID = u.UserID
WHERE u.UserID = 1;


-- 4. To display group members and their details for a certain group
--Group members and their details for GroupID = 1
SELECT u.UserID, u.Username, u.Email, u.TagName, u.Location
FROM GroupMembers gm
JOIN tbl_User u ON gm.MemberID = u.UserID
WHERE gm.GroupID = 1;

-- 5. Retrieve all messages between two users
-- all messages between UserID 1 and UserID 2
SELECT m.MessageID, m.MessageDate, m.Content,
sender.UserID AS SenderID, sender.Username AS SenderUsername,
receiver.UserID AS ReceiverID, receiver.Username AS ReceiverUsername
FROM Message m
JOIN tbl_User sender ON m.SenderID = sender.UserID
JOIN tbl_User receiver ON m.ReceiverID = receiver.UserID
WHERE (m.SenderID = 1 AND m.ReceiverID = 2) 


-- 6. To display event details and the details of their attendees
SELECT e.EventID, e.EventName, e.Descri_ption, e.EventDate, e.Location, e.EventPosterURL,
a.AttendeeID, u.Username AS AttendeeUsername, u.Email AS AttendeeEmail
FROM Event e
JOIN EventAttendee a ON e.EventID = a.EventID
JOIN tbl_User u ON a.AttendeeID = u.UserID;


-- 7. Retrieve all messages between two users
SELECT m.MessageID, m.MessageDate, m.Content,
sender.UserID AS SenderID, sender.Username AS SenderUsername,
receiver.UserID AS ReceiverID, receiver.Username AS ReceiverUsername
FROM Message m
JOIN tbl_User sender ON m.SenderID = sender.UserID
JOIN tbl_User receiver ON m.ReceiverID = receiver.UserID
WHERE (m.SenderID = 2 AND m.ReceiverID = 1) 



----------------
-- QUESTION 2 THIS WEEK'S ASSIGNMENT
----------------


--NO 1
----------------
--User Table:
----------------
-- Retrieve all users
SELECT * 
FROM tbl_User

-- Retrieve user by UserID
SELECT * 
FROM tbl_User
WHERE  USERID = 1

-- Retrieve users in a specific location
SELECT * 
FROM tbl_User
WHERE  Location = 'Location 1'  
--or you can use LIKE
SELECT * 
FROM tbl_User
WHERE  Location LIKE 'Location 1'


-- Update user information

UPDATE tbl_User
SET Email = 'ndegwajeff4@gmail.com', Location = 'NYERI'
WHERE USERID = 1;

SELECT *
FROM tbl_user

-- Delete a user
DELETE FROM tbl_User WHERE Email = 'user2@example.com';






--NO 2
----------------
--Post Table:
----------------
-- Retrieve all posts
SELECT * 
FROM Post

-- Retrieve posts for a specific user
SELECT * 
FROM Post 
WHERE USERID = 3

-- Retrieve posts with more than 10 likes
SELECT * 
FROM Post 
WHERE Likes > 3

-- Update post content
UPDATE Post
SET Content = 'I am so good in SQL that i changed this content'
WHERE USERID = 2;

SELECT * 
FROM Post
-- Delete a post
DELETE FROM Post WHERE Likes = 15;







--NO 3
----------------
--Comment Table:
----------------
-- Retrieve all comments
SELECT * 
FROM Comment

-- Retrieve comments for a specific post
SELECT * 
FROM Comment
WHERE POSTID = 3

-- Retrieve comments by a specific user
SELECT * 
FROM Comment 
WHERE USERID = 3

-- Update comment content
UPDATE Comment
SET Content = 'I am so good in SQL that i changed this content'
WHERE CommentId = 2;

SELECT * 
FROM Comment

-- Delete a comment
DELETE FROM Comment WHERE USERID = 3;





--NO 4
-------------------
--Friendship Table:
-------------------
-- Retrieve all friendships
SELECT * 
FROM Friendship;

-- Retrieve friendships for a specific user
SELECT * 
FROM Friendship WHERE User1ID = 1;

-- Update friendship date
UPDATE Friendship
SET FriendshipDate = GETDATE() WHERE FriendshipID = 1;

SELECT * 
FROM Friendship;

-- Delete a friendship
DELETE FROM Friendship WHERE USERID = 1;




--NO 5
----------------
--Photo Table:
----------------
-- Retrieve all photos
SELECT * FROM Photo;

-- Retrieve photos for a specific user
SELECT * FROM Photo WHERE UserID = 1;

-- Update photo URL
UPDATE Photo SET PhotoURL = 'new_url' WHERE PhotoID = 1;

-- Delete a photo
DELETE FROM Photo WHERE PhotoID = 1;
SELECT * FROM Photo;




--NO 6
----------------
--Group Table:
----------------
-- Retrieve all groups
SELECT * FROM GroupTable;

-- Retrieve a group by GroupID
SELECT * FROM GroupTable WHERE GroupID = 1;

-- Update group information
UPDATE GroupTable SET GroupName = 'New Group Name', Description = 'New Description' WHERE GroupID = 1;

-- Delete a group
DELETE FROM GroupTable WHERE GroupID = 1;



--NO 7
------------------------
--GroupMembers Table:
-------------------------
-- Retrieve all group members
SELECT * FROM GroupMembers;

-- Retrieve members of a specific group
SELECT * FROM GroupMembers WHERE GroupID = 1;

-- Remove a member from a group
DELETE FROM GroupMembers WHERE GroupID = 1 AND MemberID = 2;




--NO 8
----------------
--Event Table:
----------------
-- Retrieve all events
-- Retrieve all events
SELECT * FROM Event;


-- Retrieve events with a specific location
SELECT * FROM Event WHERE Location = 'Location 1';

-- Update event information
UPDATE Event SET EventName = 'New Event Name', Descri_ption = 'New Description' WHERE EventID = 1;

-- Delete an event
DELETE FROM Event WHERE EventID = 1;





--NO 8
-------------------------
--EventAttendee Table:
-------------------------
-- Retrieve all event attendees
SELECT * FROM EventAttendee;

-- Retrieve attendees for a specific event
SELECT * FROM EventAttendee WHERE EventID = 1;

-- Remove an attendee from an event
DELETE FROM EventAttendee WHERE EventID = 1 AND AttendeeID = 2;




--NO 9
---------------------
--Message Table:
---------------------
-- Retrieve all messages
SELECT * FROM Message;

-- Retrieve messages between two users
SELECT * FROM Message WHERE (SenderID = 1 AND ReceiverID = 2) OR (SenderID = 2 AND ReceiverID = 1);

-- Update message content
UPDATE Message SET Content = 'New message content' WHERE MessageID = 1;

-- Delete a message
DELETE FROM Message WHERE MessageID = 1;