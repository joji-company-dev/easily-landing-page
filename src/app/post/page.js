"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { TypographyH2, TypographyP } from "@/app/_components/ui/typography";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";

//한페이지에 보여줄 게시물 수 입니다. 보여주길 원하는 게시물 갯수를 입력하면됩니다.
const postSize = 1;

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

  const totalPages = Math.ceil(posts.length / postSize);

  const currentPosts = posts.slice(
    (currentPage - 1) * postSize,
    currentPage * postSize
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 이전 페이지 그룹으로 이동
  const handlePrev = () => {
    const prevGroupStart = Math.max(Math.floor((currentPage - 1) / 5) * 5, 1);
    setCurrentPage(prevGroupStart); 
  };
  
  // 다음 그룹으로 이동
  const handleNext = () => {
    const nextGroupStart = Math.min(
      Math.floor((currentPage - 1) / 5) * 5 + 6, totalPages);
    setCurrentPage(nextGroupStart); 
  };

  const getPageRange = () => {
    const pages = [];
    const rangeStart = Math.floor((currentPage - 1) / 5) * 5 + 1; // 5단위로 시작 페이지 계산
    const rangeEnd = Math.min(rangeStart + 4, totalPages); // 끝 페이지는 totalPages를 넘지 않도록 설정

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    return pages;
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
      <TypographyH2 className="text-orange-600 mb-6 text-center">공지사항</TypographyH2>
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
                <TypographyP className="text-gray-400">{post.createdAt}</TypographyP>
                <TypographyP className="text-gray-400">{post.category}</TypographyP>
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

      <div className="flex justify-center items-center gap-2 mt-6">
        <Button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="text-gray-500 disabled:opacity-50"
        >
          &lt;
        </Button>

        {getPageRange().map((page) => (
          <Button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`${
              page === currentPage
                ? "bg-orange-500 text-white"
                : "text-gray-600"
            }`}
          >
            {page}
          </Button>
        ))}

        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="text-gray-500 disabled:opacity-50"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
}
