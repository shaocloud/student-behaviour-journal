import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

class BehEvent {
    date: string;
    type: string;
    description: string;

    constructor(date: string, type: string, description: string) {
        this.date = date;
        this.type = type;
        this.description = description;
    }
}

function BehTable() {

    const dummyData: BehEvent[] = [
        new BehEvent('2024-01-01', 'Positive', 'Helped a classmate with homework.'),
        new BehEvent('2024-01-02', 'Negative', 'Was disruptive during class.'),
        new BehEvent('2024-01-03', 'Negative', 'Hit a classmate.'),
    ];

    return (
        <Table>
            <TableCaption>Behaviour Records</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {dummyData.map((event, index) => (
                    <TableRow key={index}>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.type}</TableCell>
                        <TableCell>{event.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default BehTable