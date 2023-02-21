import express, { NextFunction, Request, Response } from "express";
import ProductModel from "../4-models/meetings-model";
import logic from "../5-logic/logic";

const router = express.Router();

router.get("/developer/groups", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const groups = await logic.getAllGroupDev();
        response.json(groups);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/meeting-by-group/:devId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const devId = +request.params.devId;
        const meeting = await logic.getMeetingByGroup(devId);
        response.json(meeting);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/meeting", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new ProductModel(request.body);
        const addedMeeting = await logic.addMeeting(meeting);
        response.status(201).json(addedMeeting);
    }
    catch (err: any) {
        next(err);
    }
});


export default router;