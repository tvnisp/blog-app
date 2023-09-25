import Image from 'next/image';

interface IBlogPostProps {
  title: string;
  description?: string;
  body: React.ReactNode;
  image: string;
  category?: string;
  tags?: string[];
  author?: string;
  datetime: string;
}

const BlogPost = (props: IBlogPostProps) => {
  const { title, description, body, image, category, tags, author, datetime } =
    props;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Blog Post Image */}
      <div className="relative h-80">
        <Image
          src={image}
          alt=""
          width={500}
          height={300}
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Blog Post Content */}
      <div className="p-6">
        {/* Category */}
        {category && (
          <div className="mb-2">
            <span className="text-blue-600 font-medium">{category}</span>
          </div>
        )}

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-lg mb-4">{description}</p>
        )}

        {/* Body (Rich Text) */}
        <div className="prose lg:prose-xl max-w-full mt-4">{body}</div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author and Datetime */}
        <div className="mt-8 text-sm text-gray-600">
          <span className="mr-2">By {author}</span>
          <span>{datetime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
