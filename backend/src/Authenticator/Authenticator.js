import jwt from 'jsonwebtoken';

const authenticateOperations = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('Error decoding token:', err);
                return res.status(401).send({ error: 'Unauthorized: Invalid token' });
            } else {
                console.log('Decoded Token:', decoded);

                // Ensure that req.user is properly set
                req.user = {
                    UserID: decoded.UserID,
                    // Other user information...
                };

                next();
            }
        });
    } else {
        return res.status(401).send({ error: 'Unauthorized: No token provided' });
    }
};

export default authenticateOperations;
