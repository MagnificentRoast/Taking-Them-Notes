const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});