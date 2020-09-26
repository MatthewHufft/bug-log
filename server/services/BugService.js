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
async editBug(id, userEmail, update) {
    let data = await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorEmail: userEmail, closed: false}, update, { new:true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }
  // TODO PREVENT FUTURE EDITS TO CLOSED BUGS
 async closeBug(id, userEmail) {
    let bugData = await dbContext.Bugs.findOne({ _id: id, creatorEmail: userEmail  })
    // @ts-ignore
    bugData.closed = true;
    
    await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorEmail: userEmail}, bugData, { new:true } )
    
    return bugData;
  }
}

export const bugService = new BugService()