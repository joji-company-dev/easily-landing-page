"use client";
import { use, useEffect, useState } from "react";
import { CommunityPostEditor } from "@jojicompany-dev/easily-post-editor";
import Link from "next/link";

export default function CommunityPostDetailPage({ params }) {
  const { id } = use(params); // URL의 게시글 ID 
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError("해당 게시글을 찾을 수 없습니다.");
          } else {
            setError("게시글 데이터를 가져오는 중 오류가 발생했습니다.");
          }
          return;
        }
        const data = await response.json();
        setContent(data.content);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("데이터를 불러오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 mt-10">
        <div className="h-8 w-full bg-gray-200 rounded mb-4" />
        <div className="h-6 w-5/6 bg-gray-200 rounded mb-2" />
        <div className="h-6 w-3/4 bg-gray-200 rounded" />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-500">게시글을 찾을 수 없습니다.</h2>
        <Link href="/post">
          <button className="mt-4 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
            공지사항 목록으로 돌아가기
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">게시글 상세보기</h2>
      <div className="mt-6">
        <CommunityPostEditor initialContent={content} isReadOnly={true} />
      </div>
      <div className="flex justify-end mt-6">
        <Link href="/post">
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white">
            목록으로 돌아가기
          </button>
        </Link>
      </div>
    </div>
  );
}
