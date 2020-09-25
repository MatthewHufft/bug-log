import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugService {
 async getAll(userEmail) {
   return await dbContext.Bugs.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }
 async getBugById(id, userEmail) {
    let data = await dbContext.Bugs.findOne({_id: id, creatorEmail: userEmail })
    if(!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
  }
 async createBug(body) {
    let data = await dbContext.Bugs.create(body)
    return data
  }
async editBug(id, email, body) {
    throw new Error("Method not implemented.");
  }
 async closeBug(id, email) {
    throw new Error("Method not implemented.");
  }

}

export const bugService = new BugService()