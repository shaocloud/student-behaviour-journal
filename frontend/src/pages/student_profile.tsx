{/*
    Profiles need:
    Card
    Chart
    Table
    Tabs
    Skeleton
    Badge
    Item
     */}

import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from "@/components/ui/card";

import { useLoaderData } from "react-router";

export default function StudentProfile()
{
    const student = useLoaderData();

    return(
        <Card>
            <CardHeader>
                <CardTitle>Student Profile</CardTitle>
                <CardDescription>
                    This is the student profile page.
                    It will contain information about the student, such as their name, age, grade, and behaviour history.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Name: John Doe</p>
                <p>Age: 10</p>
                <p>Grade: 5</p>
                <p>Behaviour History: Good</p>
            </CardContent>
            <CardFooter>
                <p>Card footer</p>
            </CardFooter>
        </Card>
    )
}