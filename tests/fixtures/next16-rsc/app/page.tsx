import { Button, Table, Tooltip } from "@jem-open/jem-ui"
import { buttonVariants, cn } from "@jem-open/jem-ui/server"

export default function Page() {
  return (
    <main className={cn("p-4", buttonVariants({ variant: "primary", size: "large" }))}>
      <Tooltip>
        <Button>RSC-safe client boundary</Button>
      </Tooltip>
      <Table />
    </main>
  )
}
