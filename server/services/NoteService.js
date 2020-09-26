import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NoteService {
  async getAll(email) {
    return await dbContext.Notes.find({ creatorEmail: email }).populate("creator", "name picture")
  }
  async getById(id, email) {
    let data = await dbContext.Notes.findOne({ _id: id, creatorEmail: email })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
  }
  async getNotesByBugId(bugId, email) {
    let data = await dbContext.Notes.find({ bug: bugId, creatorEmail: email})
    return data
  }
  async create(body) {
    let data = await dbContext.Notes.create(body)
    return body
  }
  async edit(id, email, body) {
    let data = await dbContext.Notes.findOneAndUpdate({ _id: id, creatorEmail: email }, body, {new:true})
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }
  async delete(id, email) {
    let data = await dbContext.Notes.findOneAndRemove({ _id: id, creatorEmail: email })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }
}

export const noteService = new NoteService()