"use client"

import * as React from "react"
import { CloudUpload, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/forms/button"
import { Progress } from "@/components/data-display/progress"

interface UploadProps {
  className?: string
  state?: "default" | "uploading" | "uploaded"
  progress?: number
  fileName?: string
  title?: string
  description?: string
  maxSize?: string
  onSelectFile?: () => void
  onRemoveFile?: () => void
  onSubmit?: () => void
}

function Upload({
  className,
  state = "default",
  progress = 0,
  fileName,
  title,
  description,
  maxSize = "30mb",
  onSelectFile,
  onRemoveFile,
  onSubmit,
}: UploadProps) {
  const isDefault = state === "default"
  const isUploading = state === "uploading"
  const isUploaded = state === "uploaded"

  const displayTitle = title || (isUploaded ? "File uploaded" : "Upload file")
  const displayDescription = description || (
    isUploaded
      ? `You have attached ${fileName || "file"}`
      : isUploading
        ? "File being uploaded"
        : `Drag and drop files here or select to upload.\nFiles must be less than ${maxSize} in size.`
  )

  return (
    <div
      data-slot="upload"
      className={cn(
        "flex flex-col items-center justify-center gap-md p-xl rounded-lg bg-greyscale-surface-subtle w-full",
        className
      )}
    >
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
            <Progress value={progress} className="w-full" />
          )}
        </div>

        {/* Buttons Section */}
        {!isUploading && (
          <div className="flex items-center gap-xxxs">
            {isDefault && (
              <Button
                variant="primary"
                size="medium"
                onClick={onSelectFile}
              >
                Select File
              </Button>
            )}

            {isUploaded && (
              <>
                <Button
                  variant="outline"
                  size="medium"
                  onClick={onRemoveFile}
                >
                  Remove File
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export { Upload }
