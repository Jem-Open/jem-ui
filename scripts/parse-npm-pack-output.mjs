export function parseNpmPackFilename(packOutput) {
  let parsedOutput
  try {
    parsedOutput = JSON.parse(packOutput)
  } catch (error) {
    throw new Error("Invalid npm pack --json output: expected valid JSON", {
      cause: error,
    })
  }

  const packResult = Array.isArray(parsedOutput)
    ? parsedOutput[0]
    : parsedOutput["@jem-open/jem-ui"]
  const filename = packResult?.filename

  if (typeof filename !== "string" || filename.length === 0) {
    throw new Error(
      "Invalid npm pack --json output: missing package filename",
    )
  }

  return filename
}
