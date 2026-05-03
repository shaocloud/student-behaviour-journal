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

import BehTable from "@/components/beh_table";

import { useLoaderData } from "react-router";

class Student {
    id: string;
    name: string;
    age: number;
    grade: number;
    behaviourHistory: string;

    constructor(id: string, name: string, age: number, grade: number, behaviourHistory: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.behaviourHistory = behaviourHistory;
    }
}

export default function StudentProfile()
{
    const student = useLoaderData() as Student;

    return(
        <div>
        <Card className="max-w-lg py-0 sm:flex-row sm:gap-0">
            <CardContent className='grow-1 px-0'>
                <img
                src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png'
                alt='Banner'
                className='size-full rounded-l-xl'
                />
            </CardContent>
            <div className='py-10 sm:min-w-54'>          
            <CardHeader>
                <CardTitle>{student.name}, {student.age}</CardTitle>
                <CardDescription>
                    Student ID: {student.id}
                </CardDescription>
            </CardHeader>
            <CardContent className='py-2'>
                <p>Grade: {student.grade}</p>
                <p>Behaviour History: {student.behaviourHistory}</p>
            </CardContent>
            </div>
            <CardFooter>
                <p>Card footer</p>
            </CardFooter>
        </Card>

        <BehTable />
        </div>
    )
}