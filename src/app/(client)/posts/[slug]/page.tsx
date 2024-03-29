import Header from "@/components/Header";
import React from "react";
import { Post } from "@/utils/interface";
import { VT323 } from "next/font/google";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { tag } from "../../../../../sanity/schemas/tag";
import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";
import { notFound } from "next/navigation";
import getPost from "@/hooks/fetchPostSlug";

export const runtime = 'edge';

interface Params {
  params: {
    slug: string;
  };
}

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className="text-pretty">
        <span
          className={`${dateFont?.className} text-red-500 block text-center`}
        >
          {new Date(post?.publishedAt).toDateString()}
        </span>

        <div className=" mt-1 block text-center">
          {post?.tags?.map((tag) => {
            return (
              <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                <span className=" mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 mt-2 hover:text-red-500 dark:border-gray-90 px-2 py-1 shadow-sm max-w-xs mx-auto">
                  {tag.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 max-w-2xl m-auto prose-headings:my-5 prose-headings:text-2xl prose-p:mb-10 prose-p:leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4">
          <PortableText
            value={post.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="max-w-lg mx-auto mb-8 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <Image
        src={urlForImage(value).url()}
        alt="post"
        width={700}
        height={700}
        className="rounded-lg"
      />
      </div>
    ),
  },
};
