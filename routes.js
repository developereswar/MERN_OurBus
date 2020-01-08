"use strict";
import admin from './api/routers/admin';
import user from './api/routers/users';
export default function(app) {

app.use('/v1/api', admin);
app.use('/v1/api', user);
}
