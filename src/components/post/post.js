import Link from "next/link";


export default function Post({ post }) {
    return (
        <Link href={`/posts/${post.id}`}>
            <div className="p-4 cursor-pointer w-2/4 sm:w-3/4 lg:w-4/4">
                <img alt="post" className="object-cover" src={post.image} width={100} height={100}/>
                <div className="text-left w-16 sm:w-32 lg:w-48 my-16">
                    <p>{post.title}</p>
                </div>
            </div>
        </Link>
    );
}