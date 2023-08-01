import express from "express";
import { structor, all, chain, configs, cors, intro, publics, router } from "./lessons/index.js";

// ============================================== Structor =============================================
// structor();

// ============================================== Configs ==============================================
const app = express();
configs(app);

// ============================================== Intro ================================================
// intro(app);
// chain(app);

// ============================================ Middlewares ============================================
// publics(app);
// cors(app);
// all(app);

// ================================= Routes, MVC, Authentications, JWT =================================
/*
   MVC:
   - Model View Controllers
   - Its Just To Create The Controllers Folders And Its Functions To Use It In The Route
   Authentications:
   - Use bcrypt.js To Encrypt The User Password
   - Use JWT To Send The User Info To The Client In The Cookies
   Access_Token
   - For Short Time
   - Sent As JSON To The Client
   - Store In The Memory Not In The Localstorage OR The Cookies
   Refresh_Token
   - For Long Time
   - Sent As httpOnly Cookie
   - Not Accessible Via Javascript
   - Must Have Expiry Time At Some Point
*/

app.use("/", router);
