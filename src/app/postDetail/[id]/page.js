"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { TypographyH2, TypographyP } from "@/app/_components/ui/typography";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { convertFromLexicalEditorState } from "@lexical/html"; // Lexical의 JSON을 HTML로 변환

export default function PostDetailPage({ params }) {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [id]);

  // Lexical JSON을 HTML로 변환하는 함수
  const renderLexicalContent = (lexicalContent) => {
    // lexicalContent는 Lexical JSON 형식의 데이터입니다.
    try {
      // 변환 로직
      const htmlContent = convertFromLexicalEditorState(lexicalContent); // Lexical JSON -> HTML
      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    } catch (error) {
      console.error("Lexical JSON 변환 오류:", error);
      return <TypographyP>콘텐츠를 렌더링할 수 없습니다.</TypographyP>;
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

  if (!post) {
    return (
      <div className="text-center mt-10">
        <TypographyH2 className="text-red-500">게시글을 찾을 수 없습니다.</TypographyH2>
        <Link href="/post">
          <Button variant="outline" className="mt-4">
            공지사항 목록으로 돌아가기
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8">
      <TypographyH2 className="text-orange-600 mb-4">{post.title}</TypographyH2>
      <TypographyP className="text-gray-500 mb-2">
        <strong>작성자:</strong> {post.author.name}
      </TypographyP>
      <TypographyP className="text-gray-500 mb-2">
        <strong>작성일:</strong> {post.createdAt}
      </TypographyP>
      <TypographyP className="text-gray-500 mb-2">
        <strong>카테고리:</strong> {post.category}
      </TypographyP>
      <TypographyP className="text-gray-500 mb-2">
        <strong>조회수:</strong> {post.views}
      </TypographyP>
      <div className="mt-6">
        {/* Lexical로 작성된 콘텐츠를 HTML로 변환하여 렌더링 */}
        {renderLexicalContent(post.content)} 
      </div>
      <div className="flex justify-end mt-6">
        <Link href="/post">
          <Button
            variant="outline"
            className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            목록으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
