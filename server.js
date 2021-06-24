const express = require('express');
const routes = require('./routes')
const sequelize = require('./config/connection');

const app = express()
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use(routes);

sequelize.sync({ force: flase}).then(() => {
    app.listen(port, () => console.log(`taylor-api app listening on port ${port}!`));
});
