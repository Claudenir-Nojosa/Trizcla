"use server";

import { revalidatePath } from "next/cache";
import Expense from "../models/expense.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  description: string;
  value: string;
  author: string;
  path: string;
  date: string;
}

export async function createExpense({
  description,
  value,
  author,
  path,
  date,
}: Params) {
  try {
    connectToDB();

    const createdExpense = await Expense.create({
      author,
      description,
      value,
      date,
    });

    await User.findByIdAndUpdate(author, {
      $push: { expenses: createdExpense._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    console.error(`Error creating Expense: ${error}`);
  }
}

export async function getExpenses(userId: any) {
  try {
    connectToDB();
    return await Expense.find({ author: userId });
  } catch (error) {
    console.log(`There was an error getting the Expenses: ${error}`)
  }
}
