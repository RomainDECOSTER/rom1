// import "mocha";
// import { IUser, model as User } from "../src/datagateway/user";

// const express = require("../src/config/express")();

// export const request = require("supertest")(express);

// export const chai = require("chai");
// export const should = chai.should();

// const testUser = { username: "testuser", password: "mytestpass" };

// const createUser = async (): Promise<void> => {
//   const UserModel = new User(testUser);
//   await UserModel.save();
// };

// const getUser = async (): Promise<IUser> => {
//   console.log("--------get----------");
//   let user = await User.findOne({ name: "Romain" }).exec();
//   console.log("---------user--------", user);
//   let users = await User.find({});
//   console.log("---------users-------", users);
//   if (users.length === 0) {
//     await createUser();
//     return getUser();
//   } else {
//     return users[0];
//   }
// };

// export const login = async (): Promise<any> => {
//   console.log("--------test----------");
//   let user = await getUser();
//   console.log(user);
//   return request
//     .post(process.env.API_BASE + "login")
//     .send({ username: user.username, password: testUser.password })
//     .expect(200);
// };
