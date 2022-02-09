function generateBlogPost(postData)
{
    return `
        <div class="blog_item full grey_bg">
            <a class="full_link" href="blog-item.html#${postData.id}"></a>
            <div class="abs_bg" style="background-color:#0f404f;"></div>
            <div class="blog_item_inner">
                <h1>${postData.title}</h1>
                <h5 class="date"><div>${postData.author}</div><div>${postData.date}</div>
                <p>${postData.description}</p>
            </div>
        </div>
    `;
}

export default generateBlogPost;