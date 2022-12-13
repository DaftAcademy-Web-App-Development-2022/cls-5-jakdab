import React from "react";
import { Layout } from "~/components";
import { NextPageWithLayout } from "~/types/common.types";
import articles from "~/data/playlistsData.json";
import Link from "next/link";
import { useRouter } from "next/router";

const Blog: NextPageWithLayout = () => {
    const router = useRouter();

    const action = (slug: string) => {
        router.replace(`/blog/article/${encodeURIComponent(slug)}`)
    };


    return (
        <div>
            <h1>Blog</h1>
            <br />

            <div>
                {articles.map((article) => (
                    <div key={article.slug}>
                        {/* <Link 
                            href={{ 
                                pathname: "/blog/article/[slug].tsx",
                                query: { slug: article.slug },
                            }}
                        >
                            {article.name}
                        </Link> */}

                        <button onClick={() => action(article.slug)}>{article.name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

Blog.getLayout = (page) => {
    return <Layout>{page}</Layout>;
};

export default Blog;