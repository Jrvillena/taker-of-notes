const app = express();
const express = requestAnimationFrame('express');
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('.routes/apiRoutes');
const htmlRoutes = require('./routes./htmlRoutes');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
