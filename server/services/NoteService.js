import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NoteService {
  getNotesByBugId(id, email) {
    throw new Error("Method not implemented.");
  }

}

export const noteService = new NoteService()