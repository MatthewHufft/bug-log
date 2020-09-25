import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { bugService } from "../services/BugService";
import { noteService } from "../services/NoteService";

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      .get("/:id", this.getBugById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("", this.createBug)
      .put("/:id", this.editBug)
      .delete("/:id", this.closeBug)
  }
  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll(req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async getBugById(req, res, next){
    try {
      let data = await bugService.getBugById(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getNotesByBugId(req, res, next){
    try {
      let data = await noteService.getNotesByBugId(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async createBug(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let data = await bugService.createBug(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }
  async editBug(req, res, next){
    try {
      let data = await bugService.editBug(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async closeBug(req, res, next){
    try {
      await bugService.closeBug(req.params.id, req.userInfo.email)
    } catch (error) {
      next(error)
    }
  }


}