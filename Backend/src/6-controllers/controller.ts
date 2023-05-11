import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import MeetingModel from "../4-models/meeting-model";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/dev-teams
router.get("/dev-teams", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const devTeams = await logic.getAllDevTeams();
        response.json(devTeams);
    }
    catch (err: any) {
        next(err);
    }
});
// GET http://localhost:3001/api/schedule
router.get("/schedule", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const schedule = await logic.getAllSchedule();
        response.json(schedule);
    }
    catch (err: any) {
        next(err);
    }
});


// GET http://localhost:3001/api/schedule-per-dev-team/:devTeamId
router.get("/schedule-per-dev-team/:devTeamId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const devTeamId = +request.params.devTeamId;
        const schedule = await logic.getMeetingsScheduleByDevTeam(devTeamId);
        response.json(schedule);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/add-new-meeting
router.post("/add-new-meeting", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetingModel(request.body);
        const addedMeeting = await logic.addNewMeeting(meeting);
        response.json(addedMeeting);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;