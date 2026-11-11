"use client"

import * as React from "react"
import { CloudUpload, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/forms/button"
import { Progress } from "@/components/data-display/progress"
import { resolveMessage, type Message } from "@/lib/messages"

/**
 * Every word `Upload` writes itself. Each key is optional and falls back to the English the
 * component has always shown; placeholders are `{name}` (see `Message`).
 *
 * The `title` and `description` props still win over `uploadTitle`/`uploadedTitle` and the
 * description keys, so a call site that already supplies its own copy is untouched.
 */
interface UploadMessages {
  /** Heading before a file is chosen. English: "Upload file". */
  uploadTitle?: Message
  /** Heading once a file is attached. English: "File uploaded". */
  uploadedTitle?: Message
  /** The drop-zone hint. English: "Drag and drop files here or select to upload.\nFiles must be less than {maxSize} in size." */
  dropHint?: Message<{ maxSize: string }>
  /** While uploading. English: "File being uploaded". */
  uploadingDescription?: Message
  /** Once attached. English: "You have attached {fileName}". */
  uploadedDescription?: Message<{ fileName: string }>
  /** The stand-in for a file's name when there is none. English: "file". */
  fileFallback?: Message
  /** The screen-reader progress announcement. English: "Uploading {fileName}: {progress}%". */
  uploadingStatus?: Message<{ fileName: string; progress: number }>
  /** The chosen-files announcement. English: "Selected {fileNames}". `{fileNames}` is comma-joined. */
  selectedStatus?: Message<{ fileNames: string }>
  /** English: "Select File". */
  selectFile?: Message
  /** English: "Remove File". */
  removeFile?: Message
  /** English: "Submit". */
  submit?: Message
}

interface UploadProps {
  className?: string
  state?: "default" | "uploading" | "uploaded"
  progress?: number
  fileName?: string
  title?: string
  description?: string
  maxSize?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  error?: string
  onFilesSelected?: (files: File[]) => void
  onSelectFile?: () => void
  onRemoveFile?: () => void
  onSubmit?: () => void
  /** Translations for the component's built-in text and accessible names. See `UploadMessages`. */
  messages?: UploadMessages
}

function Upload({
  className,
  state = "default",
  progress = 0,
  fileName,
  title,
  description,
  maxSize = "30mb",
  accept,
  multiple = false,
  disabled = false,
  error,
  onFilesSelected,
  onSelectFile,
  onRemoveFile,
  onSubmit,
  messages,
}: UploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([])
  const isDefault = state === "default"
  const isUploading = state === "uploading"
  const isUploaded = state === "uploaded"

  React.useEffect(() => {
    if (isDefault) return

    setSelectedFiles([])
  }, [isDefault])

  const selectedFileName = fileName ?? (isDefault ? selectedFiles[0]?.name : undefined)
  const fileFallback = resolveMessage(messages?.fileFallback, "file")
  const displayTitle =
    title ||
    (isUploaded
      ? resolveMessage(messages?.uploadedTitle, "File uploaded")
      : resolveMessage(messages?.uploadTitle, "Upload file"))
  const displayDescription =
    description ||
    (isUploaded
      ? resolveMessage(messages?.uploadedDescription, "You have attached {fileName}", {
          fileName: selectedFileName || fileFallback,
        })
      : isUploading
        ? resolveMessage(messages?.uploadingDescription, "File being uploaded")
        : resolveMessage(
            messages?.dropHint,
            "Drag and drop files here or select to upload.\nFiles must be less than {maxSize} in size.",
            { maxSize },
          ))

  const selectFiles = (files: File[]) => {
    if (disabled || files.length === 0) return

    const acceptedFiles = files.filter((file) => {
      if (!accept) return true

      return accept.split(",").some((rule) => {
        const acceptedType = rule.trim().toLowerCase()
        if (acceptedType === "*/*") return true
        if (acceptedType.startsWith(".")) return file.name.toLowerCase().endsWith(acceptedType)
        if (acceptedType.endsWith("/*")) return file.type.toLowerCase().startsWith(acceptedType.slice(0, -1))
        return file.type.toLowerCase() === acceptedType
      })
    })
    const nextFiles = multiple ? acceptedFiles : acceptedFiles.slice(0, 1)

    if (nextFiles.length === 0) return
    setSelectedFiles(nextFiles)
    onFilesSelected?.(nextFiles)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    selectFiles(Array.from(event.target.files ?? []))
    event.target.value = ""
  }

  return (
    <div
      data-slot="upload"
      data-testid="upload-dropzone"
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault()
        selectFiles(Array.from(event.dataTransfer.files))
      }}
      className={cn(
        "flex flex-col items-center justify-center gap-md p-xl rounded-lg bg-greyscale-surface-subtle w-full",
        className
      )}
    >
      <input
        ref={inputRef}
        data-testid="upload-input"
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleInputChange}
      />
      <div className={cn(
        "flex flex-col items-center w-full max-w-[384px]",
        isUploading ? "gap-lg" : "gap-md"
      )}>
        {/* Icon and Text Section */}
        <div className={cn(
          "flex flex-col items-center w-full",
          isUploading ? "gap-xs" : "gap-xxs"
        )}>
          {/* Icon */}
          <div className="flex items-center justify-center size-10 rounded-lg bg-secondary-pink-50">
            {isUploaded ? (
              <FileText className="size-6 text-secondary-pink-900" />
            ) : (
              <CloudUpload className="size-6 text-secondary-pink-900" />
            )}
          </div>

          {/* Title */}
          <div className="flex items-center justify-center w-full">
            <h3 className="text-lg font-semibold text-greyscale-text-title text-center">
              {displayTitle}
            </h3>
          </div>

          {/* Description */}
          <div className="flex items-center justify-center w-full">
            <p className="text-base text-greyscale-text-caption text-center whitespace-pre-wrap">
              {displayDescription}
            </p>
          </div>

          {/* Progress Bar (uploading state only) */}
          {isUploading && (
            <>
              <Progress value={progress} className="w-full" />
              <p role="status" className="sr-only">
                {resolveMessage(messages?.uploadingStatus, "Uploading {fileName}: {progress}%", {
                  fileName: selectedFileName ?? fileFallback,
                  progress,
                })}
              </p>
            </>
          )}
          {isDefault && selectedFiles.length > 0 && (
            <p role="status" className="text-sm text-greyscale-text-caption">
              {resolveMessage(messages?.selectedStatus, "Selected {fileNames}", {
                fileNames: selectedFiles.map((file) => file.name).join(", "),
              })}
            </p>
          )}
          {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        </div>

        {/* Buttons Section */}
        {!isUploading && (
          <div className="flex items-center gap-xxxs">
            {isDefault && (
              <Button
                variant="primary"
                size="medium"
                type="button"
                disabled={disabled}
                onClick={() => {
                  onSelectFile?.()
                  inputRef.current?.click()
                }}
              >
                {resolveMessage(messages?.selectFile, "Select File")}
              </Button>
            )}

            {isUploaded && (
              <>
                <Button
                  variant="outline"
                  size="medium"
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    setSelectedFiles([])
                    if (inputRef.current) inputRef.current.value = ""
                    onRemoveFile?.()
                  }}
                >
                  {resolveMessage(messages?.removeFile, "Remove File")}
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  type="button"
                  disabled={disabled}
                  onClick={onSubmit}
                >
                  {resolveMessage(messages?.submit, "Submit")}
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export { Upload, type UploadMessages, type UploadProps }
