import { getPostService, addPostService } from '../Services/postServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { postValidator } from '../Validator/postValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";

/////////////////////////////////////////////////
export const getPost = async (req, res) => {
    try {
        const data = await getPostService();
        console.table(data);
        if (data.length === 0) {
            sendNotFound(res, 'No Post found');
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
export const getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        // Query the database to get the Post by ID
        const post = await getPostByIdFromDatabase(postId);
        console.table(post);

        if (!post) {
            sendNotFound(res, 'Post not found');
        } else {
            res.status(200).json(post);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
}

async function getPostByIdFromDatabase(postId) {
    try {
        const result = await poolRequest()
            .input('PostID', sql.VarChar, postId)
            .query("SELECT * FROM Post WHERE PostID = @PostID");

        return result.recordset[0]; // Assuming post id is unique
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////

export const createPost = async (req, res) => {
    const newPost = {
        PostID: req.body.PostID,
        UserID: req.body.UserID,
        Content: req.body.Content,
        PostDate: req.body.PostDate,
        Likes: req.body.Likes,
        Comments: req.body.Comments,

    }
    console.table(newPost);

    const { error } = postValidator(newPost); // Update to use postValidator
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addPostService(newPost); // Update to use addPostService
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Post with ID: ${newPost.PostID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
}

///////////////////////////////////////
export const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;

        // Fetch post data from the database
        const post = await getPostByIdFromDatabase(postId);

        if (!post) {
            sendNotFound(res, 'Post not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                if (req.body.Content) {
                    // Log the current Content before updating
                    console.log('Current Content:', post.Content);

                    // Update the post in the database
                    await updatePostInDatabase(postId, req.body.Content);

                    // Log the updated Content after updating
                    console.log('Updated Content:', req.body.Content);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Post updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid Content for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updatePostInDatabase(postId, newContent) {
    try {
        await poolRequest()
            .input('PostID', sql.VarChar, postId)
            .input('Content', sql.VarChar, newContent)
            .query("UPDATE Post SET Content = @Content WHERE PostID = @PostID");
    } catch (error) {
        throw error;
    }
}


////////////////////////////////////////////////////////////////////////
export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;

        // Check if the post exists
        const post = await getsPostByIdFromDatabase(postId);

        if (!post) {
            sendNotFound(res, 'Post not found');
        } else {
            // Delete the post from the database
            await deletePostService(postId);
            sendDeleteSuccess(res, `Post with id: ${postId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
}

async function getsPostByIdFromDatabase(postId) {
    try {
        const result = await poolRequest()
            .input('PostID', sql.VarChar, postId)
            .query("SELECT * FROM Post WHERE PostID = @PostID");

        return result.recordset[0]; // Assuming PostID is unique
    } catch (error) {
        throw error;
    }
}

async function deletePostService(postId) {
    try {
        await poolRequest()
            .input('PostID', sql.VarChar, postId)
            .query("DELETE FROM Post WHERE PostID = @PostID");
    } catch (error) {
        throw error;
    }
}
/////////////////////////////////////////////////////////