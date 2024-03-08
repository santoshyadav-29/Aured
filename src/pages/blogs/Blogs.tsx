import React from "react";

// import { useQuery } from "@tanstack/react-query";

import SecondaryCover from "../../layouts/secondaryCover";
import PinnedBlogs from "../../components/blogs/PopularBlogs";
import RecentBlogs from "../../components/blogs/RecentBlogs";
import { API_URL } from "../../constants/Constant";

interface Blog {
  pinned: boolean;
  thumbnail: string;
  title: string;
  description: string;
  blogUrl: string;
  // other properties of the blog object
}

interface BlogsResponse {
  blogs: Blog[];
}

// create a demo dummy data
const data: Blog[] = [
  {
    pinned: true,
    thumbnail: "https://via.placeholder.com/150",
    title: "Blog 1",
    description: "This is a blog 1",
    blogUrl: "https://www.google.com",
  },
  {
    pinned: true,
    thumbnail: "https://via.placeholder.com/150",
    title: "Blog 2",
    description: "This is a blog 2",
    blogUrl: "https://www.google.com",
  },
  {
    pinned: true,
    thumbnail: "https://via.placeholder.com/150",
    title: "Blog 2",
    description: "This is a blog 2",
    blogUrl: "https://www.google.com",
  },
  {
    pinned: true,
    thumbnail: "https://via.placeholder.com/150",
    title: "Blog 2",
    description: "This is a blog 2",
    blogUrl: "https://www.google.com",
  },
  {
    pinned: false,
    thumbnail: "https://via.placeholder.com/150",
    title: "Blog 3",
    description: "This is a blog 3",
    blogUrl: "https://www.google.com",
  },
  {
    pinned: false,
    thumbnail: "https://via.placeholder.com/150",
    title: "Blog 3",
    description: "This is a blog 3",
    blogUrl: "https://www.google.com",
  },
  {
    pinned: false,
    thumbnail: "https://via.placeholder.com/150",
    title: "Blog 3",
    description: "This is a blog 3",
    blogUrl: "https://www.google.com",
  },

  {
    pinned: false,
    thumbnail: "https://via.placeholder.com/150",
    title: "Blog 4",
    description: "This is a blog 4",
    blogUrl: "https://www.google.com",
  },
];

const Blogs: React.FC = () => {
  // const fetchBlogs = async (): Promise<BlogsResponse> => {
  //   const res = await fetch(`${API_URL}/blogs`);
  //   return res.json();
  // };

  // const { isLoading, isError, data } = useQuery<BlogsResponse, Error>(
  //   ["blogs"],
  //   fetchBlogs
  // );

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  // const blogs = data?.blogs || [];
  const blogs = data || [];

  const pinnedBlogs = blogs.filter((blog) => blog.pinned);
  const recentBlogs = blogs.filter((blog) => !blog.pinned);

  return (
    <>
      <SecondaryCover
        title="Blogs"
        description="We are a non-profit organization focusing on child education with technology."
      />
      <div className="story p-4">
        <PinnedBlogs blogs={pinnedBlogs} />
        <RecentBlogs blogs={recentBlogs} />
      </div>
    </>
  );
};

export default Blogs;
