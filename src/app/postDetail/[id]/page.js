"use client";
import { use, useEffect, useState } from "react";
import { CommunityPostEditor } from "@jojicompany-dev/easily-post-editor";
import Link from "next/link";

export default function CommunityPostDetailPage({ params }) {
  const { id } = use(params);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetail = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`);
        const data = await response.json();
        setContent(data.content);
        setLoading(false);
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
      <div className="flex justify-end mt-6">
        <Link href="/post">
          <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white">
            목록으로 돌아가기
          </button>
        </Link>
      </div>
      <div className="mt-6">
        <CommunityPostEditor initialContent={content} isReadOnly={true} />
      </div>
    </div>
  );
}
