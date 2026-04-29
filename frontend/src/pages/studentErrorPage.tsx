import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from "@/components/ui/card";

 import { useRouteError } from "react-router";
 
 export default function ErrorBoundary(){
    const error : unknown = useRouteError();
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    {error.message}
                </CardTitle>
            </CardHeader>
        </Card>
    )
 }