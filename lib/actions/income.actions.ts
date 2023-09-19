"use server";

import { revalidatePath } from "next/cache";
import Income from "../models/income.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  description: string;
  value: number;
  author: string;
  path: string;
  date: string;
}

export async function createIncome({
  description,
  value,
  author,
  path,
  date
}: Params) {
  try {
    connectToDB();

    const createdIncome = await Income.create({
      author,
      description,
      value,
      date
    });

    await User.findByIdAndUpdate(author, {
      $push: { incomes: createdIncome._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    console.error(`Error creating Income: ${error}`);
  }
}
