import React from "react";
import { Layout } from "~/components";
import { NextPageWithLayout } from "~/types/common.types";
import articles from "~/data/playlistsData.json";

const Article: NextPageWithLayout = () => {
    return (
        <div>
            <h1>Article</h1>
        </div>
    );
}

Article.getLayout = (page) => {
    return <Layout>{page}</Layout>;
};

export default Article;