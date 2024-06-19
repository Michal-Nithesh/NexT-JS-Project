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
    // Sort  post in dec order based on date
    const sortedPosts : Post [] = [...posts].sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    // Filter posts to limit
    const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

    return (
    <div className="mt-10">
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
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                { filteredPosts.map(( post ) => (
                    <TableRow key={post.id}>
                        <TableCell>{ post.title }</TableCell>
                        <TableCell className='hidden md:table-cell '>{ post.author }</TableCell>
                        <TableCell className='text-rigth hidden md:table-cell '>{ post.date }</TableCell>
                        <TableCell>
                            <Link href={`/posts/edit/${post.id}`}>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>Edit</button>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
)}
 
export default PostsTable;