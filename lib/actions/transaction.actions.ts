"use server";

import { revalidatePath } from "next/cache";
import Transaction from "../models/transaction.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  title: string;
  description: string;
  value: string;
  type: string;
  author: string;
  path: string;
}

export async function createTransaction({
  title,
  description,
  value,
  type,
  author,
  path,
}: Params) {
  try {
    connectToDB();

    const createdTransaction = await Transaction.create({
      title,
      author,
      description,
      value,
      type,
    });

    await User.findByIdAndUpdate(author, {
      $push: { transactions: createdTransaction._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    console.error(`Error creating Transaction: ${error}`);
  }
}
