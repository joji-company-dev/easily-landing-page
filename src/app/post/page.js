"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { TypographyH2, TypographyP } from "@/app/_components/ui/typography";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/app/_components/ui/pagination";
import usePagination from "../_components/hooks/usePagination";

export default function NoticePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const {
    currentPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    goToNextPage,
    goToPreviousPage,
    getPageRange,
  } = usePagination(1, 1); // 초기 페이지와 총 페이지 수 설정

  const fetchPosts = async (page) => {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts?page=${page}&limit=6&categories=NOTICE`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const notice = await response.json();
    setPosts(notice.data);
    setTotalPages(notice.meta.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

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
        {posts.map((post) => (
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

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationPrevious
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          />
          {getPageRange().map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages > currentPage + 3 && (
            <PaginationItem>
              <PaginationLink disabled>...</PaginationLink>
            </PaginationItem>
          )}
          <PaginationNext
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
}
