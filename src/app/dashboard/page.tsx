"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    // ChartTooltipItem,
} from "@/components/ui/chart"
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, SearchIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Dashboard() {

    const [searchTerm, setSearchTerm] = useState<string>("")

    type Client = {
        id: number
        name: string
        number: string
        status: "active" | "inactive" | "pending"
    }

    const clients: Client[] = [
        { id: 1, name: "John Doe", number: "001", status: "active" },
        { id: 2, name: "Jane Smith", number: "002", status: "inactive" },
        { id: 3, name: "Alice Johnson", number: "003", status: "pending" },
        { id: 4, name: "Bob Williams", number: "004", status: "active" },
        { id: 5, name: "Charlie Brown", number: "005", status: "active" },
    ]

    const revenueData = [
        { name: "Jan", revenue: 4000 },
        { name: "Feb", revenue: 3000 },
        { name: "Mar", revenue: 5000 },
        { name: "Apr", revenue: 4500 },
        { name: "May", revenue: 6000 },
        { name: "Jun", revenue: 5500 },
    ]

    const marketShareData = [
        { name: "Product A", value: 400 },
        { name: "Product B", value: 300 },
        { name: "Product C", value: 200 },
        { name: "Product D", value: 100 },
    ]

    const statusData = [
        { name: "New Users", number: 2350, status: "increase" },
        { name: "Active Users", number: 5680, status: "stable" },
        { name: "Revenue", number: 23500, status: "decrease" },
        { name: "Conversion Rate", number: 3.2, status: "increase" },
    ]

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.number.includes(searchTerm)
    )

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="clients">Clients</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {statusData.map((item) => (
                            <Card key={item.name}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        {item.name}
                                    </CardTitle>
                                    {item.status === "increase" ? (
                                        <ArrowUpIcon className="h-4 w-4 text-green-500" />
                                    ) : item.status === "decrease" ? (
                                        <ArrowDownIcon className="h-4 w-4 text-red-500" />
                                    ) : (
                                        <ArrowRightIcon className="h-4 w-4 text-yellow-500" />
                                    )}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{item.number}</div>
                                    <p className="text-xs text-muted-foreground">
                                        {item.status === "increase"
                                            ? "+20.1% from last month"
                                            : item.status === "decrease"
                                                ? "-5.3% from last month"
                                                : "No change from last month"}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Revenue Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <ChartContainer config={{
                                    revenue: {
                                        label: "Revenue",
                                        color: "hsl(var(--chart-1))",
                                    },
                                }} className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={revenueData}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                            <Bar dataKey="revenue" fill="var(--color-revenue)" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Market Share</CardTitle>
                                <CardDescription>
                                    Product distribution in the market
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={{
                                    value: {
                                        label: "Market Share",
                                        color: "hsl(var(--chart-2))",
                                    },
                                }} className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={marketShareData}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={80}
                                                fill="var(--color-value)"
                                                label
                                            />
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="clients">
                    <Card>
                        <CardHeader>
                            <CardTitle>Client List</CardTitle>
                            <CardDescription>
                                Manage and view all client information
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2 mb-4">
                                <Input
                                    placeholder="Search clients..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="max-w-sm"
                                />
                                <Button variant="outline" size="icon">
                                    <SearchIcon className="h-4 w-4" />
                                </Button>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Number</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredClients.map((client) => (
                                        <TableRow key={client.id}>
                                            <TableCell>{client.name}</TableCell>
                                            <TableCell>{client.number}</TableCell>
                                            <TableCell>
                                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${client.status === "active" ? "bg-green-100 text-green-800" :
                                                    client.status === "inactive" ? "bg-red-100 text-red-800" :
                                                        "bg-yellow-100 text-yellow-800"
                                                    }`}>
                                                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}