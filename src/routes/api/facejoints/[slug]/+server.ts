import { json } from "@sveltejs/kit";
import { prisma } from "$lib/prisma";

export async function DELETE(event) {
  const data = await event.request.json()
  if (!event.params.slug) {
    return json({
      status: "fail",
      message: "Param slug is missing"
    }, { status: 400 })
  }

  const slug = parseInt(event.params.slug)

  if (isNaN(slug) && event.params.slug === '' + slug && slug > 0) {
    return json({
      status: "fail",
      message: "Slug is NaN"
    }, { status: 400 })
  }

  try {
    const deletedJoint = await prisma.faceJoints.delete({
      where: {
        id: slug
      }
    })

    return json({
      status: "success",
      message: "Joint deleted!",
      data: deletedJoint
    }, { status: 200 })
  } catch (error) {
    return json({
      status: "success",
      message: `Something went wrong on the server side ${error}`
    }, { status: 500 })
  }
}