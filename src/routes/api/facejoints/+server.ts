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
      message: "Something went wrong on the server side"
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
      message: "Something went wrong on the server side"
    }, { status: 500 })
  }
}