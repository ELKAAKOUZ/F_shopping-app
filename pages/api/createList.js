import { connectToDatabase } from "../../db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { listName, deadline } = req.body;

  // Validation
  if (!listName || !deadline) {
    res.status(400).json({ message: "List name and deadline are required" });
    return;
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection("lists"); // Replace with your collection name

    const result = await collection.insertOne({
      listName,
      deadline,
      products: [], // Initially empty array for products
    });

    console.log("List created successfully:", result.insertedId);

    res.status(201).json({
      message: "List created successfully",
      listId: result.insertedId,
    });
  } catch (error) {
    console.log("Error creating list:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
