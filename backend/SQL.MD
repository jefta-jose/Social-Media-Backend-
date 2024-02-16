# JOINS
------------------------------------------------------------------------
# -- Retrieve comments along with the username of the commenter (53)
SELECT 
    Comment.CommentID,
    Comment.PostID,
    Comment.UserID,
    Comment.CommentDate,
    Comment.Content,
    tbl_User.Username
FROM 
    Comment
INNER JOIN 
    tbl_User ON Comment.UserID = tbl_User.UserID;

------------------------------------------------------------------------
# -- Retrieve all messages between two users with UserID 1 and UserID 2 (191)
SELECT m.MessageID, m.MessageDate, m.Content,
sender.UserID AS SenderID, sender.Username AS SenderUsername,
receiver.UserID AS ReceiverID, receiver.Username AS ReceiverUsername
FROM Message m
JOIN tbl_User sender ON m.SenderID = sender.UserID
JOIN tbl_User receiver ON m.ReceiverID = receiver.UserID
WHERE (m.SenderID = 1 AND m.ReceiverID = 2);

------------------------------------------------------------------------
# -- Display group members and their details for GroupID = 1 (223)
SELECT u.UserID, u.Username, u.Email, u.TagName, u.Location
FROM GroupMembers gm
JOIN tbl_User u ON gm.MemberID = u.UserID
WHERE gm.GroupID = 1;

------------------------------------------------------------------------

# -- Retrieve all friends of a user with UserID 1 (260)
SELECT u.UserID, u.Username
FROM Friendship f
JOIN tbl_User u ON f.User2ID = u.UserID
WHERE f.User1ID = 1
UNION
SELECT u.UserID, u.Username
FROM Friendship f
JOIN tbl_User u ON f.User1ID = u.UserID
WHERE f.User2ID = 1;

------------------------------------------------------------------------

# -- Retrieve usernames of friends for a given user (264)
SELECT u1.Username AS User1, u2.Username AS User2
FROM Friendship f
JOIN tbl_User u1 ON f.User1ID = u1.UserID
JOIN tbl_User u2 ON f.User2ID = u2.UserID
WHERE u1.UserID < u2.UserID;

------------------------------------------------------------------------
# -- Display event details and details of their attendees (300)
SELECT e.EventID, e.EventName, e.Description, e.EventDate, e.Location, e.EventPosterURL,
a.AttendeeID, u.Username AS AttendeeUsername, u.Email AS AttendeeEmail
FROM Event e
JOIN EventAttendee a ON e.EventID = a.EventID
JOIN tbl_User u ON a.AttendeeID = u.UserID;

------------------------------------------------------------------------


# -- Retrieve all events attended by a specific user with UserID 1 (303)
SELECT e.EventID, e.EventName
FROM Event e
JOIN EventAttendee ea ON e.EventID = ea.EventID
JOIN tbl_User u ON ea.AttendeeID = u.UserID
WHERE u.UserID = 1;

------------------------------------------------------------------------