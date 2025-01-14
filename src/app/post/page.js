"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { TypographyH2, TypographyP } from "@/app/_components/ui/typography";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";

/**
 * @typedef {Object} Post
 * @property {number} id - 게시글 ID
 * @property {string} title - 게시글 제목
 * @property {string} author - 게시글 저자
 * @property {string} category - 카테고리
 * @property {string} createdAt - 작성일
 * @property {number} views - 조회수
 * @property {number} commentCount - 댓글 수
 */

//한 페이지 내에서 보여줄 게시글의 개수 원하는대로 변경가능
const postSize = 5;

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setPosts(json.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //전체 페이지 수 개산
  const totalPages = Math.ceil(posts.length / postSize);

  //현재 페이지에 해당하는 게시글 계산
  const currentPosts = posts.slice(
    (currentPage - 1) * postSize,
    currentPage * postSize
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
    <div className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto mt-8">
      <TypographyH2 className="text-orange-600 mb-6 text-center">
        공지사항
      </TypographyH2>
      <div className="space-y-4">
        {currentPosts.map((post) => (
          <Card
            key={post.id}
            className="hover:shadow-lg border rounded-lg p-4 transition duration-200"
          >
            <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex-1">
                <TypographyH2 className="text-orange-600 text-lg font-semibold mb-2">
                  {post.title}
                </TypographyH2>
                <TypographyP className="text-gray-500 text-sm mb-1">
                  <strong>작성자:</strong> {post.author.name}
                </TypographyP>
                <TypographyP className="text-gray-500 text-sm">
                  <strong>조회수:</strong> {post.views} | <strong>댓글:</strong>{" "}
                  {post.commentCount}
                </TypographyP>
              </div>
              <div className="text-sm text-gray-500 md:text-right mt-4 md:mt-0">
                <TypographyP className="text-gray-400">
                  {post.createdAt}
                </TypographyP>
                <TypographyP className="text-gray-400">
                  {post.category}
                </TypographyP>
              </div>
            </CardContent>
            <div className="flex justify-end mt-4">
              <Button
                onClick={() => router.push(`/postDetail/${post.id}`)}
                variant="outline"
                className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                자세히 보기
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-500 disabled:opacity-50"
        >
          이전
        </Button>
        <div className="text-gray-600">
          {currentPage} / {totalPages}
        </div>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-500 disabled:opacity-50"
        >
          다음
        </Button>
      </div>
    </div>
  );
}
