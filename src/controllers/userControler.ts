import { Request, RequestHandler, Response } from "express";
import { User } from "../models/user";

//Create new User
export const createUser : RequestHandler = (req:Request, res:Response) => {
    if (!req.body) { 
        return res.status(400).json({ 
        status: "error", 
        message: "Content can not be empty", 
        payload: null, 
        }); 
    } 

    const {isAdmin, ...user} = { ...req.body }; 
      User.create(user) 
        .then((data: User | null) => { 
          res.status(200).json({ 
            status: "success", 
            message: "User successfully created", 
            payload: data, 
          }); 
        }) 
        .catch((err) => { 
           res.status(500).json({ 
             status: "error", 
             message: "Something happened creating a user. " + err.message, 
             payload: null, 
           }); 
        }); 
};

//Update User by Id
export const updateUser : RequestHandler = (req:Request, res:Response) => {
  // Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
  } 

// Save Product in the database 
  User.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated) { 
      return res.status(200).json({ 
        status: "success", 
        message: "User successfully updated", 
        payload: { ...req.body }, 
      }); 
    } else { 
      return res.status(500).json({ 
        status: "error", 
        message: "Something happened updating the user. ", 
        payload: null, 
    }); 
   } 
  }) 
  .catch((err) => { 
    res.status(500).json({ 
      status: "error", 
      message: "Something happened updating a user. " + err.message, 
      payload: null, 
  }); 
}); 
};

//Get User by Id
export const getUserbyId : RequestHandler = (req:Request, res:Response) => {
  User.findByPk(req.params.id as any) 
  .then((data: User | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "User successfully retrieved", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "Something happened retrieving all users. " + err.message, 
      payload: null, 
    }); 
  }); 
};

//Get All Users
export const getAllUsers : RequestHandler = (req:Request, res:Response) => {
    User.findAll() 
        .then((data: User[]) => { 
          return res.status(200).json({ 
             status: "success", 
               message: "Users successfully retrieved", 
               payload: data, 
          }); 
        }) 
        .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all users. " + err.message, 
       payload: null, 
    }); 
  }); 
};

//Get Users by Business Id
export const getUserbyBusinessId : RequestHandler = (req:Request, res:Response) => {
if(!req.body){
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
}

  User.findAll({ where: { id: req.params.id } }) 
  .then((data: User[]) => { 
      return res.status(200).json({ 
             status: "success", 
               message: "Users successfully retrieved", 
               payload: data, 
          }); 
     })
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all users. " + err.message, 
       payload: null, 
    }); 
   }); 
 

};

//Delete User by Id
export const deleteUser : RequestHandler = async (req:Request, res:Response): Promise<void> => {
    const { id } = req.body; 
    try { 
      await User.destroy({ where: { id } }); 
      res.status(200).json({ message: "User deleted" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error deleting users", 
        error, 
      }); 
    } 
};