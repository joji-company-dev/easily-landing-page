"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { TypographyH2 } from "@/app/_components/ui/typography";

/**
 * @typedef {Object} Post
 * @property {string} id - 게시글 ID
 * @property {string} title - 게시글 제목
 */

export default function EasilyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const MAX_POST = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/posts?categories=NOTICE`
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const json = await response.json();
        setPosts(json.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-3 mt-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-5/6" />
      </div>
    );
  }

  return (
    <div className="border-t pt-4">
      <div className="flex justify-between items-center mb-3">
        <TypographyH2 className="text-2xl font-semibold text-gray-600">
          공지사항
        </TypographyH2>
        <Link href="/post" className="text-gray-500 hover:underline text-sm">
          더보기 →
        </Link>
      </div>

      <ul className="space-y-2">
        {posts.slice(0, MAX_POST).map((post) => (
          <li key={post.id} className="truncate text-gray-700">
            <Link
              href={`/postDetail/${post.id}`}
              className="hover:text-orange-600 transition"
            >
              🔸 {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
