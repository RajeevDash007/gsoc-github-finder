"use server";
import User from "../modals/user.modal";
import { connect } from "../db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
  } catch (error) {
    console.log(error);
  }
}
