module.exports = (req, res, next) => {
    console.log("Hi I am inside /shops");
    const authenticated = true;
    if(authenticated) {
        next();
    } else {
        res.status(401).send("UnAuthenticated");
    }
}