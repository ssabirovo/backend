import Router from "express";
// import {  } from "./";

const router = new Router();

router.post("/posts");
router.get("/posts" );
router.getOne("/posts/:id");
router.put("/posts");
router.deleteOne("/posts/:id");

export default router;
