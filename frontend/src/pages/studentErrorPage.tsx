import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from "@/components/ui/card";

 import { useRouteError, isRouteErrorResponse } from "react-router";
 
 export default function ErrorBoundary(){
    const error = useRouteError();
    console.error('Error in ErrorBoundary:', error);
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    {
                        (isRouteErrorResponse(error) ? error.status : 'An unexpected error occurred.')
                    }
                    <br/>
                    {
                        String(error)
                    }
                </CardTitle>
            </CardHeader>
        </Card>
    )
 }