import asyncHandler from "express-async-handler";

export const signallingJavascript = asyncHandler((req, res) => {
    // Processes can communicate with each other in two ways:
    // 1. By telling the OS to allocate a shared memory region and then READing and WRITing to it. 
    // 2. By using message passing, where one process sends a message to another process.
    // there actually a third option too which is not described as such
    // sometimes all a process needs to do is to send a signal to another process
    // to tell it to do something, like reload its configuration or terminate.

    // A signal is a small message that notifies a process that an event has occurred.
    // OS defines there own set of signals, which are used to notify processes about events like termination requests, segmentation faults, etc.

    // Each signal has there default action when a Signal is received by a process.
    // If we do not define the action to occur on a signal, the process will fallback to default action.

    // USER -> SHELL -> KERNEL -> HARDWARE
    return res.status(200).json({
        success: true,
        message: "Signals examples executed successfully",

    });
});