"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { TypographyH2, TypographyP } from "@/app/_components/ui/typography";
import { Button } from "@/app/_components/ui/button";

/**
 * @typedef {Object} posts
 * @property {string} title - 게시글 제목
 * @property {string} author - 게시글 저자
 * @property {string} category - 카테고리
 * @property {string} createdAt - 작성일
 * @property {number} views - 조회수
 * @property {number} commentCount - 댓글수
 */

export default function EasilyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const MAX_POST = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts?categories=NOTICE");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setPosts(json.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 mt-10">
        <Skeleton className="h-8 w-full mb-4" />
        <Skeleton className="h-6 w-5/6 mb-2" />
        <Skeleton className="h-6 w-3/4" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8">
      <TypographyH2 className="text-orange-600 mb-6 text-center">
        공지사항
      </TypographyH2>
      <div className="space-y-4">
        {posts.slice(0, MAX_POST).map((post) => (
          <Card
            key={post.id}
            className="border-b pb-4 last:border-none hover:bg-gray-50 transition-colors"
          >
            <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <TypographyH2 className="text-orange-500 text-lg font-semibold">
                  {post.title}
                </TypographyH2>
                <TypographyP className="text-gray-500 text-sm">
                  <strong>카테고리:</strong> {post.category}
                </TypographyP>
              </div>
              <div className="text-sm text-gray-500 text-right md:text-left mt-2 md:mt-0">
                <TypographyP>
                  <strong>작성자:</strong> {post.author.name}
                </TypographyP>
                <TypographyP>
                  <strong>작성일:</strong> {post.createdAt}
                </TypographyP>
                <TypographyP>
                  <strong>조회수:</strong> {post.views} | <strong>댓글:</strong>{" "}
                  {post.commentCount}
                </TypographyP>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {posts.length > MAX_POST && (
        <div className="text-center mt-6">
          <Button asChild>
            <a href="/post">더보기</a>
          </Button>
        </div>
      )}
    </div>
  );
}
