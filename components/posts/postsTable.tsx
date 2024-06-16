import { Table, 
    TableBody, 
    TableCell, 
    TableHead,
    TableHeader,
    TableCaption,
    TableRow, } from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/data/posts';
import { Post } from '@/types/posts';

interface PostsTableProps {
    limit?: number;
    title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
    return <div className="mt-10">
        <h3 className="text-2xl mb-4 font-semibold">
            { title ? title : 'Posts' }
        </h3>
        <Table>
            <TableCaption>A list of recent post</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className='hidden md:table-cell'>Author</TableHead>
                    <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
                </TableRow>
            </TableHeader>
        </Table>
    </div>;
}
 
export default PostsTable;