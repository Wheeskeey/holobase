import { json } from "@sveltejs/kit";
import { prisma } from "$lib/prisma.js";

export async function GET(event) {
  try {
    const fetchedJoints = await prisma.faceJoints.findMany()

    const options: ResponseInit = {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }

    return new Response(JSON.stringify({
      status: "success",
      data: fetchedJoints
    }), options)
  } catch (error) {
    const options: ResponseInit = {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    }

    return new Response(JSON.stringify({
      status: "fail",
      message: error
    }), options)
  }
}

export async function POST(event) {
  const data = await event.request.json()

  interface Joint {
    joint: string
    x: number
    y: number
    z: number
  }

  // I'm sincerely sorry to anyone debugging this
  if (Array.isArray(data)) {
    let jointsToAdd: Joint[] = []

    for (let i = 0; i < data.length; i++) {
      if (!data.at(i).joint) {
        console.log("no joint")
        return json({
          status: "fail",
          message: `Missing data - joint - at index: ${i}`
        }, { status: 400 })
      }
      if (!data.at(i).x) {
        return json({
          status: "fail",
          message: `Missing data - x - at index: ${i}`
        }, { status: 400 })
      }
      if (!data.at(i).y) {
        return json({
          status: "fail",
          message: `Missing data - y - at index: ${i}`
        }, { status: 400 })
      }
      if (!data.at(i).z) {
        return json({
          status: "fail",
          message: `Missing data - z - at index: ${i}`
        }, { status: 400 })
      }

      jointsToAdd.push({
        joint: data.at(i).joint,
        x: data.at(i).x,
        y: data.at(i).y,
        z: data.at(i).z
      })
    }

    try {
      const newJoints = await prisma.faceJoints.createMany({
        data: jointsToAdd
      })

      return json({
        status: "success",
        message: `Bulk operation complete. ${newJoints.count} joints added!`
      })
    } catch (error) {
      return json({
        status: "fail",
        message: `Something went wrong on the server side: ${error}`
      }, { status: 500 })
    }
  } else {
    if (!data.joint) {
      return json({
        status: "fail",
        message: "Missing data - joint"
      }, { status: 400 })
    }
    if (!data.x) {
      return json({
        status: "fail",
        message: "Missing data - x"
      }, { status: 400 })
    }
    if (!data.y) {
      return json({
        status: "fail",
        message: "Missing data - y"
      }, { status: 400 })
    }
    if (!data.z) {
      return json({
        status: "fail",
        message: "Missing data - z"
      }, { status: 400 })
    }
  }

  try {
    const newJoint = await prisma.faceJoints.create({
      data: {
        joint: data.joint,
        x: data.x,
        y: data.y,
        z: data.z
      }
    })

    return json({
      status: "success",
      message: "Joint added!",
      data: newJoint
    })
  } catch (error) {
    return json({
      status: "fail",
      message: `Something went wrong on the server side: ${error}`
    }, { status: 500 })
  }
}

export async function DELETE(event) {
  const data = await event.request.json()

  if (data.consent != "i'm absolutely sure") {
    return json({
      status: "fail",
      message: "You weren't so sure about that huh?"
    }, { status: 401 })
  }

  try {
    await prisma.faceJoints.deleteMany({})

    return json({
      status: "success",
      message: "All records from FaceJoints deleted"
    }, { status: 200 })
  } catch (error) {
    return json({
      status: "fail",
      message: `Something went wrong on the server side: ${error}`
    }, { status: 500 })
  }
}