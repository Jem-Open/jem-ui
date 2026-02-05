import { Sidebar } from "@/components/navigation/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/navigation/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar user={{ name: "Username", initials: "CN" }} />

      <main className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-heading font-semibold text-greyscale-text-title leading-9">
          Hello, Amber!
        </h1>
        <p className="text-base text-greyscale-text-caption mt-2">
          Welcome back to Jem Hub. See what&apos;s new at Jem and review your company&apos;s activities.
        </p>

        <Tabs defaultValue="news-feed" className="mt-10">
          <div className="border-b border-greyscale-border">
            <TabsList variant="line" className="border-b-0">
              <TabsTrigger value="news-feed" variant="line">News Feed</TabsTrigger>
              <TabsTrigger value="company-activity" variant="line">Company Activity</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="news-feed">
            <div className="bg-neutral-50 rounded-xs p-md mt-4">
              <iframe
                src="https://helpdesk.jemhr.online/ebd//26a4331e23ef80e0889ac81e8a7dc181"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                className="rounded-xs"
              />
            </div>
          </TabsContent>

          <TabsContent value="company-activity">
            <p className="text-greyscale-text-body mt-4">Company activity content here.</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
