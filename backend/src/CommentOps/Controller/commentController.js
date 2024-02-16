import { getCommentsForUserService,getCommentService, addCommentService } from '../Services/commentServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { commentValidator } from '../Validator/commentValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";


export const getComment = async (req, res) => {
    try {
        const data = await getCommentService();
        if (data.length === 0) {
            sendNotFound(res, 'No Comment found');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(data, req.query.order));
                } else {
                    res.status(200).json(data);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(data, req.query.order), req, res);
                } else {
                    paginate(data, req, res);
                }
            }
        }

    } catch (error) {
        sendServerError(res, error);
    }
}

//////////////////////////////////////////////////////
export const getCommentById = async (req, res) => {
    try {
        const commentId = req.params.id;

        // Query the database to get the Comment by ID
        const comment = await getsCommentByIdFromDatabase(commentId);

        if (!comment) {
            sendNotFound(res, 'Comment not found');
        } else {
            res.status(200).json(comment);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
}

async function getsCommentByIdFromDatabase(commentId) {
    try {
        const result = await poolRequest()
            .input('CommentID', sql.VarChar, commentId)
            .query("SELECT * FROM Comment WHERE CommentID = @CommentID");

        return result.recordset[0]; // Assuming comment id is unique
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////

////////////////////////////////////////////////////
//--function to get a user
export const getaCommenttForUser = async (req, res) => {
    try {
        const commentId = req.params.commentId;

        const comments = await getCommentsForUserService(commentId);

        if (comments.length === 0) {
            sendNotFound(res, 'No Comments found for the user');
        } else {
            if (!req.query.page || !req.query.limit) {
                if (req.query.order) {
                    res.status(200).json(orderData(comments, req.query.order));
                } else {
                    res.status(200).json(comments);
                }
            } else {
                if (req.query.order) {
                    paginate(orderData(comments, req.query.order), req, res);
                } else {
                    paginate(comments, req, res);
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};
////////////////////////////////////////////////////


export const createComment = async (req, res) => {
    const newComment = {
        CommentID: req.body.CommentID,
        PostID: req.body.PostID,
        CommentDate: req.body.CommentDate,
        Content: req.body.Content,
    }

    const { error } = commentValidator(newComment);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addCommentService(newComment);
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Comment with ID: ${newComment.CommentID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
}

///////////////////////////////////////
export const updateComment = async (req, res) => {
    try {
        const commentId = req.params.id;

        // Fetch comment data from the database
        const comment = await getsCommentByIdFromDatabase(commentId);

        if (!comment) {
            sendNotFound(res, 'Comment not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                if (req.body.Content) {
                    // Log the current Comment before updating
                    console.log('Current Comment:', comment.Content);

                    // Update the comment in the database
                    await updateCommentInDatabase(commentId, req.body.Content);

                    // Log the updated Comment after updating
                    console.log('Updated Comment:', req.body.Content);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Comment updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid Content for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updateCommentInDatabase(commentId, newContent) {
    try {
        await poolRequest()
            .input('CommentID', sql.VarChar, commentId)
            .input('Content', sql.VarChar, newContent)
            .query("UPDATE Comment SET Content = @Content WHERE CommentID = @CommentID");
    } catch (error) {
        throw error;
    }
}


////////////////////////////////////////////////////////////////////////
export const deleteComment = async (req, res) => {
    try {
        const commentid = req.params.id;

        // Check if the comment exists
        const comment = await getCommentByIdFromDatabase(commentid);

        if (!comment) {
            sendNotFound(res, 'Comment not found');
        } else {
            // Delete the comment from the database
            await deleteCommentService(commentid);
            sendDeleteSuccess(res, `Comment with id: ${commentid} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
}

async function getCommentByIdFromDatabase(commentid) {
    try {
        const result = await poolRequest()
            .input('CommentID', sql.VarChar, commentid)
            .query("SELECT * FROM Comment WHERE CommentID = @CommentID");

        return result.recordset[0]; // Assuming CommentID is unique
    } catch (error) {
        throw error;
    }
}

async function deleteCommentService(commentid) {
    try {
        await poolRequest()
            .input('CommentID', sql.VarChar, commentid)
            .query("DELETE FROM Comment WHERE CommentID = @CommentID");
    } catch (error) {
        throw error;
    }
}
/////////////////////////////////////////////////////////