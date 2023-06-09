// Fetch some posts of a specific topic 
export const fetchPosts = async (topic) => {
    const url = `https://www.reddit.com/search.json?q=${topic.toLowerCase()}`;
    const response = await fetch( url );
    let { data } = await response.json();
    const { children } = data;
    data = children.map( element => element.data );
    const posts = data.map(post => ({
        id: post.id,
        title: post.title,
        author: post.author,
        subreddit: post.subreddit,
        created: post.created,
        is_video: post.is_video,
        video_src: post.is_video ? post.media.reddit_video.fallback_url : "none",
        img_src: post.url,
        num_comments: post.num_comments,
        score: post.score
    }));
    return posts;
}
