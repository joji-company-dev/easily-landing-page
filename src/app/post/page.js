"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/app/_components/ui/typography";
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
import { formatDate } from "../_utils/formatDate";
import { Detector } from "../_components/common/detector";
import { useActiveSectionContext } from "../_components/contexts/activeSectionContext";
import { Separator } from "../_components/ui/separator";
import dayjs from "dayjs";
import { BackgroundGradientAnimation } from "../_components/common/gradientBackground";

const FETCH_POSTS_LIMIT = 10;

export default function NoticePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { setActiveSectionId } = useActiveSectionContext();

  const {
    currentPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    goToNextPage,
    goToPreviousPage,
    getPageRange,
  } = usePagination(1, 1); // 초기 페이지와 총 페이지 수 설정

  const isNewPost = (post) => {
    const today = dayjs();
    const createdAtDate = dayjs(post.createdAt);
    const diff = today.diff(createdAtDate, "day");

    if (diff < 7) {
      return true;
    }
    return false;
  };

  const fetchPosts = async (page) => {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts?page=${page}&limit=${FETCH_POSTS_LIMIT}&categories=NOTICE`
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

  return (
    <div>
      <Detector
        onIntersect={() => setActiveSectionId("notice")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <div className="rounded-2xl shadow-lg p-6 max-w-5xl mx-auto mt-8 lg:mt-32 bg-white">
          <TypographyH1 className="text-center">공지사항</TypographyH1>
          <Separator className="mb-12" />
          <div className="space-y-4">
            {posts.map((post) => (
              <Card
                key={post.id}
                onClick={() => router.push(`/post/${post.id}`)}
                className="hover:shadow-lg border rounded-lg p-4 transition duration-200 cursor-pointer"
              >
                <CardContent className="p-0 flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex-1">
                    <div className="flex gap-2 items-center">
                      <TypographyH2 className="text-lg font-semibold m-0">
                        {post.title}
                      </TypographyH2>
                      {isNewPost(post) && (
                        <div className="text-xs text-primary">New</div>
                      )}
                    </div>

                    <div className="flex gap-2 items-center">
                      <span className="text-gray-400 text-sm">
                        {formatDate(post.createdAt)}
                      </span>
                    </div>
                    <TypographyP className="text-gray-500 text-sm m-0">
                      {post.views}
                      {post.views > 1 ? " Views" : " View"}
                    </TypographyP>
                  </div>
                </CardContent>
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
      </Detector>
    </div>
  );
}
