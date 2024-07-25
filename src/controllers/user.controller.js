import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Shrey " });
});

const msgUser = asyncHandler(async (req, res) => {
  res.status(202).json({ message: "mesg" });
});

export { registerUser, msgUser };
