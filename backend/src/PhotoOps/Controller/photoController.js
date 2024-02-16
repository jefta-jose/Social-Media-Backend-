import { getPhotoService, addPhotoService } from '../Services/photoServices.js';
import { sendNotFound, sendServerError, sendCreated, sendDeleteSuccess, paginate, orderData, checkIfValuesIsEmptyNullUndefined } from '../Helper/responseFunction.js';
import { photoValidator } from '../Validator/photoValidator.js';
import { poolRequest, sql } from "../Database/dbConnect.js";

/////////////////////////////////////////////////
export const getPhoto = async (req, res) => {
    try {
        const data = await getPhotoService(); 
        if (data.length === 0) {
            sendNotFound(res, 'No Photos found');
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
};

//////////////////////////////////////////////////////
export const getPhotoById = async (req, res) => {
    try {
        const photoId = req.params.id;

        // Query the database to get the Photo by ID
        const photo = await getPhotoByIdFromDatabase(photoId);

        if (!photo) {
            sendNotFound(res, 'Photo not found');
        } else {
            res.status(200).json(photo);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getPhotoByIdFromDatabase(photoId) {
    try {
        const result = await poolRequest()
            .input('PhotoID', sql.VarChar, photoId)
            .query("SELECT * FROM Photo WHERE PhotoID = @PhotoID");

        return result.recordset[0]; // Assuming photo id is unique
    } catch (error) {
        throw error;
    }
}

////////////////////////////////////////////////////

export const createPhoto = async (req, res) => {
    const newPhoto = {
        PhotoID: req.body.PhotoID,
        UserID: req.body.UserID,
        PhotoURL: req.body.PhotoURL,
        UploadDate: req.body.UploadDate,
    };

    const { error } = photoValidator(newPhoto); // Update to use photoValidator
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            let response = await addPhotoService(newPhoto); // Update to use createPhotoService
            if (response.message) {
                sendServerError(res, response.message);
            } else {
                sendCreated(res, `Photo with ID: ${newPhoto.PhotoID} was created successfully`);
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};

///////////////////////////////////////
export const updatePhoto = async (req, res) => {
    try {
        const photoId = req.params.id;

        // Fetch photo data from the database
        const photo = await getPhotoByIdFromDatabase(photoId);

        if (!photo) {
            sendNotFound(res, 'Photo not found');
        } else {
            if (checkIfValuesIsEmptyNullUndefined(req, res, req.body)) {
                if (req.body.PhotoURL) {
                    // Log the current PhotoURL before updating
                    console.log('Current PhotoURL:', photo.PhotoURL);

                    // Update the photo in the database
                    await updatePhotoInDatabase(photoId, req.body.PhotoURL);

                    // Log the updated PhotoURL after updating
                    console.log('Updated PhotoURL:', req.body.PhotoURL);

                    // Send a 200 OK status for a successful update
                    res.status(200).json({ message: 'Photo updated successfully' });
                } else {
                    sendServerError(res, 'Please provide a valid PhotoURL for update');
                }
            }
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function updatePhotoInDatabase(photoId, newPhotoURL) {
    try {
        await poolRequest()
            .input('PhotoID', sql.VarChar, photoId)
            .input('PhotoURL', sql.VarChar, newPhotoURL)
            .query("UPDATE Photo SET PhotoURL = @PhotoURL WHERE PhotoID = @PhotoID");
    } catch (error) {
        throw error;
    }
}


////////////////////////////////////////////////////////////////////////
export const deletePhoto = async (req, res) => {
    try {
        const photoId = req.params.id;

        // Check if the photo exists
        const photo = await getsPhotoByIdFromDatabase(photoId);

        if (!photo) {
            sendNotFound(res, 'Photo not found');
        } else {
            // Delete the photo from the database
            await deletePhotoService(photoId); // Update to use deletePhotoService
            sendDeleteSuccess(res, `Photo with id: ${photoId} was deleted successfully`);
        }
    } catch (error) {
        sendServerError(res, error.message);
    }
};

async function getsPhotoByIdFromDatabase(photoId) {
    try {
        const result = await poolRequest()
            .input('PhotoID', sql.VarChar, photoId)
            .query("SELECT * FROM Photo WHERE PhotoID = @PhotoID");

        return result.recordset[0]; // Assuming PhotoID is unique
    } catch (error) {
        throw error;
    }
}

async function deletePhotoService(photoId) {
    try {
        await poolRequest()
            .input('PhotoID', sql.VarChar, photoId)
            .query("DELETE FROM Photo WHERE PhotoID = @PhotoID");
    } catch (error) {
        throw error;
    }
}
/////////////////////////////////////////////////////////