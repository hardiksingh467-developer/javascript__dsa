import asyncHandler from "express-async-handler";

export const asynchronousJavascript = asyncHandler((req, res) => {
    return res.status(200).json({
        success: true,
        message: "Asynchronous JavaScript examples executed successfully",

    });
});