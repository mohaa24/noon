//import styles from '../styles/posts.module.css'
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export const getStaticProps = async () => {
  //const res = await fetch('http://localhost:8080/api/json_DB/');
  const res = await fetch("http://localhost:3000/post");

  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Home = ({ posts }) => {
  // console.log(posts)

  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      console.log(posts[1].liked);
      if (posts[i].liked === "y") {
        document.getElementById(i + 1).style.fill = "red";
      }
    }
  }, []);

  const handleLike = (obj) => {
    obj.liked = "y";
    console.log(obj);

    /*
  fetch('http://localhost:3000/post/',{
    method:'POST',
    header:{"Content-Type":"application/json"},
    body:JSON.stringify({   "id": 1,
    "name": "Leanne Graham",
    "username": "lenbret",
    "avatar":"/user1.jpg",
    "img":"/img1.jpg",
    "tags":"",
    "discription":"Lorem ipsum dolor,",
    "comments":"21",
    "liked":"y",
    "likes":"12"} )
  }
 

  )
*/
    let connectionStr = "http://localhost:3000/post/" + obj.id;
    axios
      .put(connectionStr, obj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("Liked");

    document.getElementById(obj.id).style.fill = "red";

    for (let i = 0; i < 7; i++) {
      console.log(posts[1].liked);
      if (posts[i].liked === "y") {
        document.getElementById(i + 1).style.fill = "red";
      }
    }
  };

  return (
    <div>
      <h1 className="title">All posts</h1>
      {posts.map((post) => (
        <>
          <div className="post">
            <div className="profile_info">
              <Image
                className="avatar_img"
                src={post.avatar}
                alt="user avatar"
                width={40}
                height={40}
              />
              <div className="usr_name col-6">{post.username}</div>
            </div>
            <div className="post_img">
              <Image src={post.img} alt="site logo" width={614} height={614} />
            </div>
            <div className="likes">
              <span class="">
                <svg
                  onClick={() => {
                    handleLike(post);
                  }}
                  className="heart"
                  id={post.id}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                </svg>
              </span>
            </div>
            <div className="post_footer">
              <div className="likes_count">
                <i class="fas fa-heart"></i>
                {post.likes} likes
              </div>
              <div className="discription"> {post.discription} </div>
              <div className="tags">#iphone #mobile #tech #apple</div>
              <div className="view_comments">
                View all {post.comments} comments
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
